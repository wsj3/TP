'use client'

import { useState } from 'react'
import { loadGuidance } from './actions/guidance'

type SheetData = {
  name: string
  data: string[][]
}

export default function HomePage() {
  const [loading, setLoading] = useState(false)
  const [sheets, setSheets] = useState<SheetData[]>([])
  const [error, setError] = useState<string | null>(null)

  const handleShowGuidance = async () => {
    setLoading(true)
    setError(null)
    
    try {
      const result = await loadGuidance()
      if (result.success) {
        setSheets(result.data)
      } else {
        setError(result.error)
      }
    } catch (err) {
      setError('Failed to load guidance')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-xl text-white mb-2">Assistant Guidance</h2>
        <button 
          onClick={handleShowGuidance}
          disabled={loading}
          className={`bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition-colors
            ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {loading ? 'Loading...' : 'Show Guidance'}
        </button>
      </div>

      {error && (
        <div className="text-red-500 mt-4 p-4 bg-red-100 rounded">
          {error}
        </div>
      )}

      {sheets.length > 0 && (
        <div className="mt-6 space-y-8">
          {sheets.map((sheet, sheetIndex) => (
            <div key={sheetIndex} className="bg-gray-800 rounded-lg overflow-hidden">
              <h3 className="text-lg font-semibold text-white p-4 bg-gray-700">
                {sheet.name}
              </h3>
              <div className="p-4 overflow-x-auto">
                <table className="w-full border-collapse">
                  <tbody>
                    {sheet.data.map((row, rowIndex) => (
                      <tr key={rowIndex} className={rowIndex === 0 ? 'bg-gray-700' : ''}>
                        {row.map((cell, cellIndex) => (
                          <td 
                            key={cellIndex}
                            className={`
                              border border-gray-600 p-3
                              ${rowIndex === 0 ? 'font-semibold text-white' : 'text-gray-300'}
                            `}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
} 
