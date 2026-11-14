/**
 * NASA Earth Information Center - Jukebox Master Controller
 * State orchestration, keyboard navigation, accessible ARIA announcements,
 * Web Speech narration, and UI event binding.
 */

class EarthJukeboxController {
  constructor(manifest) {
    this.manifest = manifest;
    this.datasets = manifest.datasets || [];
    this.currentDatasetIndex = 0;
    this.currentFrameIndex = 0;
    
    this.isPlaying = false;
    this.isTimelapseLooping = false;
    this.timelapseTimer = null;
    this.timelapseSpeedMs = 1800; // ms per frame
    
    this.isSpeechNarratorActive = false;
    this.isHighContrast = false;
    
    // Components
    this.audioEngine = null;
    this.visionEngine = null;
    
    this.initDOMRefs();
  }

  initDOMRefs() {
    this.canvas = document.getElementById("earthCanvas");
    this.analyzerCanvas = document.getElementById("analyzerCanvas");
    this.liveRegion = document.getElementById("ariaLiveRegion");
    this.datasetListEl = document.getElementById("datasetTrackList");
    
    // HUD Elements
    this.titleEl = document.getElementById("datasetTitle");
    this.subtitleEl = document.getElementById("datasetSubtitle");
    this.descEl = document.getElementById("datasetDescription");
    this.frameLabelEl = document.getElementById("currentFrameLabel");
    this.metricValueEl = document.getElementById("currentMetricValue");
    this.metricNameEl = document.getElementById("currentMetricName");
    this.scientificNarrativeEl = document.getElementById("scientificNarrative");
    this.scaleDescEl = document.getElementById("scaleDescription");
    
    // Probe HUD
    this.probeCoordsEl = document.getElementById("probeCoords");
    this.probeRgbEl = document.getElementById("probeRgb");
    this.probeColorSwatch = document.getElementById("probeColorSwatch");
    this.probeScienceEl = document.getElementById("probeScience");
    
    // Buttons & Controls
    this.btnPlay = document.getElementById("btnPlay");
    this.btnPrev = document.getElementById("btnPrev");
    this.btnNext = document.getElementById("btnNext");
    this.btnTimelapse = document.getElementById("btnTimelapse");
    this.btnMute = document.getElementById("btnMute");
    this.btnRecord = document.getElementById("btnRecord");
    this.btnContrast = document.getElementById("btnContrast");
    this.btnSpeech = document.getElementById("btnSpeech");
    this.btnScanDir = document.getElementById("btnScanDir");
    this.btnHelp = document.getElementById("btnHelp");
    this.btnNasaResources = document.getElementById("btnNasaResources");
    
    this.timeScrubber = document.getElementById("timeScrubber");
    this.scaleSelect = document.getElementById("scaleSelect");
    this.volumeSlider = document.getElementById("volumeSlider");
    this.droneSlider = document.getElementById("droneSlider");
    this.reverbSlider = document.getElementById("reverbSlider");
    this.rootPitchSelect = document.getElementById("rootPitchSelect");
    
    // Modals
    this.modalHelp = document.getElementById("modalHelp");
    this.btnCloseModal = document.getElementById("btnCloseModal");
    this.modalNasaResources = document.getElementById("modalNasaResources");
    this.btnCloseNasaModal = document.getElementById("btnCloseNasaModal");

    // acoustic TX elements
    this.btnTransmitAcoustic = document.getElementById("btnTransmitAcoustic");
    this.chkAutoBeacon = document.getElementById("chkAutoBeacon");
    this.txStatusBadge = document.getElementById("txStatusBadge");
    this.txPayloadDisplay = document.getElementById("txPayloadDisplay");
    this.phoneQrCodeEl = document.getElementById("phoneQrCode");
    this.phoneUrlLink = document.getElementById("phoneUrlLink");
    this.acousticTx = null;
  }

  init() {
    // 1. Initialize Audio Engine
    this.audioEngine = new EarthAudioEngine();
    
    // 2. Initialize Vision Engine
    this.visionEngine = new EarthVisionEngine(this.canvas, this.analyzerCanvas, this.audioEngine);
    this.visionEngine.onProbeUpdate = (probe) => this.handleProbeUpdate(probe);

    // 2b. Initialize acoustic Acoustic Transmitter
    if (typeof EarthAcousticTx !== "undefined") {
      this.acousticTx = new EarthAcousticTx(this.audioEngine);
      this.acousticTx.onStatusChange = (status, payload) => this.handleTxStatus(status, payload);
      this.acousticTx.init();
    }
    
    // Setup Phone QR Code link
    this.setupPhoneQrLink();
    
    // 3. Render Dataset Selection Cards
    this.renderDatasetList();
    
    // 4. Bind Events
    this.bindEvents();
    
    // 5. Load Initial Dataset
    this.loadDataset(0);
    
    // 6. Start Vision & Visualizer loop
    this.visionEngine.startLoop();
    
    this.announce("NASA Earth Jukebox ready. Press Space to start sonification. Press Question Mark for keyboard guide.");
  }

  bindEvents() {
    // Play / Pause
    this.btnPlay.addEventListener("click", () => this.togglePlayback());
    
    // Frame navigation
    this.btnPrev.addEventListener("click", () => this.stepFrame(-1));
    this.btnNext.addEventListener("click", () => this.stepFrame(1));
    
    // Time Scrubber
    this.timeScrubber.addEventListener("input", (e) => {
      this.setFrame(parseInt(e.target.value, 10));
    });
    
    // Time-Lapse Loop
    this.btnTimelapse.addEventListener("click", () => this.toggleTimelapse());
    
    // Mute
    this.btnMute.addEventListener("click", () => {
      const isMuted = this.audioEngine.toggleMute();
      this.btnMute.textContent = isMuted ? "🔇 Unmute (M)" : "🔊 Mute (M)";
      this.announce(isMuted ? "Audio muted" : "Audio unmuted");
    });
    
    // Master Volume
    this.volumeSlider.addEventListener("input", (e) => {
      const v = parseFloat(e.target.value);
      this.audioEngine.setMasterVolume(v);
    });
    
    // Drone Intensity
    this.droneSlider.addEventListener("input", (e) => {
      const v = parseFloat(e.target.value);
      this.audioEngine.setDroneIntensity(v);
    });
    
    // Reverb Wet
    this.reverbSlider.addEventListener("input", (e) => {
      const v = parseFloat(e.target.value);
      this.audioEngine.setReverbWet(v);
    });
    
    // Scale Select
    this.scaleSelect.addEventListener("change", (e) => {
      this.audioEngine.setScale(e.target.value);
      this.announce(`Musical scale set to ${e.target.options[e.target.selectedIndex].text}`);
    });
    
    // Root Pitch Select
    this.rootPitchSelect.addEventListener("change", (e) => {
      const midi = parseInt(e.target.value, 10);
      this.audioEngine.setRootMidi(midi);
      this.announce(`Base frequency root set to MIDI ${midi}`);
    });
    
    // Scan Direction Toggle
    this.btnScanDir.addEventListener("click", () => {
      const newDir = this.visionEngine.scanDirection === "vertical" ? "horizontal" : "vertical";
      this.visionEngine.scanDirection = newDir;
      this.btnScanDir.textContent = newDir === "vertical" ? "↕ Polar Scan (N-S)" : "↔ Equatorial Scan (W-E)";
      this.announce(`Scanline mode set to ${newDir} sweep`);
    });
    
    // Speech Narrator Toggle
    this.btnSpeech.addEventListener("click", () => {
      this.isSpeechNarratorActive = !this.isSpeechNarratorActive;
      this.btnSpeech.classList.toggle("active", this.isSpeechNarratorActive);
      this.btnSpeech.textContent = this.isSpeechNarratorActive ? "🎙 Voice Narration: ON (V)" : "🎙 Voice Narration: OFF (V)";
      this.announce(`Voice narrator ${this.isSpeechNarratorActive ? 'enabled' : 'disabled'}`);
      if (this.isSpeechNarratorActive) {
        this.speakCurrentFrameNarrative();
      }
    });
    
    // High Contrast Mode
    this.btnContrast.addEventListener("click", () => {
      this.isHighContrast = !this.isHighContrast;
      document.body.classList.toggle("high-contrast", this.isHighContrast);
      this.btnContrast.textContent = this.isHighContrast ? "👁 Standard Theme (T)" : "👁 High Contrast (T)";
      this.announce(`Theme changed to ${this.isHighContrast ? 'high contrast' : 'standard'}`);
    });
    
    // Recording WAV / WebM
    this.btnRecord.addEventListener("click", async () => {
      if (!this.audioEngine.isRecording) {
        if (!this.isPlaying) {
          await this.togglePlayback();
        }
        const success = this.audioEngine.startRecording();
        if (success) {
          this.btnRecord.classList.add("recording");
          this.btnRecord.textContent = "⏹ Stop & Save Audio (R)";
          this.announce("Audio recording started. Playing soundscape to file.");
        }
      } else {
        const curDs = this.getCurrentDataset();
        this.btnRecord.textContent = "⏳ Rendering Audio...";
        const res = await this.audioEngine.stopRecording(curDs.id);
        this.btnRecord.classList.remove("recording");
        this.btnRecord.textContent = "⏺ Record Soundscape (R)";
        this.announce("Audio recording complete. Downloading audio file.");
      }
    });
    
    // Canvas Mouse & Touch Probe
    const handleCanvasPointer = (e) => {
      const rect = this.canvas.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      
      const normX = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
      const normY = Math.max(0, Math.min(1, (clientY - rect.top) / rect.height));
      
      this.visionEngine.probeX = normX;
      this.visionEngine.probeY = normY;
      
      const probeData = this.visionEngine.sampleProbeKernel(normX, normY);
      if (probeData && this.isPlaying) {
        this.audioEngine.triggerProbeSound(probeData);
      }
    };
    
    this.canvas.addEventListener("mousemove", (e) => {
      if (e.buttons === 1) handleCanvasPointer(e);
      else {
        // Just preview probe coordinates
        const rect = this.canvas.getBoundingClientRect();
        const normX = (e.clientX - rect.left) / rect.width;
        const normY = (e.clientY - rect.top) / rect.height;
        this.visionEngine.probeX = normX;
        this.visionEngine.probeY = normY;
        this.visionEngine.sampleProbeKernel(normX, normY);
      }
    });
    
    this.canvas.addEventListener("click", handleCanvasPointer);
    this.canvas.addEventListener("touchmove", handleCanvasPointer, { passive: true });
    
    // Modal events
    this.btnHelp.addEventListener("click", () => this.openHelpModal());
    this.btnCloseModal.addEventListener("click", () => this.closeHelpModal());
    if (this.btnNasaResources) {
      this.btnNasaResources.addEventListener("click", () => this.openNasaModal());
    }
    if (this.btnCloseNasaModal) {
      this.btnCloseNasaModal.addEventListener("click", () => this.closeNasaModal());
    }
    window.addEventListener("click", (e) => {
      if (e.target === this.modalHelp) this.closeHelpModal();
      if (e.target === this.modalNasaResources) this.closeNasaModal();
    });

    // acoustic TX events
    if (this.btnTransmitAcoustic) {
      this.btnTransmitAcoustic.addEventListener("click", () => this.broadcastCurrentToken());
    }
    if (this.chkAutoBeacon) {
      this.chkAutoBeacon.addEventListener("change", (e) => {
        if (this.acousticTx) this.acousticTx.isAutoBeacon = e.target.checked;
      });
    }
    
    // Global Keyboard Listener
    window.addEventListener("keydown", (e) => this.handleKeyDown(e));
  }

  handleKeyDown(e) {
    // Ignore key commands if focused on input or select
    if (e.target.tagName === "INPUT" || e.target.tagName === "SELECT") {
      if (e.key === "Escape") e.target.blur();
      return;
    }
    
    switch (e.key) {
      case " ":
        e.preventDefault();
        this.togglePlayback();
        break;
      case "ArrowLeft":
        e.preventDefault();
        this.stepFrame(-1);
        break;
      case "ArrowRight":
        e.preventDefault();
        this.stepFrame(1);
        break;
      case "ArrowUp":
        e.preventDefault();
        this.adjustVolume(0.05);
        break;
      case "ArrowDown":
        e.preventDefault();
        this.adjustVolume(-0.05);
        break;
      case "m":
      case "M":
        this.btnMute.click();
        break;
      case "s":
      case "S":
        this.visionEngine.isScanActive = !this.visionEngine.isScanActive;
        this.announce(`Scanline laser ${this.visionEngine.isScanActive ? 'enabled' : 'disabled'}`);
        break;
      case "d":
      case "D":
        this.btnScanDir.click();
        break;
      case "l":
      case "L":
        this.toggleTimelapse();
        break;
      case "t":
      case "T":
        this.btnContrast.click();
        break;
      case "v":
      case "V":
        this.btnSpeech.click();
        break;
      case "r":
      case "R":
        this.btnRecord.click();
        break;
      case "o":
      case "O":
        this.openNasaModal();
        break;
      case "b":
      case "B":
        this.broadcastCurrentToken();
        break;
      case "p":
      case "P":
        // Probe current reticle location
        const probeData = this.visionEngine.sampleProbeKernel(this.visionEngine.probeX, this.visionEngine.probeY);
        if (probeData) {
          this.audioEngine.triggerProbeSound(probeData);
          this.announce(`Probed ${probeData.lat}, ${probeData.lon}. Color ${probeData.rgb}.`);
        }
        break;
      case "?":
        this.openHelpModal();
        break;
      case "Escape":
        this.closeHelpModal();
        this.closeNasaModal();
        break;
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
        const idx = parseInt(e.key, 10) - 1;
        if (idx < this.datasets.length) {
          this.loadDataset(idx);
        }
        break;
    }
  }

  adjustVolume(delta) {
    const newVol = Math.max(0, Math.min(1, this.audioEngine.masterVolume + delta));
    this.audioEngine.setMasterVolume(newVol);
    this.volumeSlider.value = newVol;
    this.announce(`Master volume ${Math.round(newVol * 100)} percent`);
  }

  async togglePlayback() {
    if (!this.isPlaying) {
      await this.audioEngine.resume();
      this.isPlaying = true;
      this.btnPlay.textContent = "⏸ Pause Sonification (Space)";
      this.btnPlay.classList.add("btn-playing");
      this.announce("Sonification playing");
    } else {
      this.audioEngine.pause();
      this.isPlaying = false;
      this.btnPlay.textContent = "▶ Play Sonification (Space)";
      this.btnPlay.classList.remove("btn-playing");
      this.announce("Sonification paused");
    }
  }

  toggleTimelapse() {
    this.isTimelapseLooping = !this.isTimelapseLooping;
    this.btnTimelapse.classList.toggle("active", this.isTimelapseLooping);
    this.btnTimelapse.textContent = this.isTimelapseLooping ? "⏸ Stop Loop (L)" : "🔁 Loop Time-Lapse (L)";
    
    if (this.isTimelapseLooping) {
      this.announce("Time-lapse animation running");
      if (!this.isPlaying) {
        this.togglePlayback();
      }
      this.runTimelapseStep();
    } else {
      if (this.timelapseTimer) {
        clearTimeout(this.timelapseTimer);
        this.timelapseTimer = null;
      }
      this.announce("Time-lapse stopped");
    }
  }

  runTimelapseStep() {
    if (!this.isTimelapseLooping) return;
    this.stepFrame(1, true);
    this.timelapseTimer = setTimeout(() => {
      this.runTimelapseStep();
    }, this.timelapseSpeedMs);
  }

  getCurrentDataset() {
    return this.datasets[this.currentDatasetIndex];
  }

  getCurrentFrame() {
    const ds = this.getCurrentDataset();
    return ds.frames[this.currentFrameIndex];
  }

  loadDataset(index) {
    if (index < 0 || index >= this.datasets.length) return;
    this.currentDatasetIndex = index;
    this.currentFrameIndex = 0;
    
    const ds = this.getCurrentDataset();
    this.visionEngine.setDatasetConfig(ds);
    
    // Update active state in dataset tracklist UI
    const cards = this.datasetListEl.querySelectorAll(".dataset-card");
    cards.forEach((c, idx) => {
      c.classList.toggle("active", idx === index);
      c.setAttribute("aria-selected", idx === index ? "true" : "false");
    });
    
    // Update dataset text
    this.titleEl.textContent = ds.title;
    const svsLink = ds.nasaResourceUrl ? 
      ` • <a href="${ds.nasaResourceUrl}" target="_blank" rel="noopener noreferrer" style="color:var(--neon-cyan);text-decoration:underline;">NASA ${ds.nasaSvsId || 'SVS Source'} ↗</a>` : "";
    this.subtitleEl.innerHTML = `${ds.subtitle}${svsLink}`;
    this.descEl.textContent = ds.description;
    
    // Configure default audio parameters for this dataset
    if (ds.id === "global-temperature") {
      this.scaleSelect.value = "dorian";
      this.rootPitchSelect.value = "45"; // A2
    } else if (ds.id === "biosphere-pulse") {
      this.scaleSelect.value = "major_pentatonic";
      this.rootPitchSelect.value = "48"; // C3
    } else if (ds.id === "atmospheric-co2") {
      this.scaleSelect.value = "aeolian";
      this.rootPitchSelect.value = "41"; // F2
    } else if (ds.id === "ocean-currents") {
      this.scaleSelect.value = "ocean_hexatonic";
      this.rootPitchSelect.value = "38"; // D2
    } else if (ds.id === "arctic-sea-ice") {
      this.scaleSelect.value = "insen";
      this.rootPitchSelect.value = "52"; // E3
    } else if (ds.id === "global-wildfires") {
      this.scaleSelect.value = "phrygian_dominant";
      this.rootPitchSelect.value = "40"; // E2
    } else if (ds.id === "night-lights") {
      this.scaleSelect.value = "lydian";
      this.rootPitchSelect.value = "53"; // F3
    } else if (ds.id === "iss-lightning") {
      this.scaleSelect.value = "dorian";
      this.rootPitchSelect.value = "45"; // A2
    }
    
    this.audioEngine.setScale(this.scaleSelect.value);
    this.audioEngine.setRootMidi(parseInt(this.rootPitchSelect.value, 10));
    
    // Update Scale info card
    this.scaleDescEl.textContent = `${ds.sonificationProfile.scale} | Base: ${ds.sonificationProfile.baseFrequency} | ${ds.sonificationProfile.mappingRule}`;
    
    // Update scrubber range
    this.timeScrubber.min = 0;
    this.timeScrubber.max = ds.frames.length - 1;
    this.timeScrubber.value = 0;
    
    this.renderProbePointsList(ds.probePoints);
    this.loadFrame(0);
    
    this.announce(`Loaded dataset: ${ds.title}. ${ds.subtitle}`);
  }

  async loadFrame(frameIndex) {
    const ds = this.getCurrentDataset();
    if (frameIndex < 0 || frameIndex >= ds.frames.length) return;
    
    this.currentFrameIndex = frameIndex;
    const frame = ds.frames[frameIndex];
    
    this.timeScrubber.value = frameIndex;
    this.frameLabelEl.textContent = frame.label;
    this.metricValueEl.textContent = frame.value;
    this.metricNameEl.textContent = frame.metricName;
    this.scientificNarrativeEl.textContent = frame.audioNarrative;
    
    // Load visual image
    const imagePath = `assets/images/${frame.filename}`;
    await this.visionEngine.loadImage(imagePath);

    // Update acoustic Telemetry Token
    if (this.acousticTx) {
      const token = this.acousticTx.buildToken(ds, frameIndex);
      if (this.txPayloadDisplay) {
        this.txPayloadDisplay.textContent = token;
      }
      if (this.acousticTx.isAutoBeacon && this.isPlaying) {
        this.acousticTx.transmit(token);
      }
    }
    
    if (this.isSpeechNarratorActive) {
      this.speakCurrentFrameNarrative();
    }
  }

  stepFrame(delta, fromLoop = false) {
    const ds = this.getCurrentDataset();
    let nextIndex = this.currentFrameIndex + delta;
    if (nextIndex >= ds.frames.length) {
      nextIndex = 0; // Wrap around
    } else if (nextIndex < 0) {
      nextIndex = ds.frames.length - 1;
    }
    this.loadFrame(nextIndex);
    if (!fromLoop) {
      const frame = ds.frames[nextIndex];
      this.announce(`${frame.label}: ${frame.value}`);
    }
  }

  setFrame(index) {
    this.loadFrame(index);
    const frame = this.getCurrentFrame();
    this.announce(`${frame.label}: ${frame.value}`);
  }

  handleProbeUpdate(probe) {
    this.probeCoordsEl.textContent = `${probe.lat}, ${probe.lon}`;
    this.probeRgbEl.textContent = probe.rgb;
    this.probeColorSwatch.style.backgroundColor = probe.rgb;
    
    // Scientific interpretation of probe location
    const ds = this.getCurrentDataset();
    let sciText = "";
    if (ds.id === "global-temperature") {
      const tempDelta = (probe.warmth * 4.0 - 1.5).toFixed(1);
      sciText = `Thermal signature: ~${tempDelta > 0 ? '+' : ''}${tempDelta}°C anomaly.`;
    } else if (ds.id === "biosphere-pulse") {
      sciText = `Estimated green canopy NDVI: ${(0.1 + probe.greenness * 0.85).toFixed(2)}.`;
    } else if (ds.id === "atmospheric-co2") {
      sciText = `Atmospheric optical density: ${(390 + probe.warmth * 45).toFixed(0)} ppm.`;
    } else if (ds.id === "arctic-sea-ice") {
      sciText = probe.lum > 0.6 ? "Dense multi-year sea ice pack." : "Open sea water absorption.";
    } else if (ds.id === "global-wildfires") {
      sciText = probe.warmth > 0.4 ? "Active thermal hotspot detection!" : "Background terrain.";
    } else {
      sciText = `Luminance: ${Math.round(probe.lum * 100)}% | Warmth: ${Math.round(probe.warmth * 100)}%`;
    }
    this.probeScienceEl.textContent = sciText;
  }

  speakCurrentFrameNarrative() {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel(); // Stop prior speech
    const frame = this.getCurrentFrame();
    const utterance = new SpeechSynthesisUtterance(frame.audioNarrative);
    utterance.rate = 1.05;
    utterance.pitch = 1.0;
    window.speechSynthesis.speak(utterance);
  }

  announce(text) {
    if (this.liveRegion) {
      this.liveRegion.textContent = text;
    }
  }

  renderDatasetList() {
    this.datasetListEl.innerHTML = "";
    this.datasets.forEach((ds, idx) => {
      const card = document.createElement("button");
      card.className = `dataset-card ${idx === 0 ? 'active' : ''}`;
      card.setAttribute("role", "tab");
      card.setAttribute("aria-selected", idx === 0 ? "true" : "false");
      card.setAttribute("tabindex", "0");
      card.innerHTML = `
        <div class="card-num">${idx + 1}</div>
        <div class="card-info">
          <div class="card-category">${ds.category} • <span style="color:var(--neon-gold); font-weight:700;">${ds.nasaSvsId || 'EIC'}</span></div>
          <div class="card-title">${ds.title}</div>
        </div>
        <div class="card-arrow">▶</div>
      `;
      card.addEventListener("click", () => this.loadDataset(idx));
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          this.loadDataset(idx);
        }
      });
      this.datasetListEl.appendChild(card);
    });
  }

  renderProbePointsList(points) {
    const container = document.getElementById("presetProbeButtons");
    if (!container) return;
    container.innerHTML = "";
    
    if (!points || points.length === 0) return;
    
    points.forEach((p) => {
      const btn = document.createElement("button");
      btn.className = "btn-probe-preset";
      btn.textContent = `📍 ${p.name}`;
      btn.title = p.desc;
      btn.addEventListener("click", () => {
        this.visionEngine.probeX = p.x;
        this.visionEngine.probeY = p.y;
        const probeData = this.visionEngine.sampleProbeKernel(p.x, p.y);
        if (probeData && this.isPlaying) {
          this.audioEngine.triggerProbeSound(probeData);
        }
        this.announce(`Targeted probe: ${p.name}. ${p.desc}`);
        if (this.isSpeechNarratorActive && ('speechSynthesis' in window)) {
          window.speechSynthesis.cancel();
          const utt = new SpeechSynthesisUtterance(`${p.name}. ${p.desc}`);
          window.speechSynthesis.speak(utt);
        }
      });
      container.appendChild(btn);
    });
  }

  openHelpModal() {
    if (this.modalHelp) {
      this.modalHelp.classList.add("open");
      this.modalHelp.setAttribute("aria-hidden", "false");
      this.btnCloseModal.focus();
    }
  }

  closeHelpModal() {
    if (this.modalHelp) {
      this.modalHelp.classList.remove("open");
      this.modalHelp.setAttribute("aria-hidden", "true");
      this.btnHelp.focus();
    }
  }

  openNasaModal() {
    if (this.modalNasaResources) {
      this.modalNasaResources.classList.add("open");
      this.modalNasaResources.setAttribute("aria-hidden", "false");
      if (this.btnCloseNasaModal) this.btnCloseNasaModal.focus();
      this.announce("Opened official NASA resources catalog");
    }
  }

  closeNasaModal() {
    if (this.modalNasaResources) {
      this.modalNasaResources.classList.remove("open");
      this.modalNasaResources.setAttribute("aria-hidden", "true");
      if (this.btnNasaResources) this.btnNasaResources.focus();
    }
  }

  broadcastCurrentToken() {
    if (!this.acousticTx) return;
    const ds = this.getCurrentDataset();
    const token = this.acousticTx.buildToken(ds, this.currentFrameIndex);
    if (this.txPayloadDisplay) {
      this.txPayloadDisplay.textContent = token;
    }
    const ok = this.acousticTx.transmit(token);
    if (ok) {
      this.announce(`Broadcasted acoustic telemetry beacon for ${ds.title}`);
    }
  }

  handleTxStatus(status, payload) {
    if (!this.txStatusBadge) return;
    if (status === "TRANSMITTING") {
      this.txStatusBadge.textContent = "TX ACTIVE";
      this.txStatusBadge.style.color = "#00ff88";
      this.txStatusBadge.style.borderColor = "#00ff88";
    } else if (status === "READY" || status === "IDLE") {
      this.txStatusBadge.textContent = "BEACON READY";
      this.txStatusBadge.style.color = "#00f3ff";
      this.txStatusBadge.style.borderColor = "#00f3ff";
    } else {
      this.txStatusBadge.textContent = status;
    }
  }

  setupPhoneQrLink() {
    let phoneUrl = "phone.html";
    if (window.LOCAL_SERVER_CONFIG && window.LOCAL_SERVER_CONFIG.phoneUrl) {
      phoneUrl = window.LOCAL_SERVER_CONFIG.phoneUrl;
    } else if (window.location.origin && window.location.origin.startsWith("http")) {
      phoneUrl = `${window.location.origin}/phone.html`;
    }

    if (this.phoneUrlLink) {
      this.phoneUrlLink.href = phoneUrl;
      this.phoneUrlLink.textContent = phoneUrl.replace("http://", "");
    }

    if (this.phoneQrCodeEl && typeof QRCode !== "undefined") {
      this.phoneQrCodeEl.innerHTML = "";
      try {
        new QRCode(this.phoneQrCodeEl, {
          text: phoneUrl,
          width: 64,
          height: 64,
          colorDark: "#000000",
          colorLight: "#ffffff",
          correctLevel: QRCode.CorrectLevel.M
        });
      } catch (e) {
        console.warn("QR code render failed:", e);
      }
    }
  }
}

window.EarthJukeboxController = EarthJukeboxController;
