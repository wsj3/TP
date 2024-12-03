'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="w-64 bg-[#1a1f2b] min-h-screen flex flex-col">
      <nav className="flex-1 px-4 pt-4">
        <div className="space-y-2">
          <Link 
            href="/" 
            className={`flex items-center space-x-3 p-2 rounded ${
              pathname === '/' ? 'text-white' : 'text-gray-400 hover:text-white'
            }`}
          >
            <span>🏠</span>
            <span>Home</span>
          </Link>

          <Link 
            href="/calendar" 
            className="flex items-center space-x-3 p-2 text-gray-400 hover:text-white"
          >
            <span>📅</span>
            <span>Calendar</span>
          </Link>

          <Link 
            href="/patients" 
            className="flex items-center space-x-3 p-2 text-gray-400 hover:text-white"
          >
            <span>👥</span>
            <span>Patients</span>
          </Link>

          <Link 
            href="/messages" 
            className="flex items-center space-x-3 p-2 text-gray-400 hover:text-white"
          >
            <span>✉️</span>
            <span>Messages</span>
          </Link>

          <Link 
            href="/billing" 
            className="flex items-center space-x-3 p-2 text-gray-400 hover:text-white"
          >
            <span>💰</span>
            <span>Billing</span>
          </Link>

          <Link 
            href="/sessions" 
            className="flex items-center space-x-3 p-2 text-gray-400 hover:text-white"
          >
            <span>📝</span>
            <span>Client Sessions</span>
          </Link>

          <Link 
            href="/diagnosis" 
            className="flex items-center space-x-3 p-2 text-gray-400 hover:text-white"
          >
            <span>🏥</span>
            <span>Diagnosis</span>
          </Link>

          <Link 
            href="/settings" 
            className="flex items-center space-x-3 p-2 text-gray-400 hover:text-white"
          >
            <span>⚙️</span>
            <span>Settings</span>
          </Link>
        </div>
      </nav>

      <div className="p-4">
        <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          AI Assistant
        </button>
      </div>
    </div>
  )
} 
