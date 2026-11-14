/**
 * NASA Earth Information Center - Acoustic Telemetry Uplink (TX Controller)
 * Pure, robust transmission engine designed to broadcast acoustic data-over-sound
 * text messages to the mobile receiver app.
 */

(function () {
  let acousticModule = null;
  let acousticInstance = null;
  let audioContext = null;
  let isTransmitting = false;

  // DOM Elements
  const txDataInput = document.getElementById("txData");
  const charCount = document.getElementById("charCount");
  const btnClearTx = document.getElementById("btnClearTx");
  const protocolSelect = document.getElementById("txProtocol");
  const volumeSlider = document.getElementById("txVolume");
  const volumeLabel = document.getElementById("volumeLabel");
  const btnBroadcast = document.getElementById("btnBroadcast");
  const txStatusBadge = document.getElementById("txStatusBadge");
  const statusLog = document.getElementById("statusLog");
  const chipsList = document.getElementById("chipsList");
  const phoneQrCodeEl = document.getElementById("phoneQrCode");
  const phoneUrlLink = document.getElementById("phoneUrlLink");
  const btnToggleQr = document.getElementById("btnToggleQr");
  const qrDrawer = document.getElementById("qrDrawer");

  // Science keyword triggers matching the 8 official NASA EIC datasets
  const KEYWORD_CHIPS = [
    { title: "Global Temperature", tag: "NASA_EIC:GLOBAL_TEMPERATURE:2024:SVS-3912", badge: "SVS-3912" },
    { title: "Atmospheric CO2", tag: "NASA_EIC:ATMOSPHERIC_CO2:425PPM:SVS-5196", badge: "SVS-5196" },
    { title: "Perpetual Ocean", tag: "NASA_EIC:OCEAN_CURRENTS:GULF_STREAM:SVS-5425", badge: "SVS-5425" },
    { title: "Biosphere & Canopy", tag: "NASA_EIC:BIOSPHERE_PULSE:NOVEMBER:SVS-4950", badge: "SVS-4950" },
    { title: "Arctic Sea Ice", tag: "NASA_EIC:ARCTIC_SEA_ICE:2024:EIC-CRYOSPHERE", badge: "NSIDC" },
    { title: "Wildfires & Smoke", tag: "NASA_EIC:GLOBAL_WILDFIRES:SMOKE:SVS-5669", badge: "SVS-5669" },
    { title: "Night Lights", tag: "NASA_EIC:NIGHT_LIGHTS:2023:SVS-5313", badge: "SVS-5313" },
    { title: "Space Lightning", tag: "NASA_EIC:ISS_LIGHTNING:OPTICAL:SVS-5011", badge: "SVS-5011" },
    { title: "Custom Science Note", tag: "Observation Log: High ocean temperature and carbon anomaly detected.", badge: "Note" }
  ];

  // Helper: Convert typed array
  function convertTypedArray(src, type) {
    const buffer = new ArrayBuffer(src.byteLength);
    new src.constructor(buffer).set(src);
    return new type(buffer);
  }

  function updateCharCount() {
    if (!charCount || !txDataInput) return;
    const len = txDataInput.value.length;
    charCount.textContent = `${len} character${len === 1 ? '' : 's'}`;
  }

  function logStatus(msg, isSuccess = false) {
    if (!statusLog) return;
    const time = new Date().toLocaleTimeString();
    statusLog.textContent = `[${time}] ${msg}`;
    if (isSuccess) {
      statusLog.style.color = "#00ff88";
    } else {
      statusLog.style.color = "#8ea0be";
    }
  }

  // Initialize Web Audio & Core Engine
  async function initEngine() {
    if (typeof acoustic_factory === "undefined") {
      logStatus("Acoustic engine script not ready.");
      return;
    }

    try {
      logStatus("Initializing acoustic data-over-sound engine...");
      acousticModule = await acoustic_factory();

      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      audioContext = new AudioCtx({ sampleRate: 48000 });

      const parameters = acousticModule.getDefaultParameters();
      parameters.sampleRateInp = audioContext.sampleRate;
      parameters.sampleRateOut = audioContext.sampleRate;
      acousticInstance = acousticModule.init(parameters);

      txStatusBadge.textContent = "READY";
      txStatusBadge.style.color = "#00ff88";
      txStatusBadge.style.borderColor = "#00ff88";
      logStatus("Acoustic transmitter ready. Type any message and press Broadcast.", true);
    } catch (e) {
      console.error(e);
      logStatus("Engine initialization error: " + e.message);
    }
  }

  // Map protocol string to ID
  function getProtocolId(protoName) {
    if (!acousticModule || !acousticModule.ProtocolId) return 1;
    switch (protoName) {
      case "audible_normal":
        return 0;
      case "audible_fast":
        return 1;
      case "audible_fastest":
        return 2;
      case "ultrasound_fast":
        return 3;
      default:
        return 1;
    }
  }

  // Transmit current text over speakers/AUX
  async function transmitCurrentText() {
    if (isTransmitting) return;

    if (!acousticModule || !acousticInstance || !audioContext) {
      await initEngine();
    }

    if (audioContext && audioContext.state === "suspended") {
      await audioContext.resume();
    }

    const payload = txDataInput.value.trim();
    if (!payload) {
      logStatus("Message payload is empty. Type a message or click a trigger chip.");
      return;
    }

    const protocolId = getProtocolId(protocolSelect.value);
    const volume = parseInt(volumeSlider.value, 10);

    try {
      isTransmitting = true;
      btnBroadcast.classList.add("transmitting");
      btnBroadcast.innerHTML = "<span>🔊 TRANSMITTING ACOUSTIC CARRIER...</span>";
      txStatusBadge.textContent = "TX ACTIVE";
      txStatusBadge.style.color = "#ffc107";
      txStatusBadge.style.borderColor = "#ffc107";
      logStatus(`Broadcasting text payload: "${payload}"...`);

      // Synthesize audio waveform
      const waveform = acousticModule.encode(acousticInstance, payload, protocolId, volume);

      if (!waveform || waveform.length === 0) {
        throw new Error("Empty waveform generated.");
      }

      // Convert and play through Web Audio to speakers / AUX
      const floatBuf = convertTypedArray(waveform, Float32Array);
      const audioBuf = audioContext.createBuffer(1, floatBuf.length, audioContext.sampleRate);
      audioBuf.getChannelData(0).set(floatBuf);

      const source = audioContext.createBufferSource();
      source.buffer = audioBuf;
      source.connect(audioContext.destination);

      const durationMs = (floatBuf.length / audioContext.sampleRate) * 1000;
      source.start(0);

      source.onended = () => {
        isTransmitting = false;
        btnBroadcast.classList.remove("transmitting");
        btnBroadcast.innerHTML = "<span>🔊 BROADCAST ACOUSTIC TELEMETRY (Space / Ctrl+Enter)</span>";
        txStatusBadge.textContent = "TRANSMITTED";
        txStatusBadge.style.color = "#00ff88";
        txStatusBadge.style.borderColor = "#00ff88";
        logStatus(`Successfully broadcasted message (${Math.round(durationMs)} ms). Receiver will decrypt exact text!`, true);
      };

    } catch (err) {
      isTransmitting = false;
      btnBroadcast.classList.remove("transmitting");
      btnBroadcast.innerHTML = "<span>🔊 BROADCAST ACOUSTIC TELEMETRY (Space / Ctrl+Enter)</span>";
      txStatusBadge.textContent = "ERROR";
      txStatusBadge.style.color = "#ff3366";
      logStatus("Transmission error: " + err.message);
    }
  }

  // Render quick keyword chips
  function renderChips() {
    if (!chipsList) return;
    chipsList.innerHTML = "";

    KEYWORD_CHIPS.forEach(chip => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "chip-btn";
      btn.innerHTML = `<span>+ ${chip.title}</span> <span class="chip-badge">${chip.badge}</span>`;
      btn.title = `Click to load: "${chip.tag}"`;

      btn.addEventListener("click", () => {
        // If textarea is empty, set it directly. If already has content, prompt or append
        if (!txDataInput.value.trim()) {
          txDataInput.value = chip.tag;
        } else {
          // Append with space
          txDataInput.value = txDataInput.value.trim() + " " + chip.tag;
        }
        updateCharCount();
        txDataInput.focus();
        logStatus(`Added trigger token: "${chip.title}". Press Broadcast to send.`);
      });

      chipsList.appendChild(btn);
    });
  }

  // Render QR Code for Phone Receiver
  function setupPhoneLink() {
    let phoneUrl = "phone.html";
    if (window.LOCAL_SERVER_CONFIG && window.LOCAL_SERVER_CONFIG.phoneUrl) {
      phoneUrl = window.LOCAL_SERVER_CONFIG.phoneUrl;
    } else if (window.location.origin && window.location.origin.startsWith("http")) {
      phoneUrl = `${window.location.origin}/phone.html`;
    }

    if (phoneUrlLink) {
      phoneUrlLink.href = phoneUrl;
      phoneUrlLink.textContent = phoneUrl;
    }

    if (phoneQrCodeEl && typeof QRCode !== "undefined") {
      phoneQrCodeEl.innerHTML = "";
      try {
        new QRCode(phoneQrCodeEl, {
          text: phoneUrl,
          width: 110,
          height: 110,
          colorDark: "#000000",
          colorLight: "#ffffff",
          correctLevel: QRCode.CorrectLevel.M
        });
      } catch (e) {
        console.warn("QR code render failed:", e);
      }
    }
  }

  // Bind Events
  function bindEvents() {
    btnBroadcast.addEventListener("click", transmitCurrentText);

    txDataInput.addEventListener("input", updateCharCount);

    if (btnClearTx) {
      btnClearTx.addEventListener("click", () => {
        txDataInput.value = "";
        updateCharCount();
        txDataInput.focus();
        logStatus("Text input cleared. Type a custom message to transmit.");
      });
    }

    volumeSlider.addEventListener("input", (e) => {
      if (volumeLabel) volumeLabel.textContent = `${e.target.value}%`;
    });

    if (btnToggleQr && qrDrawer) {
      btnToggleQr.addEventListener("click", () => {
        qrDrawer.classList.toggle("open");
        btnToggleQr.textContent = qrDrawer.classList.contains("open") ? "Hide QR Code ▲" : "Show Phone QR Code ▼";
      });
    }

    // Ctrl+Enter inside textarea transmits immediately
    txDataInput.addEventListener("keydown", (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
        e.preventDefault();
        transmitCurrentText();
      }
    });

    // Global shortcut: Space to transmit when not actively typing in an input
    window.addEventListener("keydown", (e) => {
      if (e.target.tagName === "TEXTAREA" || e.target.tagName === "INPUT" || e.target.tagName === "SELECT") {
        return;
      }

      if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        transmitCurrentText();
      }
    });
  }

  // DOM Loaded
  document.addEventListener("DOMContentLoaded", () => {
    renderChips();
    updateCharCount();
    setupPhoneLink();
    bindEvents();
    initEngine();
  });
})();
