@echo off
echo Creating basic Settings page...

:: Basic Settings Page without data fetching
echo 'use client' > app\settings\page.tsx
echo. >> app\settings\page.tsx
echo import { useState } from 'react' >> app\settings\page.tsx
echo. >> app\settings\page.tsx
echo export default function SettingsPage() { >> app\settings\page.tsx
echo   const [aiSettings, setAiSettings] = useState({ >> app\settings\page.tsx
echo     model: 'gpt-4', >> app\settings\page.tsx
echo     temperature: 0.7, >> app\settings\page.tsx
echo     maxTokens: 2000 >> app\settings\page.tsx
echo   }) >> app\settings\page.tsx
echo. >> app\settings\page.tsx
echo   return ( >> app\settings\page.tsx
echo     ^<div className="p-6"^> >> app\settings\page.tsx
echo       ^<h2 className="text-xl text-white mb-6"^>Settings^</h2^> >> app\settings\page.tsx
echo       ^<div className="bg-gray-800 p-6 rounded-lg"^> >> app\settings\page.tsx
echo         ^<h3 className="text-lg text-white mb-4"^>AI Assistant Settings^</h3^> >> app\settings\page.tsx
echo         ^<div className="space-y-4"^> >> app\settings\page.tsx
echo           ^<div^> >> app\settings\page.tsx
echo             ^<label className="block text-gray-300 mb-2"^>Model^</label^> >> app\settings\page.tsx
echo             ^<select className="w-full bg-gray-700 text-white p-2 rounded" value={aiSettings.model} onChange={(e) => setAiSettings({...aiSettings, model: e.target.value})}^> >> app\settings\page.tsx
echo               ^<option value="gpt-4"^>GPT-4^</option^> >> app\settings\page.tsx
echo               ^<option value="gpt-3.5-turbo"^>GPT-3.5 Turbo^</option^> >> app\settings\page.tsx
echo             ^</select^> >> app\settings\page.tsx
echo           ^</div^> >> app\settings\page.tsx
echo         ^</div^> >> app\settings\page.tsx
echo       ^</div^> >> app\settings\page.tsx
echo     ^</div^> >> app\settings\page.tsx
echo   ) >> app\settings\page.tsx
echo } >> app\settings\page.tsx

echo Basic Settings page created successfully! 