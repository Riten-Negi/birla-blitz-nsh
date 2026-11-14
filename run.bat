@echo off
title "Birla Blitz - Sound to Text"
cd /d "%~dp0"

echo ======================================================================
echo             BIRLA BLITZ - SOUND TO TEXT TRANSMITTER
echo       Physical Acoustic Data Transmission via Sound Waves
echo ======================================================================
echo.

:: 1. Try official Windows Python Launcher (py)
where py >nul 2>&1
if %ERRORLEVEL% equ 0 (
    echo [LAUNCH] Starting Python Transmitter Engine via py launcher...
    echo [URL]    http://localhost:8000/index.html
    echo.
    py "%~dp0server.py"
    goto :SERVER_STOPPED
)

:: 2. Try python_local in current directory
if exist "%~dp0python_local\python.exe" (
    echo [LAUNCH] Starting Python Transmitter Engine via python_local...
    echo [URL]    http://localhost:8000/index.html
    echo.
    "%~dp0python_local\python.exe" "%~dp0server.py"
    goto :SERVER_STOPPED
)

:: 3. Try python_local in parent directory
if exist "%~dp0..\python_local\python.exe" (
    echo [LAUNCH] Starting Python Transmitter Engine via ..\python_local...
    echo [URL]    http://localhost:8000/index.html
    echo.
    "%~dp0..\python_local\python.exe" "%~dp0server.py"
    goto :SERVER_STOPPED
)

:: 4. Try hardcoded antigravity scratch python_local
if exist "C:\Users\naiti\.gemini\antigravity\scratch\python_local\python.exe" (
    echo [LAUNCH] Starting Python Transmitter Engine...
    echo [URL]    http://localhost:8000/index.html
    echo.
    "C:\Users\naiti\.gemini\antigravity\scratch\python_local\python.exe" "%~dp0server.py"
    goto :SERVER_STOPPED
)

:: 5. Try system python
where python >nul 2>&1
if %ERRORLEVEL% equ 0 (
    echo [LAUNCH] Starting Python Transmitter Engine via system python...
    echo [URL]    http://localhost:8000/index.html
    echo.
    python "%~dp0server.py"
    goto :SERVER_STOPPED
)

:: 6. Ultimate Native Fallback: PowerShell (100% built into every Windows 10/11 PC)
echo [NOTICE] Python was not found. Using built-in Windows Server...
echo [LAUNCH] Starting native PowerShell HTTP Server...
echo [URL]    http://localhost:8000/index.html
echo.
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0server.ps1"

:SERVER_STOPPED
echo.
echo ======================================================================
echo Transmitter server stopped.
echo ======================================================================
pause
