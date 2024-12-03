export default function Header() {
  return (
    <header className="bg-[#1a1f2b] text-white p-4 flex justify-between items-center">
      <h1 className="text-xl">Therapist's Friend</h1>
      <nav className="space-x-4">
        <a href="/about" className="hover:text-gray-300">About</a>
        <a href="/help" className="hover:text-gray-300">Help</a>
      </nav>
    </header>
  )
} 
