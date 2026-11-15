# Birla Blitz: Web Acoustic Transmitter & Telemetry Visualizer

An acoustic data-over-sound web transmitter that encodes planetary satellite imagery, video streams, and optical matrices into ultrasonic and near-audible audio signals, broadcasting them through standard laptop speakers to an Android receiver in real time.

Developed for the **NASA Space Apps Challenge / Earth Information Center (EIC)** theme on multimodal data sonification and accessible science communication.

---

## System Overview

Birla Blitz bridges visual Earth science and acoustic communication. Using laptop speakers and a phone microphone, the system transmits image telemetry and environmental observations over air without requiring Wi-Fi, Bluetooth, local network pairing, or cloud relays.

```
┌─────────────────────────────────┐                 ┌─────────────────────────────────┐
│     Web Transmitter Station     │                 │      Android Phone Receiver     │
│                                 │                 │                                 │
│  [NASA SVS / Optical Input]     │                 │  [Device Microphone]            │
│               │                 │                 │               │                 │
│  [Pixel Inspection & HUD]       │                 │  [Live FFT Waveform Oscilloscope]│
│               │                 │                 │               │                 │
│  [WebAudio FSK Synthesizer]     │                 │  [WASM Acoustic Demodulator]    │
│               │                 │                 │               │                 │
│  [Laptop Speakers] ─────────────── Acoustic Waves ─► [Visual Reconstruction]        │
│                                 │    (Air Gap)    │               │                 │
│                                 │                 │  [Spoken Voice Narration (TTS)] │
└─────────────────────────────────┘                 └─────────────────────────────────┘
```

---

## Core Features

### 1. Interactive Visualizer & Telemetry Probe
* **Multi-Format Media Pipeline:** Drag-and-drop support for PNG, JPG, WEBP imagery and MP4, WebM, MOV video streams.
* **Canvas Laser Scanline:** Sweeping optical laser scan across image canvas providing visual tracking of active sensor sampling.
* **Coordinate & Pixel Probe HUD:** Hover-based pixel inspection extracting coordinates, 24-bit RGB values, hex color codes, and optical luminance.
* **RGB Spectrum Balance:** Live visual bar gauges tracking color distributions across red, green, and blue optical channels.

### 2. NASA GMAO / GEOS-FP Planetary Observations
Supports official NASA Scientific Visualization Studio (SVS) datasets with calibrated physical unit calculations:
* **NASA SVS 5147 (MC01):** Global 2m Near-Surface Air Temperature (polar freeze to desert heatwaves: -40°C to +50°C).
* **NASA SVS 5148 (MC02):** 10m Surface Wind Velocity (calm breeze to storm-force gale: 0 to 35+ m/s).
* **NASA SVS 5149 (MC03):** Precipitation Intensity & Cloud Optical Thickness (light drizzle to severe downpour: 0.1 to 30+ mm/hr).
* **NASA SVS 5150 (MC04):** Specific Humidity Q2M (arid continental air to saturated tropical corridors: 0 to 24+ g/kg).

Each supported Earth dataset dynamically renders its calibrated scientific colorbar, metadata source links, and observational analysis.

### 3. Non-Earth Optical Image Handling
General visual inputs (portraits, personal photos, non-planetary images) automatically switch to a neutral optical profile:
* Bypasses atmospheric sensor models to prevent fabricated temperature or wind readings.
* Surfaces pure luminance and colorimetry metrics.
* Emits a standard optical carrier token so the mobile receiver renders a general visual card rather than planetary observation telemetry.

### 4. Acoustic Telemetry Synthesizer
* Encodes metadata tokens into error-corrected acoustic bursts using Frequency Shift Keying (FSK).
* Generates audio tones via Web Audio API and WebAssembly at 44.1 kHz / 48 kHz.
* Works over air through standard built-in laptop speakers.

---

## Repository Structure

```
.
├── index.html              # Main web visualizer & acoustic transmitter interface
├── phone.html              # Standalone mobile receiver web interface
├── acoustic-core.js        # WebAssembly runtime loader for FSK acoustic modulation
├── acoustic-core.wasm      # High-performance compiled acoustic modulation core
├── main.js                 # Acoustic protocol handlers & transceiver state logic
├── server.py               # Local HTTP development server
├── run.bat                 # Windows one-click local server launcher
├── stop.bat                # Windows launcher shutdown utility
├── vercel.json             # Static cloud deployment configuration for Vercel
├── assets/
│   ├── images/             # NASA Earth observation frames, scales, and colorbars
│   └── css/                # Interface styles & responsive grid layouts
└── BirlaBlitzSoundToText.apk # Pre-compiled standalone Android receiver application
```

---

## Getting Started

### Option A: Local Development
1. Start the local server:
   ```bash
   python server.py
   ```
   *(Or double-click `run.bat` on Windows)*.
2. Open your browser and navigate to:
   ```
   http://localhost:8000
   ```
3. Click **Initialize Engine** to enable the Web Audio API context.
4. Drag and drop any image or video into the visualizer workspace.
5. Click **Transmit Image Data via Sound** to broadcast the encoded telemetry over air.

### Option B: Cloud Deployment (Vercel)
The repository includes a ready-to-use `vercel.json` configuration for static cloud deployment.
1. Connect this repository to your Vercel account.
2. Deploy directly from the `main` branch.
3. Access the deployed web station on any desktop or mobile browser.

---

## Browser & Hardware Compatibility

* **Browsers:** Chrome 85+, Edge 85+, Firefox 80+, Safari 14.1+.
* **Audio:** Any functional built-in laptop speakers, desktop monitors, or external speakers.
* **Dependencies:** Zero external frameworks or cloud accounts required.
