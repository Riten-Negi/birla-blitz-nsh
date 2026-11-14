"""
Birla Blitz Sound to Text - Transmitter Server
Serves the Birla Blitz Sound to Text transmitter on http://localhost:8000.
The receiver runs natively as a standalone Android APK (BirlaBlitzSoundToText.apk)
over physical acoustic sound waves through speaker and microphone - no Wi-Fi or local network needed!
"""

import http.server
import socketserver
import os
import sys
import webbrowser
import threading
import time

HTTP_PORT = 8000
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

class QuietHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=BASE_DIR, **kwargs)

    def log_message(self, format, *args):
        # Keep logs clean
        if "200" not in str(args) and "304" not in str(args):
            sys.stderr.write("%s - - [%s] %s\n" %
                             (self.address_string(),
                              self.log_date_time_string(),
                              format % args))

def open_browser(port):
    time.sleep(1.0)
    webbrowser.open(f"http://localhost:{port}/index.html")

def main():
    os.chdir(BASE_DIR)
    
    desktop_url = f"http://localhost:{HTTP_PORT}/index.html"
    apk_path = os.path.abspath(os.path.join(BASE_DIR, "..", "BirlaBlitzSoundToText.apk"))

    print("=" * 72)
    print("             BIRLA BLITZ - SOUND TO TEXT TRANSMITTER")
    print("      Physical Acoustic Data Transmission via Sound Waves")
    print("=" * 72)
    print(f"[LAPTOP TRANSMITTER] Running at: {desktop_url}")
    print(f"[STANDALONE APK]     Located at: {apk_path}")
    print("=" * 72)
    print("HOW IT WORKS (100% OFFLINE - NO WI-FI REQUIRED):")
    print("1. Install 'BirlaBlitzSoundToText.apk' on your Android phone.")
    print("2. Open Birla Blitz on your phone and tap 'START LISTENING'.")
    print("3. On this laptop, type any message or secret code and click 'Send'.")
    print("4. The laptop speaker emits the acoustic burst, and your phone's microphone")
    print("   hears and instantly decrypts it into text & triggers secret NASA data!")
    print("=" * 72)
    print("Press Ctrl+C to stop.\n")
    sys.stdout.flush()

    threading.Thread(target=open_browser, args=(HTTP_PORT,), daemon=True).start()

    try:
        with socketserver.ThreadingTCPServer(("", HTTP_PORT), QuietHandler) as httpd:
            httpd.allow_reuse_address = True
            try:
                httpd.serve_forever()
            except KeyboardInterrupt:
                print("\n[Birla Blitz] Transmitter server stopped.")
    except OSError:
        print(f"\n[INFO] Server is already actively running on port {HTTP_PORT}!")
        print(f"[BROWSER] Opening {desktop_url} ...")
        webbrowser.open(desktop_url)

if __name__ == "__main__":
    main()
