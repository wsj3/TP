'use client'

import { useState } from 'react'

export default function TestMongoDB() {
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)
  
  const testConnection = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/mongodb/test')
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json()
      console.log('MongoDB Response:', data)
      setStatus(data.message || 'Connected successfully!')
    } catch (error) {
      console.error('Connection error:', error)
      setStatus('Connection failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <button 
        onClick={testConnection}
        disabled={loading}
        className={`${
          loading ? 'bg-gray-500' : 'bg-blue-500 hover:bg-blue-600'
        } text-white px-4 py-2 rounded transition-colors`}
      >
        {loading ? 'Testing...' : 'Test MongoDB Connection'}
      </button>
      {status && (
        <p className={`mt-2 ${status.includes('failed') ? 'text-red-500' : 'text-green-500'}`}>
          {status}
        </p>
      )}
    </div>
  )
} 