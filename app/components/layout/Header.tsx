export default function Header() {
  return (
    <header className="bg-[#1a1f2b] text-white p-4 flex justify-between items-center">
      <div className="flex items-center space-x-3">
        <img 
          src="/logo.png" 
          alt="Therapist's Friend Logo" 
          className="h-8 w-auto"
        />
        <h1 className="text-xl">Therapist's Friend</h1>
      </div>
      <nav className="space-x-4 flex items-center">
        <a href="/about" className="hover:text-gray-300">About</a>
        <a href="/help" className="hover:text-gray-300">Help</a>
        <div className="ml-6 space-x-4">
          <a 
            href="/login" 
            className="text-gray-300 hover:text-white"
          >
            Login
          </a>
          <a 
            href="/signup" 
            className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded"
          >
            Sign up
          </a>
        </div>
      </nav>
    </header>
  )
} 
