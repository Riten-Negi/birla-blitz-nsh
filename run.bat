@echo off
title Birla Blitz - Sound to Text Transmitter
cd /d "%~dp0"

echo ======================================================================
echo             BIRLA BLITZ - SOUND TO TEXT TRANSMITTER
echo       Physical Acoustic Data Transmission via Sound Waves
echo ======================================================================
echo.

:: 1. Free port 8000 if occupied
for /f "tokens=5" %%a in ('netstat -aon 2^>nul ^| findstr :8000 ^| findstr LISTENING 2^>nul') do taskkill /f /pid %%a >nul 2>&1

:: 2. Locate working Python executable
set "PY_EXE="

:: Priority 1: py launcher (standard Windows Python)
py -V >nul 2>&1 && set "PY_EXE=py"

:: Priority 2: local python_local if present
if not defined PY_EXE if exist "%~dp0python_local\python.exe" set "PY_EXE=%~dp0python_local\python.exe"
if not defined PY_EXE if exist "%~dp0..\python_local\python.exe" set "PY_EXE=%~dp0..\python_local\python.exe"
if not defined PY_EXE if exist "C:\Users\naiti\.gemini\antigravity\scratch\python_local\python.exe" set "PY_EXE=C:\Users\naiti\.gemini\antigravity\scratch\python_local\python.exe"

:: Priority 3: system python (verified with -V to avoid WindowsApps stub)
if not defined PY_EXE (
    python -V >nul 2>&1 && set "PY_EXE=python"
)

:: Priority 4: Built-in Windows PowerShell Server (zero external dependencies)
if not defined PY_EXE (
    echo [NOTICE] Python was not found. Using built-in Windows HTTP server...
    echo [URL]    http://localhost:8000/index.html
    echo.
    powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0server.ps1"
    goto :SERVER_STOPPED
)

echo [LAUNCH] Starting Transmitter Server via: %PY_EXE%
echo [URL]    http://localhost:8000/index.html
echo.
"%PY_EXE%" "%~dp0server.py"

:SERVER_STOPPED
echo.
echo ======================================================================
echo [CLEANUP] Stopping transmitter server and freeing port 8000...
for /f "tokens=5" %%a in ('netstat -aon 2^>nul ^| findstr :8000 ^| findstr LISTENING 2^>nul') do taskkill /f /pid %%a >nul 2>&1
echo [SUCCESS] Transmitter server closed cleanly.
echo ======================================================================
echo.
pause
