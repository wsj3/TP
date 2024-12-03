@echo off
echo Creating Therapist's Friend directory structure...

:: Create root directory
mkdir TF
cd TF

:: Create app directory and its subdirectories
mkdir app
cd app

:: Create auth directory
mkdir "(auth)"
cd "(auth)"
mkdir login
cd ..

:: Create dashboard directory
mkdir "(dashboard)"
cd "(dashboard)"
mkdir patients
mkdir messages
mkdir billing
mkdir sessions
mkdir diagnosis
mkdir settings
cd ..

:: Create components directory and its subdirectories
mkdir components
cd components

mkdir layout
mkdir shared
mkdir dashboard

cd ..

:: Create necessary files (touching empty files)
echo. > layout.tsx
echo. > page.tsx
echo. > globals.css

cd components\layout
echo. > Sidebar.tsx
echo. > Header.tsx
echo. > AIAssistant.tsx

cd ..\shared
echo. > Button.tsx
echo. > SearchBar.tsx
echo. > StatusBadge.tsx

cd ..\dashboard
echo. > PatientList.tsx
echo. > MessageList.tsx
echo. > DiagnosisList.tsx

:: Return to root
cd ..\..\..

:: Create config files in root
echo. > package.json
echo. > tsconfig.json
echo. > tailwind.config.js
echo. > next.config.js
echo. > .env.local

echo Directory structure created successfully!
pause