'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Sidebar() {
  const pathname = usePathname()
  const [isEnabled, setIsEnabled] = useState(true)

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

          <button 
            onClick={() => setIsEnabled(!isEnabled)}
            className={`w-full flex items-center p-2 rounded transition-colors ${
              isEnabled 
                ? 'bg-blue-500 hover:bg-blue-600 text-white' 
                : 'bg-gray-600 hover:bg-gray-700 text-gray-300'
            }`}
          >
            {isEnabled ? 'Disable AI Assistant' : 'Enable AI Assistant'}
          </button>
        </div>
      </nav>
    </div>
  )
} 
