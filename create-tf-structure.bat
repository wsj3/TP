@echo off
echo Creating Therapist's Friend directory structure...

:: Create main page directories
mkdir app\calendar
mkdir app\patients
mkdir app\messages
mkdir app\billing
mkdir app\sessions
mkdir app\diagnosis
mkdir app\settings
mkdir app\about
mkdir app\help
mkdir app\login
mkdir app\signup

:: Create component directories for each feature
mkdir app\components\calendar
mkdir app\components\patients
mkdir app\components\messages
mkdir app\components\billing
mkdir app\components\sessions
mkdir app\components\diagnosis
mkdir app\components\auth

:: Create basic page files
echo export default function CalendarPage() { return ^( ^<div className="p-6"^>^<h2 className="text-xl text-white mb-4"^>Calendar^</h2^>^</div^> ^) } > app\calendar\page.tsx
echo export default function PatientsPage() { return ^( ^<div className="p-6"^>^<h2 className="text-xl text-white mb-4"^>Patients^</h2^>^</div^> ^) } > app\patients\page.tsx
echo export default function MessagesPage() { return ^( ^<div className="p-6"^>^<h2 className="text-xl text-white mb-4"^>Messages^</h2^>^</div^> ^) } > app\messages\page.tsx
echo export default function BillingPage() { return ^( ^<div className="p-6"^>^<h2 className="text-xl text-white mb-4"^>Billing^</h2^>^</div^> ^) } > app\billing\page.tsx
echo export default function SessionsPage() { return ^( ^<div className="p-6"^>^<h2 className="text-xl text-white mb-4"^>Client Sessions^</h2^>^</div^> ^) } > app\sessions\page.tsx
echo export default function DiagnosisPage() { return ^( ^<div className="p-6"^>^<h2 className="text-xl text-white mb-4"^>Diagnosis^</h2^>^</div^> ^) } > app\diagnosis\page.tsx
echo export default function SettingsPage() { return ^( ^<div className="p-6"^>^<h2 className="text-xl text-white mb-4"^>Settings^</h2^>^</div^> ^) } > app\settings\page.tsx
echo export default function AboutPage() { return ^( ^<div className="p-6"^>^<h2 className="text-xl text-white mb-4"^>About^</h2^>^</div^> ^) } > app\about\page.tsx
echo export default function HelpPage() { return ^( ^<div className="p-6"^>^<h2 className="text-xl text-white mb-4"^>Help^</h2^>^</div^> ^) } > app\help\page.tsx
echo export default function LoginPage() { return ^( ^<div className="p-6"^>^<h2 className="text-xl text-white mb-4"^>Login^</h2^>^</div^> ^) } > app\login\page.tsx
echo export default function SignupPage() { return ^( ^<div className="p-6"^>^<h2 className="text-xl text-white mb-4"^>Sign Up^</h2^>^</div^> ^) } > app\signup\page.tsx

echo Structure created successfully!