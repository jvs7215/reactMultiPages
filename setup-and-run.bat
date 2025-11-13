@echo off
echo Installing dependencies...
call npm install
if %errorlevel% neq 0 (
    echo Error: npm install failed
    pause
    exit /b %errorlevel%
)

echo.
echo Starting development server...
echo.
call npm run dev

