@echo off
title Stop Birla Blitz Server
cd /d "%~dp0"

echo ======================================================================
echo           BIRLA BLITZ - STOPPING TRANSMITTER SERVER
echo ======================================================================
echo.

set "KILLED=0"
for /f "tokens=5" %%a in ('netstat -aon 2^>nul ^| findstr :8000 ^| findstr LISTENING 2^>nul') do (
    taskkill /f /pid %%a >nul 2>&1
    set "KILLED=1"
)

if "%KILLED%"=="1" (
    echo [SUCCESS] Server stopped. Port 8000 has been released.
) else (
    echo [INFO] No server was currently active on port 8000.
)
echo.
echo ======================================================================
ping 127.0.0.1 -n 2 >nul
exit
