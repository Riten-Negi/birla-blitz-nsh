/**
 * NASA Earth Information Center - Computer Vision & Analysis Engine
 * Real-time pixel sampling, scanline sweeping, color space transformations,
 * and audio-visual oscilloscope rendering.
 */

class EarthVisionEngine {
  constructor(canvasElement, analyzerCanvasElement, audioEngine) {
    this.canvas = canvasElement;
    this.ctx = canvasElement.getContext("2d", { willReadFrequently: true });
    
    this.analyzerCanvas = analyzerCanvasElement;
    this.analyzerCtx = analyzerCanvasElement ? analyzerCanvasElement.getContext("2d") : null;
    
    this.audioEngine = audioEngine;
    
    // Offscreen buffer for pixel sampling
    this.offscreenCanvas = document.createElement("canvas");
    this.offscreenCtx = this.offscreenCanvas.getContext("2d", { willReadFrequently: true });
    
    this.currentImage = null;
    this.isImageLoaded = false;
    
    // Scanline state
    this.scanProgress = 0.0; // 0.0 to 1.0
    this.scanDirection = "vertical"; // 'vertical' (N -> S) or 'horizontal' (W -> E)
    this.scanSpeed = 0.0035; // progress per frame
    this.isScanActive = true;
    
    // Interactive Probe state
    this.probeX = 0.5; // normalized 0..1
    this.probeY = 0.5;
    this.isProbeHovered = false;
    
    // Trigger throttle
    this.lastNoteTime = 0;
    this.noteIntervalMs = 120; // 8 notes per second max
    
    // Frequency/Time domain buffer for analyzer
    this.freqData = null;
    this.timeData = null;
    
    this.animationFrameId = null;
    this.datasetConfig = null;
    
    this.onProbeUpdate = null; // Callback for UI probe display
  }

  setDatasetConfig(config) {
    this.datasetConfig = config;
  }

  async loadImage(imageSrc) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => {
        this.currentImage = img;
        this.offscreenCanvas.width = img.width;
        this.offscreenCanvas.height = img.height;
        this.offscreenCtx.drawImage(img, 0, 0);
        this.isImageLoaded = true;
        this.render();
        resolve(img);
      };
      img.onerror = (e) => reject(e);
      img.src = imageSrc;
    });
  }

  startLoop() {
    if (this.animationFrameId) return;
    const loop = () => {
      this.updateScanline();
      this.render();
      this.renderAnalyzer();
      this.animationFrameId = requestAnimationFrame(loop);
    };
    this.animationFrameId = requestAnimationFrame(loop);
  }

  stopLoop() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }
  }

  updateScanline() {
    if (!this.isScanActive || !this.isImageLoaded) return;
    
    this.scanProgress += this.scanSpeed;
    if (this.scanProgress > 1.0) {
      this.scanProgress = 0.0;
    }
    
    // Sample pixels along current scanline
    const now = performance.now();
    if (now - this.lastNoteTime > this.noteIntervalMs && this.audioEngine.isPlaying) {
      this.sampleAndSonifyScanline();
      this.lastNoteTime = now;
    }
  }

  sampleAndSonifyScanline() {
    if (!this.isImageLoaded) return;
    const w = this.offscreenCanvas.width;
    const h = this.offscreenCanvas.height;
    
    let samplePixels;
    let scanCoordNorm = this.scanProgress;
    
    if (this.scanDirection === "vertical") {
      // Horizontal slice moving North to South
      const y = Math.floor(scanCoordNorm * (h - 1));
      samplePixels = this.offscreenCtx.getImageData(0, y, w, 1).data;
    } else {
      // Vertical slice moving West to East
      const x = Math.floor(scanCoordNorm * (w - 1));
      samplePixels = this.offscreenCtx.getImageData(x, 0, 1, h).data;
    }
    
    let rSum = 0, gSum = 0, bSum = 0;
    let maxLum = 0, maxLumPos = 0.5;
    let count = 0;
    
    const step = 8; // Step through line
    const totalPoints = (samplePixels.length / 4);
    
    for (let i = 0; i < samplePixels.length; i += 4 * step) {
      const r = samplePixels[i];
      const g = samplePixels[i + 1];
      const b = samplePixels[i + 2];
      
      rSum += r;
      gSum += g;
      bSum += b;
      count++;
      
      const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255.0;
      if (lum > maxLum) {
        maxLum = lum;
        maxLumPos = (i / 4) / totalPoints;
      }
    }
    
    if (count === 0) return;
    
    const avgR = rSum / count;
    const avgG = gSum / count;
    const avgB = bSum / count;
    const avgLum = (0.299 * avgR + 0.587 * avgG + 0.114 * avgB) / 255.0;
    const warmth = Math.max(0, (avgR - avgB) / 255.0);
    const greenness = Math.max(0, (avgG - avgR * 0.7) / 255.0);
    
    // Update foundation drone & filter in real time
    this.audioEngine.updatePlanetaryFilters(avgLum, warmth, greenness);
    
    // Trigger musical note if there is meaningful visual contrast
    if (maxLum > 0.15) {
      let timbre = "marimba";
      let pitchVal = maxLum;
      
      const dsId = this.datasetConfig ? this.datasetConfig.id : "";
      if (dsId === "global-temperature") {
        timbre = warmth > 0.35 ? "saw" : "triangle";
        pitchVal = warmth > 0.2 ? warmth : (1.0 - avgB / 255.0);
      } else if (dsId === "arctic-sea-ice") {
        timbre = "crystal";
        if (maxLum > 0.65) {
          // Play FM bell for ice
          this.audioEngine.triggerFmBell({
            carrierFreq: this.audioEngine.midiToFreq(this.audioEngine.rootMidi + 24),
            duration: 1.0,
            volume: 0.25,
            pan: maxLumPos
          });
          return;
        }
      } else if (dsId === "atmospheric-co2") {
        timbre = "urgent";
      }
      
      this.audioEngine.triggerVisualNote({
        normalizedPitch: pitchVal,
        pan: maxLumPos,
        volume: 0.2 + maxLum * 0.18,
        timbre: timbre,
        duration: 0.28
      });
    }
  }

  /**
   * Sample a 15x15 kernel around the interactive probe.
   */
  sampleProbeKernel(normX, normY) {
    if (!this.isImageLoaded) return null;
    const w = this.offscreenCanvas.width;
    const h = this.offscreenCanvas.height;
    
    const px = Math.floor(normX * w);
    const py = Math.floor(normY * h);
    
    const kernelSize = 15;
    const half = Math.floor(kernelSize / 2);
    
    const startX = Math.max(0, px - half);
    const startY = Math.max(0, py - half);
    const kw = Math.min(w - startX, kernelSize);
    const kh = Math.min(h - startY, kernelSize);
    
    const imgData = this.offscreenCtx.getImageData(startX, startY, kw, kh);
    const d = imgData.data;
    
    let rSum = 0, gSum = 0, bSum = 0;
    const count = d.length / 4;
    
    for (let i = 0; i < d.length; i += 4) {
      rSum += d[i];
      gSum += d[i + 1];
      bSum += d[i + 2];
    }
    
    const avgR = Math.round(rSum / count);
    const avgG = Math.round(gSum / count);
    const avgB = Math.round(bSum / count);
    const lum = (0.299 * avgR + 0.587 * avgG + 0.114 * avgB) / 255.0;
    const warmth = Math.max(0, (avgR - avgB) / 255.0);
    const greenness = Math.max(0, (avgG - avgR * 0.6) / 255.0);
    
    // Latitude / Longitude approximate calculation (Equirectangular)
    const lat = 90 - (normY * 180);
    const lon = (normX * 360) - 180;
    
    const result = {
      x: normX,
      y: normY,
      lat: `${Math.abs(lat).toFixed(1)}° ${lat >= 0 ? 'N' : 'S'}`,
      lon: `${Math.abs(lon).toFixed(1)}° ${lon >= 0 ? 'E' : 'W'}`,
      rgb: `rgb(${avgR}, ${avgG}, ${avgB})`,
      hex: `#${((1 << 24) + (avgR << 16) + (avgG << 8) + avgB).toString(16).slice(1)}`,
      lum: lum,
      warmth: warmth,
      greenness: greenness,
      hue: this.calculateHue(avgR, avgG, avgB)
    };
    
    if (this.onProbeUpdate) {
      this.onProbeUpdate(result);
    }
    
    return result;
  }

  calculateHue(r, g, b) {
    r /= 255; g /= 255; b /= 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const delta = max - min;
    if (delta === 0) return 0;
    let h;
    if (max === r) h = ((g - b) / delta) % 6;
    else if (max === g) h = ((b - r) / delta) + 2;
    else h = ((r - g) / delta) + 4;
    h = h / 6;
    if (h < 0) h += 1;
    return h;
  }

  render() {
    if (!this.canvas) return;
    const cw = this.canvas.width;
    const ch = this.canvas.height;
    
    this.ctx.clearRect(0, 0, cw, ch);
    
    // Draw current visualization frame
    if (this.currentImage && this.isImageLoaded) {
      this.ctx.drawImage(this.currentImage, 0, 0, cw, ch);
    } else {
      this.ctx.fillStyle = "#0c1220";
      this.ctx.fillRect(0, 0, cw, ch);
      this.ctx.fillStyle = "#4a628a";
      this.ctx.font = "14px monospace";
      this.ctx.fillText("Loading EIC Imagery...", cw / 2 - 80, ch / 2);
      return;
    }
    
    // Draw Preset Probe Points
    if (this.datasetConfig && this.datasetConfig.probePoints) {
      this.datasetConfig.probePoints.forEach((point) => {
        const px = point.x * cw;
        const py = point.y * ch;
        
        this.ctx.save();
        // Pulsing ring
        const pulse = (Math.sin(performance.now() * 0.004) + 1) * 0.5;
        this.ctx.beginPath();
        this.ctx.arc(px, py, 6 + pulse * 6, 0, Math.PI * 2);
        this.ctx.strokeStyle = "rgba(0, 243, 255, 0.45)";
        this.ctx.lineWidth = 1.5;
        this.ctx.stroke();
        
        // Center dot
        this.ctx.beginPath();
        this.ctx.arc(px, py, 3.5, 0, Math.PI * 2);
        this.ctx.fillStyle = "#00f3ff";
        this.ctx.fill();
        
        // Label
        this.ctx.font = "10px sans-serif";
        this.ctx.fillStyle = "rgba(255, 255, 255, 0.85)";
        this.ctx.fillText(point.name, px + 8, py - 6);
        this.ctx.restore();
      });
    }
    
    // Draw Scanning Laser Beam
    if (this.isScanActive) {
      this.ctx.save();
      if (this.scanDirection === "vertical") {
        const scanY = this.scanProgress * ch;
        // Gradient glow
        const grad = this.ctx.createLinearGradient(0, scanY - 12, 0, scanY + 12);
        grad.addColorStop(0, "rgba(0, 243, 255, 0)");
        grad.addColorStop(0.5, "rgba(0, 243, 255, 0.8)");
        grad.addColorStop(1, "rgba(0, 243, 255, 0)");
        this.ctx.fillStyle = grad;
        this.ctx.fillRect(0, scanY - 10, cw, 20);
        
        // Center laser line
        this.ctx.strokeStyle = "#ffffff";
        this.ctx.lineWidth = 1.5;
        this.ctx.beginPath();
        this.ctx.moveTo(0, scanY);
        this.ctx.lineTo(cw, scanY);
        this.ctx.stroke();
      } else {
        const scanX = this.scanProgress * cw;
        const grad = this.ctx.createLinearGradient(scanX - 12, 0, scanX + 12, 0);
        grad.addColorStop(0, "rgba(0, 243, 255, 0)");
        grad.addColorStop(0.5, "rgba(0, 243, 255, 0.8)");
        grad.addColorStop(1, "rgba(0, 243, 255, 0)");
        this.ctx.fillStyle = grad;
        this.ctx.fillRect(scanX - 10, 0, 20, ch);
        
        this.ctx.strokeStyle = "#ffffff";
        this.ctx.lineWidth = 1.5;
        this.ctx.beginPath();
        this.ctx.moveTo(scanX, 0);
        this.ctx.lineTo(scanX, ch);
        this.ctx.stroke();
      }
      this.ctx.restore();
    }
    
    // Draw Crosshair Probe
    const probePx = this.probeX * cw;
    const probePy = this.probeY * ch;
    
    this.ctx.save();
    this.ctx.strokeStyle = "#ffc107";
    this.ctx.lineWidth = 1.5;
    
    // Crosshair lines
    this.ctx.beginPath();
    this.ctx.moveTo(probePx - 14, probePy);
    this.ctx.lineTo(probePx + 14, probePy);
    this.ctx.moveTo(probePx, probePy - 14);
    this.ctx.lineTo(probePx, probePy + 14);
    this.ctx.stroke();
    
    // Reticle circle
    this.ctx.beginPath();
    this.ctx.arc(probePx, probePy, 8, 0, Math.PI * 2);
    this.ctx.stroke();
    this.ctx.restore();
  }

  /**
   * Real-time audio spectrum & oscilloscope visualizer
   * Essential for deaf and hard-of-hearing users to visualize the soundscape!
   */
  renderAnalyzer() {
    if (!this.analyzerCtx || !this.audioEngine.analyser) return;
    const canvas = this.analyzerCanvas;
    const actx = this.analyzerCtx;
    const w = canvas.width;
    const h = canvas.height;
    
    if (!this.freqData) {
      this.freqData = new Uint8Array(this.audioEngine.analyser.frequencyBinCount);
      this.timeData = new Uint8Array(this.audioEngine.analyser.fftSize);
    }
    
    this.audioEngine.analyser.getByteFrequencyData(this.freqData);
    this.audioEngine.analyser.getByteTimeDomainData(this.timeData);
    
    actx.fillStyle = "rgba(10, 16, 28, 0.85)";
    actx.fillRect(0, 0, w, h);
    
    // Frequency Spectrum Bars
    const barCount = 64;
    const barWidth = (w / barCount) - 1;
    const step = Math.floor(this.freqData.length / barCount);
    
    for (let i = 0; i < barCount; i++) {
      const val = this.freqData[i * step] / 255.0;
      const barHeight = val * (h * 0.75);
      
      const hue = 180 + (i / barCount) * 160;
      actx.fillStyle = `hsl(${hue}, 90%, ${40 + val * 40}%)`;
      actx.fillRect(i * (barWidth + 1), h - barHeight, barWidth, barHeight);
    }
    
    // Oscilloscope Waveform Line
    actx.strokeStyle = "#00f3ff";
    actx.lineWidth = 2.0;
    actx.beginPath();
    
    const sliceWidth = w / this.timeData.length;
    let x = 0;
    for (let i = 0; i < this.timeData.length; i++) {
      const v = this.timeData[i] / 128.0;
      const y = (v * h) / 2;
      if (i === 0) {
        actx.moveTo(x, y);
      } else {
        actx.lineTo(x, y);
      }
      x += sliceWidth;
    }
    actx.stroke();
    
    // HUD text
    actx.font = "9px monospace";
    actx.fillStyle = "#8fa3bf";
    actx.fillText("LIVE SONOGRAM SPECTRUM & WAVEFORM", 8, 14);
  }
}

window.EarthVisionEngine = EarthVisionEngine;
