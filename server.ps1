# Birla Blitz - Pure PowerShell HTTP Server (Zero Python Dependency Fallback)
param(
    [int]$Port = 8000
)

$baseDir = Split-Path -Parent $MyInvocation.MyCommand.Definition
Set-Location $baseDir

$mimeTypes = @{
    ".html" = "text/html; charset=utf-8"
    ".htm"  = "text/html; charset=utf-8"
    ".js"   = "application/javascript"
    ".mjs"  = "application/javascript"
    ".wasm" = "application/wasm"
    ".css"  = "text/css"
    ".png"  = "image/png"
    ".jpg"  = "image/jpeg"
    ".jpeg" = "image/jpeg"
    ".ico"  = "image/x-icon"
    ".mp3"  = "audio/mpeg"
    ".mp4"  = "video/mp4"
    ".apk"  = "application/vnd.android.package-archive"
    ".json" = "application/json"
    ".txt"  = "text/plain; charset=utf-8"
}

$listener = New-Object System.Net.HttpListener
$prefix = "http://*:$Port/"
try {
    $listener.Prefixes.Add($prefix)
    $listener.Start()
} catch {
    $listener = New-Object System.Net.HttpListener
    $listener.Prefixes.Add("http://localhost:$Port/")
    $listener.Start()
}

$localUrl = "http://localhost:$Port/index.html"
Write-Host "======================================================================" -ForegroundColor Cyan
Write-Host "             BIRLA BLITZ - SOUND TO TEXT TRANSMITTER" -ForegroundColor Yellow
Write-Host "      Physical Acoustic Data Transmission via Sound Waves" -ForegroundColor White
Write-Host "======================================================================" -ForegroundColor Cyan
Write-Host "[LAPTOP TRANSMITTER] Running at: $localUrl" -ForegroundColor Green
Write-Host "[ENGINE]              PowerShell Native Web Server (Port $Port)" -ForegroundColor Gray
Write-Host "======================================================================" -ForegroundColor Cyan
Write-Host "Press Ctrl+C to stop the server." -ForegroundColor Yellow
Write-Host ""

Start-Process $localUrl

while ($listener.IsListening) {
    try {
        $context = $listener.GetContext()
        [System.Threading.ThreadPool]::QueueUserWorkItem({
            param($ctx)
            try {
                $req = $ctx.Request
                $resp = $ctx.Response
                
                $rawPath = $req.Url.LocalPath.TrimStart('/')
                if ([string]::IsNullOrWhiteSpace($rawPath) -or $rawPath -eq "/") {
                    $rawPath = "index.html"
                }
                
                $decodedPath = [System.Uri]::UnescapeDataString($rawPath)
                $filePath = [System.IO.Path]::Combine($using:baseDir, $decodedPath.Replace('/', '\'))
                
                if ([System.IO.File]::Exists($filePath)) {
                    $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
                    $contentType = if ($using:mimeTypes.ContainsKey($ext)) { $using:mimeTypes[$ext] } else { "application/octet-stream" }
                    
                    $resp.ContentType = $contentType
                    $resp.StatusCode = 200
                    
                    # Ensure WASM and audio have CORS headers
                    $resp.AddHeader("Access-Control-Allow-Origin", "*")
                    $resp.AddHeader("Cross-Origin-Opener-Policy", "same-origin")
                    $resp.AddHeader("Cross-Origin-Embedder-Policy", "require-corp")
                    
                    $bytes = [System.IO.File]::ReadAllBytes($filePath)
                    $resp.ContentLength64 = $bytes.Length
                    $resp.OutputStream.Write($bytes, 0, $bytes.Length)
                } else {
                    $resp.StatusCode = 404
                    $errBytes = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found: $decodedPath")
                    $resp.ContentLength64 = $errBytes.Length
                    $resp.OutputStream.Write($errBytes, 0, $errBytes.Length)
                }
            } catch {}
            finally {
                try { $ctx.Response.OutputStream.Close() } catch {}
            }
        }, $context) | Out-Null
    } catch {
        break
    }
}
