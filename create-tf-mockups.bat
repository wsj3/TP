@echo off
echo Creating updated UI mockups...

:: Billing Page for client and insurance billing
echo 'use client' > app\billing\page.tsx
echo. >> app\billing\page.tsx
echo export default function BillingPage() { >> app\billing\page.tsx
echo   return ( >> app\billing\page.tsx
echo     ^<div className="p-6"^> >> app\billing\page.tsx
echo       ^<h2 className="text-xl text-white mb-6"^>Client Billing ^& Insurance^</h2^> >> app\billing\page.tsx
echo       ^<div className="grid grid-cols-2 gap-6"^> >> app\billing\page.tsx
echo         ^<div className="bg-gray-800 p-6 rounded-lg"^> >> app\billing\page.tsx
echo           ^<h3 className="text-lg text-white mb-4"^>Create New Bill^</h3^> >> app\billing\page.tsx
echo           ^<form className="space-y-4"^> >> app\billing\page.tsx
echo             ^<div^> >> app\billing\page.tsx
echo               ^<label className="block text-gray-300 mb-2"^>Client^</label^> >> app\billing\page.tsx
echo               ^<select className="w-full bg-gray-700 text-white p-2 rounded"^> >> app\billing\page.tsx
echo                 ^<option^>Select Client^</option^> >> app\billing\page.tsx
echo                 ^<option^>John Doe^</option^> >> app\billing\page.tsx
echo               ^</select^> >> app\billing\page.tsx
echo             ^</div^> >> app\billing\page.tsx
echo             ^<div^> >> app\billing\page.tsx
echo               ^<label className="block text-gray-300 mb-2"^>Service Type^</label^> >> app\billing\page.tsx
echo               ^<select className="w-full bg-gray-700 text-white p-2 rounded"^> >> app\billing\page.tsx
echo                 ^<option^>Individual Therapy (90837)^</option^> >> app\billing\page.tsx
echo                 ^<option^>Group Therapy (90853)^</option^> >> app\billing\page.tsx
echo               ^</select^> >> app\billing\page.tsx
echo             ^</div^> >> app\billing\page.tsx
echo             ^<div^> >> app\billing\page.tsx
echo               ^<label className="block text-gray-300 mb-2"^>Insurance Provider^</label^> >> app\billing\page.tsx
echo               ^<select className="w-full bg-gray-700 text-white p-2 rounded"^> >> app\billing\page.tsx
echo                 ^<option^>Blue Cross^</option^> >> app\billing\page.tsx
echo                 ^<option^>Aetna^</option^> >> app\billing\page.tsx
echo                 ^<option^>Self-Pay^</option^> >> app\billing\page.tsx
echo               ^</select^> >> app\billing\page.tsx
echo             ^</div^> >> app\billing\page.tsx
echo             ^<button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"^>Generate Bill^</button^> >> app\billing\page.tsx
echo           ^</form^> >> app\billing\page.tsx
echo         ^</div^> >> app\billing\page.tsx
echo         ^<div className="bg-gray-800 p-6 rounded-lg"^> >> app\billing\page.tsx
echo           ^<h3 className="text-lg text-white mb-4"^>Recent Bills^</h3^> >> app\billing\page.tsx
echo           ^<div className="space-y-3"^> >> app\billing\page.tsx
echo             ^<div className="bg-gray-700 p-3 rounded"^> >> app\billing\page.tsx
echo               ^<div className="flex justify-between text-white"^> >> app\billing\page.tsx
echo                 ^<span^>John Doe^</span^> >> app\billing\page.tsx
echo                 ^<span^>$150.00^</span^> >> app\billing\page.tsx
echo               ^</div^> >> app\billing\page.tsx
echo               ^<div className="text-sm text-gray-400"^>Insurance: Blue Cross - Pending^</div^> >> app\billing\page.tsx
echo             ^</div^> >> app\billing\page.tsx
echo           ^</div^> >> app\billing\page.tsx
echo         ^</div^> >> app\billing\page.tsx
echo       ^</div^> >> app\billing\page.tsx
echo     ^</div^> >> app\billing\page.tsx
echo   ) >> app\billing\page.tsx
echo } >> app\billing\page.tsx

:: AI Assistant Configuration Page
echo 'use client' > app\ai-assistant\page.tsx
echo. >> app\ai-assistant\page.tsx
echo export default function AIAssistantPage() { >> app\ai-assistant\page.tsx
echo   return ( >> app\ai-assistant\page.tsx
echo     ^<div className="p-6"^> >> app\ai-assistant\page.tsx
echo       ^<h2 className="text-xl text-white mb-6"^>AI Assistant Configuration^</h2^> >> app\ai-assistant\page.tsx
echo       ^<div className="max-w-2xl"^> >> app\ai-assistant\page.tsx
echo         ^<div className="bg-gray-800 p-6 rounded-lg"^> >> app\ai-assistant\page.tsx
echo           ^<h3 className="text-lg text-white mb-4"^>Create Your AI Assistant Profile^</h3^> >> app\ai-assistant\page.tsx
echo           ^<form className="space-y-4"^> >> app\ai-assistant\page.tsx
echo             ^<div^> >> app\ai-assistant\page.tsx
echo               ^<label className="block text-gray-300 mb-2"^>Assistant Name^</label^> >> app\ai-assistant\page.tsx
echo               ^<input type="text" className="w-full bg-gray-700 text-white p-2 rounded" placeholder="e.g., Dr. Helper" /^> >> app\ai-assistant\page.tsx
echo             ^</div^> >> app\ai-assistant\page.tsx
echo             ^<div^> >> app\ai-assistant\page.tsx
echo               ^<label className="block text-gray-300 mb-2"^>Therapeutic Approach^</label^> >> app\ai-assistant\page.tsx
echo               ^<select className="w-full bg-gray-700 text-white p-2 rounded"^> >> app\ai-assistant\page.tsx
echo                 ^<option^>Cognitive Behavioral^</option^> >> app\ai-assistant\page.tsx
echo                 ^<option^>Psychodynamic^</option^> >> app\ai-assistant\page.tsx
echo                 ^<option^>Humanistic^</option^> >> app\ai-assistant\page.tsx
echo               ^</select^> >> app\ai-assistant\page.tsx
echo             ^</div^> >> app\ai-assistant\page.tsx
echo             ^<div^> >> app\ai-assistant\page.tsx
echo               ^<label className="block text-gray-300 mb-2"^>Specializations^</label^> >> app\ai-assistant\page.tsx
echo               ^<div className="space-y-2"^> >> app\ai-assistant\page.tsx
echo                 ^<label className="flex items-center space-x-2"^> >> app\ai-assistant\page.tsx
echo                   ^<input type="checkbox" /^> >> app\ai-assistant\page.tsx
echo                   ^<span className="text-gray-300"^>Anxiety ^& Depression^</span^> >> app\ai-assistant\page.tsx
echo                 ^</label^> >> app\ai-assistant\page.tsx
echo                 ^<label className="flex items-center space-x-2"^> >> app\ai-assistant\page.tsx
echo                   ^<input type="checkbox" /^> >> app\ai-assistant\page.tsx
echo                   ^<span className="text-gray-300"^>Trauma^</span^> >> app\ai-assistant\page.tsx
echo                 ^</label^> >> app\ai-assistant\page.tsx
echo               ^</div^> >> app\ai-assistant\page.tsx
echo             ^</div^> >> app\ai-assistant\page.tsx
echo             ^<button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"^>Create Assistant Profile^</button^> >> app\ai-assistant\page.tsx
echo           ^</form^> >> app\ai-assistant\page.tsx
echo         ^</div^> >> app\ai-assistant\page.tsx
echo       ^</div^> >> app\ai-assistant\page.tsx
echo     ^</div^> >> app\ai-assistant\page.tsx
echo   ) >> app\ai-assistant\page.tsx
echo } >> app\ai-assistant\page.tsx

:: Home Page with blog posts
echo 'use client' > app\page.tsx
echo. >> app\page.tsx
echo export default function HomePage() { >> app\page.tsx
echo   return ( >> app\page.tsx
echo     ^<div className="p-6"^> >> app\page.tsx
echo       ^<h2 className="text-2xl text-white mb-6"^>Latest Updates^</h2^> >> app\page.tsx
echo       ^<div className="grid grid-cols-2 gap-6"^> >> app\page.tsx
echo         ^<div className="bg-gray-800 p-6 rounded-lg"^> >> app\page.tsx
echo           ^<h3 className="text-xl text-white mb-4"^>AI shown to be more reliable than doctors^</h3^> >> app\page.tsx
echo           ^<p className="text-gray-300 mb-4"^>Recent studies have demonstrated that AI-powered analysis of therapy sessions provides more consistent and accurate insights compared to traditional methods...^</p^> >> app\page.tsx
echo           ^<a href="#" className="text-blue-400 hover:underline"^>Read more^</a^> >> app\page.tsx
echo         ^</div^> >> app\page.tsx
echo         ^<div className="bg-gray-800 p-6 rounded-lg"^> >> app\page.tsx
echo           ^<h3 className="text-xl text-white mb-4"^>How to ensure reliability with your AI Assistant^</h3^> >> app\page.tsx
echo           ^<p className="text-gray-300 mb-4"^>Best practices for configuring and working with your AI therapy assistant to maximize effectiveness and maintain high standards of care...^</p^> >> app\page.tsx
echo           ^<a href="#" className="text-blue-400 hover:underline"^>Read more^</a^> >> app\page.tsx
echo         ^</div^> >> app\page.tsx
echo       ^</div^> >> app\page.tsx
echo     ^</div^> >> app\page.tsx
echo   ) >> app\page.tsx
echo } >> app\page.tsx

echo Updated UI mockups created successfully! 