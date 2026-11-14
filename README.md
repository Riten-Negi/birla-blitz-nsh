# ⚡ Birla Blitz: Sound to Text

A real-time acoustic sound-to-text transmission and reception suite. Broadcasts arbitrary text messages over acoustic audio waves using high-speed FSK modulation and receives/converts them to text on a mobile web app in real time.

---

## 🚀 Features

* **Desktop Transmitter (`index.html`)**:
  * Branded as **Birla Blitz Sound to Text**.
  * Pure, streamlined transmission interface.
  * Locked to **Fastest Mode** for instantaneous acoustic burst transmission.
  * Free-form text input ("Tx Data:") with live volume slider, output/capture status LEDs, and a Broadcast button.
  * Automatic local Wi-Fi QR code pairing for the mobile receiver.

* **Mobile Receiver App (`phone.html`)**:
  * Clean, modern **White / Light UI Theme** (`#ffffff` & `#f8fafc`).
  * Installable as a native mobile app (**Progressive Web App / PWA** with `manifest.json`, high-res icons, and service worker `sw.js`).
  * Real-time microphone audio capture and live waveform oscilloscope.
  * Prominent **"Received Text Message"** display container that decrypts the incoming sound waves into exact text in real time.
  * **Completely clean interface**: No test buttons, no revealed secret codes, and no hints shown.
  * **Hidden Retraction Vault**: Secretly detects embedded data tags behind the scenes and automatically unlocks classified visual telemetry if matched!

---

## ⚡ How to Run

### 1. Launch the Server
Double-click `run.bat` or run:
```bash
python server.py
```

### 2. Open on Laptop
Your browser will open:
```
http://localhost:8000
```
Click **Init** to activate audio output.

### 3. Open on Mobile Phone
Scan the QR code displayed on the laptop screen or open:
```
https://<your-lan-ip>:8443/phone.html
```
*(Tap **Advanced** &rarr; **Proceed** to bypass the local development certificate and allow microphone access).*

* **To install as a mobile app**: Tap the **📲 Install** button in the header (or in Safari: tap Share &rarr; *Add to Home Screen*).
* Tap **"🎙 START LISTENING (AUDIO RX)"**.

### 4. Transmit & Receive
* On your laptop, type any text into **Tx Data:** and click **Broadcast**.
* The phone microphone picks up the sound and instantly renders the exact text on screen!
