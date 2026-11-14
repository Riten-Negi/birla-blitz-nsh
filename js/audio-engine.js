/**
 * NASA Earth Information Center - Real-Time Web Audio Sonification Engine
 * High-fidelity procedural audio synthesis with polyphony, algorithmic reverb,
 * dynamic filtering, scale quantization, and live audio recording.
 */

class EarthAudioEngine {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.isMuted = false;
    this.masterVolume = 0.75;
    
    // Scale definitions in semitones
    this.scales = {
      "dorian": { name: "Dorian (Climate Deep)", intervals: [0, 2, 3, 5, 7, 9, 10, 12, 14, 15, 17, 19, 21, 22, 24] },
      "major_pentatonic": { name: "Major Pentatonic (Biosphere)", intervals: [0, 2, 4, 7, 9, 12, 14, 16, 19, 21, 24] },
      "lydian": { name: "Lydian (Celestial Lights)", intervals: [0, 2, 4, 6, 7, 9, 11, 12, 14, 16, 18, 19, 21, 23, 24] },
      "aeolian": { name: "Aeolian (Atmospheric Minor)", intervals: [0, 2, 3, 5, 7, 8, 10, 12, 14, 15, 17, 18, 20, 22, 24] },
      "ocean_hexatonic": { name: "Ocean Hexatonic (Fluid)", intervals: [0, 2, 4, 7, 9, 11, 12, 14, 16, 19, 21, 23, 24] },
      "insen": { name: "Insen (Cryosphere Ice)", intervals: [0, 1, 5, 7, 10, 12, 13, 17, 19, 22, 24] },
      "phrygian_dominant": { name: "Phrygian Dominant (Wildfire)", intervals: [0, 1, 4, 5, 7, 8, 10, 12, 13, 16, 17, 19, 20, 22, 24] },
      "microtonal": { name: "Microtonal Continuous (Raw Linear)", intervals: null }
    };
    
    this.currentScale = "dorian";
    this.rootMidi = 45; // A2
    this.droneIntensity = 0.6;
    this.reverbWet = 0.35;
    this.arpeggioDensity = 0.5;
    
    // Audio recording state
    this.isRecording = false;
    this.mediaRecorder = null;
    this.recordedChunks = [];
    
    // Nodes
    this.masterGain = null;
    this.reverbNode = null;
    this.reverbGain = null;
    this.analyser = null;
    this.droneOsc1 = null;
    this.droneOsc2 = null;
    this.droneGain = null;
    this.droneFilter = null;
    
    // Noise generator for wind/fire
    this.noiseNode = null;
    this.noiseGain = null;
    this.noiseFilter = null;
    
    // Active voices pool
    this.activeVoices = [];
    this.streamDest = null;
  }

  init() {
    if (this.ctx) return;
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    this.ctx = new AudioCtx();
    
    // Master Gain
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(this.masterVolume, this.ctx.currentTime);
    
    // Visualizer Analyser
    this.analyser = this.ctx.createAnalyser();
    this.analyser.fftSize = 2048;
    this.analyser.smoothingTimeConstant = 0.85;
    
    // Algorithmic Reverb Impulse Response
    this.reverbNode = this.ctx.createConvolver();
    this.reverbNode.buffer = this.buildImpulseResponse(2.4, 2.0);
    this.reverbGain = this.ctx.createGain();
    this.reverbGain.gain.setValueAtTime(this.reverbWet, this.ctx.currentTime);
    
    // Stream Destination for recording
    this.streamDest = this.ctx.createMediaStreamDestination();
    
    // Routing: masterGain -> analyser -> destination
    // Reverb send
    this.masterGain.connect(this.analyser);
    this.analyser.connect(this.ctx.destination);
    this.analyser.connect(this.streamDest);
    
    this.reverbNode.connect(this.reverbGain);
    this.reverbGain.connect(this.masterGain);
    
    this.setupDroneBus();
    this.setupNoiseBus();
  }

  async resume() {
    if (!this.ctx) {
      this.init();
    }
    if (this.ctx.state === "suspended") {
      await this.ctx.resume();
    }
    this.isPlaying = true;
  }

  pause() {
    if (this.ctx && this.isPlaying) {
      this.ctx.suspend();
      this.isPlaying = false;
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    if (this.masterGain) {
      const targetVol = this.isMuted ? 0 : this.masterVolume;
      this.masterGain.gain.setTargetAtTime(targetVol, this.ctx.currentTime, 0.05);
    }
    return this.isMuted;
  }

  setMasterVolume(val) {
    this.masterVolume = Math.max(0, Math.min(1, val));
    if (this.masterGain && !this.isMuted) {
      this.masterGain.gain.setTargetAtTime(this.masterVolume, this.ctx.currentTime, 0.05);
    }
  }

  setReverbWet(val) {
    this.reverbWet = Math.max(0, Math.min(1, val));
    if (this.reverbGain) {
      this.reverbGain.gain.setTargetAtTime(this.reverbWet, this.ctx.currentTime, 0.05);
    }
  }

  setScale(scaleKey) {
    if (this.scales[scaleKey]) {
      this.currentScale = scaleKey;
    }
  }

  setRootMidi(midi) {
    this.rootMidi = midi;
    this.updateDroneFrequency(this.midiToFreq(midi));
  }

  setDroneIntensity(val) {
    this.droneIntensity = Math.max(0, Math.min(1, val));
    if (this.droneGain) {
      this.droneGain.gain.setTargetAtTime(this.droneIntensity * 0.25, this.ctx.currentTime, 0.1);
    }
  }

  buildImpulseResponse(duration, decay) {
    const rate = this.ctx.sampleRate;
    const length = rate * duration;
    const impulse = this.ctx.createBuffer(2, length, rate);
    const left = impulse.getChannelData(0);
    const right = impulse.getChannelData(1);
    
    for (let i = 0; i < length; i++) {
      const n = i / length;
      const factor = Math.pow(1 - n, decay);
      left[i] = ((Math.random() * 2) - 1) * factor;
      right[i] = ((Math.random() * 2) - 1) * factor;
    }
    return impulse;
  }

  setupDroneBus() {
    // Dual detuned foundation drone
    this.droneOsc1 = this.ctx.createOscillator();
    this.droneOsc2 = this.ctx.createOscillator();
    this.droneOsc1.type = "sine";
    this.droneOsc2.type = "triangle";
    
    this.droneFilter = this.ctx.createBiquadFilter();
    this.droneFilter.type = "lowpass";
    this.droneFilter.frequency.setValueAtTime(320, this.ctx.currentTime);
    this.droneFilter.Q.setValueAtTime(2.5, this.ctx.currentTime);
    
    this.droneGain = this.ctx.createGain();
    this.droneGain.gain.setValueAtTime(this.droneIntensity * 0.25, this.ctx.currentTime);
    
    const freq = this.midiToFreq(this.rootMidi);
    this.droneOsc1.frequency.setValueAtTime(freq, this.ctx.currentTime);
    this.droneOsc2.frequency.setValueAtTime(freq * 1.006, this.ctx.currentTime); // subtle detune chorusing
    
    this.droneOsc1.connect(this.droneFilter);
    this.droneOsc2.connect(this.droneFilter);
    this.droneFilter.connect(this.droneGain);
    this.droneGain.connect(this.masterGain);
    this.droneGain.connect(this.reverbNode);
    
    this.droneOsc1.start();
    this.droneOsc2.start();
  }

  setupNoiseBus() {
    // Procedural noise buffer (wind / fire / atmosphere)
    const bufferSize = this.ctx.sampleRate * 2;
    const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    let lastOut = 0.0;
    
    // Pink noise integration
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      output[i] = (lastOut + (0.02 * white)) / 1.02;
      lastOut = output[i];
      output[i] *= 3.5;
    }
    
    this.noiseNode = this.ctx.createBufferSource();
    this.noiseNode.buffer = noiseBuffer;
    this.noiseNode.loop = true;
    
    this.noiseFilter = this.ctx.createBiquadFilter();
    this.noiseFilter.type = "bandpass";
    this.noiseFilter.frequency.setValueAtTime(450, this.ctx.currentTime);
    this.noiseFilter.Q.setValueAtTime(3.0, this.ctx.currentTime);
    
    this.noiseGain = this.ctx.createGain();
    this.noiseGain.gain.setValueAtTime(0.0, this.ctx.currentTime);
    
    this.noiseNode.connect(this.noiseFilter);
    this.noiseFilter.connect(this.noiseGain);
    this.noiseGain.connect(this.masterGain);
    this.noiseGain.connect(this.reverbNode);
    
    this.noiseNode.start();
  }

  updateDroneFrequency(freq) {
    if (!this.droneOsc1 || !this.ctx) return;
    const now = this.ctx.currentTime;
    this.droneOsc1.frequency.setTargetAtTime(freq, now, 0.1);
    this.droneOsc2.frequency.setTargetAtTime(freq * 1.006, now, 0.1);
  }

  updatePlanetaryFilters(brightness, warmth, activityLevel) {
    if (!this.ctx || !this.droneFilter) return;
    const now = this.ctx.currentTime;
    
    // Filter cutoff opens with brightness and warmth (e.g., warming anomalies or lush vegetation)
    const cutoff = 150 + brightness * 800 + warmth * 1200;
    this.droneFilter.frequency.setTargetAtTime(Math.min(6500, Math.max(80, cutoff)), now, 0.15);
    
    // Modulate noise layer for atmospheric activity
    if (this.noiseGain && this.noiseFilter) {
      const noiseVol = activityLevel * 0.12;
      this.noiseGain.gain.setTargetAtTime(noiseVol, now, 0.1);
      const noiseFreq = 300 + warmth * 900 + activityLevel * 800;
      this.noiseFilter.frequency.setTargetAtTime(noiseFreq, now, 0.15);
    }
  }

  midiToFreq(midi) {
    return 440.0 * Math.pow(2.0, (midi - 69) / 12.0);
  }

  quantizeValueToScale(normalizedVal, octaveOffset = 1) {
    const scaleObj = this.scales[this.currentScale] || this.scales["dorian"];
    if (!scaleObj.intervals) {
      // Microtonal continuous pitch
      const minMidi = this.rootMidi + (octaveOffset * 12);
      const maxMidi = minMidi + 24;
      return this.midiToFreq(minMidi + normalizedVal * 24);
    }
    const intervals = scaleObj.intervals;
    const idx = Math.max(0, Math.min(intervals.length - 1, Math.floor(normalizedVal * intervals.length)));
    const targetMidi = this.rootMidi + (octaveOffset * 12) + intervals[idx];
    return this.midiToFreq(targetMidi);
  }

  /**
   * Triggers a musical lead/arpeggio note based on visual scanline data.
   */
  triggerVisualNote({ normalizedPitch, pan = 0.5, volume = 0.2, timbre = "marimba", duration = 0.35 }) {
    if (!this.ctx || !this.isPlaying || this.isMuted) return;
    
    const now = this.ctx.currentTime;
    const freq = this.quantizeValueToScale(normalizedPitch, 1);
    
    // Voice nodes
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const panner = this.ctx.createStereoPanner ? this.ctx.createStereoPanner() : null;
    const filter = this.ctx.createBiquadFilter();
    
    // Waveform & Timbre customization
    if (timbre === "marimba" || timbre === "kalimba") {
      osc.type = "sine";
      filter.type = "bandpass";
      filter.frequency.setValueAtTime(freq * 2, now);
      filter.Q.setValueAtTime(3.0, now);
    } else if (timbre === "saw" || timbre === "urgent") {
      osc.type = "sawtooth";
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(freq * 3.5, now);
      filter.frequency.exponentialRampToValueAtTime(freq * 0.8, now + duration);
    } else if (timbre === "bell" || timbre === "crystal") {
      osc.type = "triangle";
      filter.type = "highpass";
      filter.frequency.setValueAtTime(freq * 0.8, now);
    } else {
      osc.type = "triangle";
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(freq * 2.5, now);
    }
    
    osc.frequency.setValueAtTime(freq, now);
    
    // Fast attack, exponential decay (percussive & musical)
    const attack = 0.015;
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.linearRampToValueAtTime(volume * 0.35, now + attack);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    
    // Spatial Panning (-1 = Left, +1 = Right)
    if (panner) {
      const panVal = Math.max(-1, Math.min(1, (pan - 0.5) * 2));
      panner.pan.setValueAtTime(panVal, now);
    }
    
    // Connect chain
    osc.connect(filter);
    filter.connect(gain);
    
    if (panner) {
      gain.connect(panner);
      panner.connect(this.masterGain);
      panner.connect(this.reverbNode);
    } else {
      gain.connect(this.masterGain);
      gain.connect(this.reverbNode);
    }
    
    osc.start(now);
    osc.stop(now + duration + 0.05);
    
    // Clean up memory
    osc.onended = () => {
      osc.disconnect();
      filter.disconnect();
      gain.disconnect();
      if (panner) panner.disconnect();
    };
  }

  /**
   * FM Bell synthesis for polar ice crystals.
   */
  triggerFmBell({ carrierFreq, modRatio = 2.76, modIndex = 120, duration = 1.2, volume = 0.2, pan = 0.5 }) {
    if (!this.ctx || !this.isPlaying || this.isMuted) return;
    const now = this.ctx.currentTime;
    
    const carrier = this.ctx.createOscillator();
    const modulator = this.ctx.createOscillator();
    const modGain = this.ctx.createGain();
    const masterGain = this.ctx.createGain();
    const panner = this.ctx.createStereoPanner ? this.ctx.createStereoPanner() : null;
    
    carrier.type = "sine";
    modulator.type = "sine";
    
    carrier.frequency.setValueAtTime(carrierFreq, now);
    modulator.frequency.setValueAtTime(carrierFreq * modRatio, now);
    
    // Modulator index decay (shimmering glass sound)
    modGain.gain.setValueAtTime(modIndex, now);
    modGain.gain.exponentialRampToValueAtTime(0.1, now + duration);
    
    // Carrier envelope
    masterGain.gain.setValueAtTime(0.001, now);
    masterGain.gain.linearRampToValueAtTime(volume * 0.3, now + 0.02);
    masterGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    
    if (panner) {
      panner.pan.setValueAtTime((pan - 0.5) * 2, now);
    }
    
    modulator.connect(modGain);
    modGain.connect(carrier.frequency);
    carrier.connect(masterGain);
    
    if (panner) {
      masterGain.connect(panner);
      panner.connect(this.masterGain);
      panner.connect(this.reverbNode);
    } else {
      masterGain.connect(this.masterGain);
      masterGain.connect(this.reverbNode);
    }
    
    carrier.start(now);
    modulator.start(now);
    carrier.stop(now + duration + 0.1);
    modulator.stop(now + duration + 0.1);
  }

  /**
   * Sound probe for coordinate clicks and keyboard exploration.
   */
  triggerProbeSound({ lum, warmth, hue, x, y, name }) {
    if (!this.ctx || !this.isPlaying) return;
    
    const normalizedPitch = hue > 0 ? hue : lum;
    this.triggerVisualNote({
      normalizedPitch: normalizedPitch,
      pan: x,
      volume: 0.35,
      timbre: warmth > 0.4 ? "saw" : "marimba",
      duration: 0.6
    });
    
    if (warmth > 0.6) {
      // Warm anomaly: secondary accent chime
      this.triggerVisualNote({
        normalizedPitch: Math.min(1.0, normalizedPitch + 0.25),
        pan: x,
        volume: 0.2,
        timbre: "crystal",
        duration: 0.8
      });
    }
  }

  /**
   * Start recording the live sonification output to a WAV/WebM file.
   */
  startRecording() {
    if (!this.streamDest) return false;
    this.recordedChunks = [];
    
    // Try audio/webm or audio/ogg
    let mimeType = 'audio/webm;codecs=opus';
    if (!MediaRecorder.isTypeSupported(mimeType)) {
      mimeType = 'audio/webm';
      if (!MediaRecorder.isTypeSupported(mimeType)) {
        mimeType = '';
      }
    }
    
    try {
      this.mediaRecorder = mimeType ? 
        new MediaRecorder(this.streamDest.stream, { mimeType }) :
        new MediaRecorder(this.streamDest.stream);
    } catch (e) {
      console.warn("MediaRecorder init fallback:", e);
      return false;
    }
    
    this.mediaRecorder.ondataavailable = (e) => {
      if (e.data && e.data.size > 0) {
        this.recordedChunks.push(e.data);
      }
    };
    
    this.mediaRecorder.start(100);
    this.isRecording = true;
    return true;
  }

  /**
   * Stop recording and initiate browser download of audio file.
   */
  stopRecording(datasetId = "earth-sonification") {
    return new Promise((resolve) => {
      if (!this.mediaRecorder || !this.isRecording) {
        resolve(null);
        return;
      }
      
      this.mediaRecorder.onstop = () => {
        const blob = new Blob(this.recordedChunks, { type: this.mediaRecorder.mimeType || 'audio/webm' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.style.display = "none";
        a.href = url;
        const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
        a.download = `NASA_Earth_Jukebox_${datasetId}_${timestamp}.webm`;
        document.body.appendChild(a);
        a.click();
        setTimeout(() => {
          document.body.removeChild(a);
          window.URL.revokeObjectURL(url);
        }, 100);
        
        this.isRecording = false;
        resolve({ blob, url, filename: a.download });
      };
      
      this.mediaRecorder.stop();
    });
  }
}

window.EarthAudioEngine = EarthAudioEngine;
