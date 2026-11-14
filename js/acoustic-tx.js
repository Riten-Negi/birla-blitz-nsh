/**
 * NASA Earth Information Center - Acoustic Telemetry Transmitter (Acoustic TX)
 * Encodes dataset tokens and telemetry metadata into acoustic FSK soundwaves
 * for transmission over laptop speakers/AUX to the mobile field receiver.
 */

class EarthAcousticTx {
  constructor(audioEngine) {
    this.audioEngine = audioEngine;
    this.acousticEngine = null;
    this.instance = null;
    this.isReady = false;
    this.isAutoBeacon = true;
    this.currentProtocol = "audible_fast";
    this.txVolume = 15; // 0 to 100
    this.lastTransmittedPayload = "";
    
    this.onStatusChange = null;
  }

  async init() {
    if (typeof acoustic_factory === "undefined") {
      console.warn("[Acoustic TX] acoustic_factory is not loaded.");
      return;
    }

    try {
      this.acousticEngine = await acoustic_factory();
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      const sampleRate = this.audioEngine && this.audioEngine.ctx ? this.audioEngine.ctx.sampleRate : 48000;
      
      const parameters = this.acousticEngine.getDefaultParameters();
      parameters.sampleRateInp = sampleRate;
      parameters.sampleRateOut = sampleRate;
      this.instance = this.acousticEngine.init(parameters);
      this.isReady = true;
      console.log("[Acoustic TX] Transmitter initialized at sample rate:", sampleRate);
      if (this.onStatusChange) this.onStatusChange("READY");
    } catch (e) {
      console.error("[Acoustic TX] Failed to initialize:", e);
      if (this.onStatusChange) this.onStatusChange("ERROR: " + e.message);
    }
  }

  getProtocolId(protocolName) {
    if (!this.acousticEngine || !this.acousticEngine.ProtocolId) return 1;
    switch (protocolName) {
      case "audible_normal":
        return 0;
      case "audible_fast":
        return 1;
      case "audible_fastest":
        return 1EST;
      case "ultrasound_fast":
        return 3;
      default:
        return 1;
    }
  }

  convertTypedArray(src, type) {
    const buffer = new ArrayBuffer(src.byteLength);
    new src.constructor(buffer).set(src);
    return new type(buffer);
  }

  /**
   * Encodes text and broadcasts acoustic telemetry over speakers/AUX.
   */
  transmit(payloadText) {
    if (!this.isReady || !this.acousticEngine || !this.instance) {
      console.warn("[Acoustic TX] Transmitter not ready yet.");
      return false;
    }

    try {
      const ctx = this.audioEngine.ctx || new (window.AudioContext || window.webkitAudioContext)({ sampleRate: 48000 });
      if (ctx.state === "suspended") {
        ctx.resume();
      }

      const protocolId = this.getProtocolId(this.currentProtocol);
      const waveform = this.acousticEngine.encode(this.instance, payloadText, protocolId, this.txVolume);
      
      if (!waveform || waveform.length === 0) {
        console.warn("[Acoustic TX] Encoding produced empty waveform.");
        return false;
      }

      // Convert Int8/Int16 to Float32 buffer
      const floatBuf = this.convertTypedArray(waveform, Float32Array);
      const audioBuffer = ctx.createBuffer(1, floatBuf.length, ctx.sampleRate);
      audioBuffer.getChannelData(0).set(floatBuf);

      const source = ctx.createBufferSource();
      source.buffer = audioBuffer;

      // Connect to master audio bus (and speakers)
      if (this.audioEngine.masterGain) {
        source.connect(this.audioEngine.masterGain);
      } else {
        source.connect(ctx.destination);
      }

      source.start(0);
      this.lastTransmittedPayload = payloadText;
      console.log(`[Acoustic TX] Transmitted acoustic beacon: "${payloadText}" (${waveform.length} samples)`);
      
      if (this.onStatusChange) {
        this.onStatusChange("TRANSMITTING", payloadText);
        setTimeout(() => {
          this.onStatusChange("IDLE", payloadText);
        }, (waveform.length / ctx.sampleRate) * 1000 + 300);
      }

      return true;
    } catch (err) {
      console.error("[Acoustic TX] Transmit error:", err);
      if (this.onStatusChange) this.onStatusChange("ERROR: " + err.message);
      return false;
    }
  }

  /**
   * Helper to build a standard NASA EIC telemetry token for a dataset & frame.
   */
  buildToken(dataset, frameIndex = 0) {
    const svsTag = dataset.nasaSvsId || dataset.id.toUpperCase();
    const cleanId = dataset.id.toUpperCase().replace(/-/g, "_");
    const frame = dataset.frames && dataset.frames[frameIndex] ? dataset.frames[frameIndex] : null;
    const yearOrLabel = frame ? (frame.year || frame.month || frame.label.replace(/\s+/g, "_")) : "LIVE";
    
    // Format: NASA_EIC:<DATASET_KEY>:<PARAM>:<SVS>
    return `NASA_EIC:${cleanId}:${yearOrLabel}:${svsTag}`;
  }
}

window.EarthAcousticTx = EarthAcousticTx;
