'use client' 
 
import { useState, useEffect } from 'react' 
import TestMongoDB from '../../components/TestMongoDB' 
 
export default function SettingsPage() { 
  const [aiSettings, setAiSettings] = useState({ 
    model: 'gpt-4', 
    temperature: 0.7, 
    maxTokens: 2000 
  }) 
  
  const [sheetData, setSheetData] = useState({ 
    isConnected: false, 
    lastSync: null, 
    counts: { 
      businessRules: 0, 
      structuredGuidance: 0, 
      bestPractices: 0, 
      medicalDatabases: 0 
    } 
  }) 
  
  const [loading, setLoading] = useState(false) 
 
  useEffect(() => { 
    console.log('SheetData updated:', sheetData) 
  }, [sheetData]) 
 
  const handleSheetSync = async () => { 
    setLoading(true) 
    try { 
      const response = await fetch('/api/sheets/sync', { 
        method: 'POST', 
        headers: { 
          'Content-Type': 'application/json' 
        } 
      }) 
      
      if (!response.ok) { 
        throw new Error('Failed to sync') 
      } 
 
      const data = await response.json() 
      console.log('Raw API Response:', data) 
 
      const newState = { 
        isConnected: true, 
        lastSync: new Date().toISOString(), 
        counts: { 
          businessRules: Array.isArray(data.businessRules) ? data.businessRules.length : 0, 
          structuredGuidance: Array.isArray(data.structuredGuidance) ? data.structuredGuidance.length : 0, 
          bestPractices: Array.isArray(data.bestPractices) ? data.bestPractices.length : 0, 
          medicalDatabases: Array.isArray(data.medicalDatabases) ? data.medicalDatabases.length : 0 
        } 
      } 
 
      console.log('Setting new state:', newState) 
      setSheetData(newState) 
 
    } catch (error) { 
      console.error('Sync failed:', error) 
      setSheetData(prev => ({ 
        ...prev, 
        isConnected: false, 
        lastSync: new Date().toISOString() 
      })) 
      alert('Failed to sync with Google Sheets') 
    } finally { 
      setLoading(false) 
    } 
  } 
 
  return ( 
    <div className="p-6"> 
      <h2 className="text-xl text-white mb-6">Settings</h2> 
      
      {/* MongoDB Test Section */} 
      <div className="bg-gray-800 p-6 rounded-lg mb-6"> 
        <h3 className="text-lg text-white mb-4">Database Connection</h3> 
        <TestMongoDB /> 
      </div> 
 
      {/* AI Settings Section */} 
      <div className="bg-gray-800 p-6 rounded-lg mb-6"> 
        <h3 className="text-lg text-white mb-4">AI Assistant Settings</h3> 
        <div className="space-y-4"> 
          <div> 
            <label className="block text-gray-300 mb-2">Model</label> 
            <select className="w-full bg-gray-700 text-white p-2 rounded" value={aiSettings.model} onChange={(e) => setAiSettings({...aiSettings, model: e.target.value})}> 
              <option value="gpt-4">GPT-4</option> 
              <option value="gpt-3.5-turbo">GPT-3.5 Turbo</option> 
            </select> 
          </div> 
        </div> 
      </div> 
 
      {/* Assistant Manager Section */} 
      <div className="bg-gray-800 p-6 rounded-lg"> 
        <h3 className="text-lg text-white mb-4">Assistant Manager</h3> 
        <div className="space-y-4"> 
          <div className="flex justify-between items-center mb-4"> 
            <div> 
              <p className="text-gray-300"> 
                Status: {sheetData.isConnected ? 
                  <span className="text-green-500">Connected</span> : 
                  <span className="text-yellow-500">Not Connected</span> 
                } 
              </p> 
              {sheetData.lastSync && ( 
                <p className="text-gray-400 text-sm"> 
                  Last synced: {new Date(sheetData.lastSync).toLocaleString()} 
                </p> 
              )} 
            </div> 
            <button 
              onClick={handleSheetSync} 
              disabled={loading} 
              className={`px-4 py-2 rounded ${loading ? 'bg-gray-600' : 'bg-blue-500 hover:bg-blue-600'} text-white`} 
            > 
              {loading ? 'Syncing...' : 'Sync Now'} 
            </button> 
          </div> 
 
          <div className="grid grid-cols-2 gap-4"> 
            {Object.entries(sheetData.counts).map(([key, count]) => ( 
              <div key={key} className="bg-gray-700 p-4 rounded"> 
                <h4 className="text-white capitalize mb-2"> 
                  {key.replace(/([A-Z])/g, ' $1').trim()} 
                </h4> 
                <p className="text-gray-300"> 
                  Entries: {count} 
                </p> 
              </div> 
            ))} 
          </div> 
        </div> 
      </div> 
    </div> 
  ) 
} 
