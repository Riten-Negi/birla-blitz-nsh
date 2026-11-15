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

    def do_GET(self):
        if self.path in ("/shutdown", "/stop", "/exit"):
            self.send_response(200)
            self.send_header("Content-Type", "text/html; charset=utf-8")
            self.end_headers()
            self.wfile.write(b"<html><head><title>Server Stopped</title></head><body style='font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif; text-align:center; padding:60px 20px; background:#f8fafc; color:#1e293b;'><div style='max-width:500px; margin:0 auto; background:#fff; border:1px solid #e2e8f0; border-radius:12px; padding:30px; box-shadow:0 4px 10px rgba(0,0,0,0.05);'><h2 style='color:#16a34a; margin-top:0;'>&#10004; Transmitter Server Stopped</h2><p style='color:#64748b; font-size:14px;'>The Birla Blitz local transmitter server on port 8000 has been shut down cleanly and all network sockets have been released.</p><p style='font-size:12px; color:#94a3b8; margin-bottom:0;'>You can safely close this browser tab.</p></div></body></html>")
            def kill_server():
                time.sleep(0.5)
                os._exit(0)
            threading.Thread(target=kill_server, daemon=True).start()
            return
        super().do_GET()

    def end_headers(self):
        self.send_header("Cache-Control", "no-cache, no-store, must-revalidate")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()

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
    print("CONTROLS TO STOP THE SERVER:")
    print("  * Press [Ctrl+C] in this terminal window to stop")
    print("  * Click 'Stop Server' in the web interface")
    print(f"  * Or run stop.bat anytime")
    print("=" * 72)
    print("\n[ACTIVE] Server listening on http://localhost:8000/index.html ...\n")
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
