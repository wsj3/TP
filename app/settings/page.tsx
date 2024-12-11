'use client' 
 
import { useState, useEffect } from 'react' 
import { loadGuidance } from '@/app/actions/guidance'

interface GuidanceData {
  businessRules?: any[]
  structuredGuidance?: any[]
  bestPractices?: any[]
  medicalDatabases?: any[]
}

export default function SettingsPage() { 
  const [aiSettings, setAiSettings] = useState({ 
    model: 'gpt-4', 
    temperature: 0.7, 
    maxTokens: 2000, 
    communicationModes: {
      chat: true,
      voice: false,
      video: false
    }
  }) 
  const [guidanceData, setGuidanceData] = useState<GuidanceData>({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchGuidanceData()
  }, [])

  const fetchGuidanceData = async () => {
    try {
      setLoading(true)
      const result = await loadGuidance()
      if (result.success) {
        setGuidanceData(result.data)
      } else {
        setError('Failed to load guidance data')
      }
    } catch (err) {
      setError('Error loading guidance data')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleCommunicationModeChange = (mode: 'chat' | 'voice' | 'video') => {
    setAiSettings({
      ...aiSettings,
      communicationModes: {
        ...aiSettings.communicationModes,
        [mode]: !aiSettings.communicationModes[mode]
      }
    })
  }

  return ( 
    <div className="p-6"> 
      <h2 className="text-xl text-white mb-6">Settings</h2> 
      
      <div className="bg-gray-800 p-6 rounded-lg mb-6"> 
        <h3 className="text-lg text-white mb-4">AI Assistant Settings</h3> 
        <div className="space-y-4"> 
          <div> 
            <label className="block text-gray-300 mb-3">
              How your Assistant should communicate:
            </label>
            <div className="space-y-2"> 
              <label className="flex items-center space-x-2 text-gray-300"> 
                <input 
                  type="checkbox" 
                  checked={aiSettings.communicationModes.chat} 
                  onChange={() => handleCommunicationModeChange('chat')} 
                  className="w-4 h-4 text-blue-500 focus:ring-blue-500 bg-gray-700 border-gray-600 rounded" 
                /> 
                <span>Chat</span> 
              </label> 
              
              <label className="flex items-center space-x-2 text-gray-300"> 
                <input 
                  type="checkbox" 
                  checked={aiSettings.communicationModes.voice} 
                  onChange={() => handleCommunicationModeChange('voice')} 
                  className="w-4 h-4 text-blue-500 focus:ring-blue-500 bg-gray-700 border-gray-600 rounded" 
                /> 
                <span>Voice</span> 
              </label> 
              
              <label className="flex items-center space-x-2 text-gray-300"> 
                <input 
                  type="checkbox" 
                  checked={aiSettings.communicationModes.video} 
                  onChange={() => handleCommunicationModeChange('video')} 
                  className="w-4 h-4 text-blue-500 focus:ring-blue-500 bg-gray-700 border-gray-600 rounded" 
                /> 
                <span>Video Assistant</span> 
              </label> 
            </div> 
          </div> 

          <div className="border-t border-gray-700 my-4"></div>

          <div> 
            <label className="block text-gray-300 mb-2">Model</label> 
            <select 
              className="w-full bg-gray-700 text-white p-2 rounded" 
              value={aiSettings.model} 
              onChange={(e) => setAiSettings({...aiSettings, model: e.target.value})}
            >
              <option value="gpt-4">GPT-4</option>
              <option value="gpt-3.5-turbo">GPT-3.5 Turbo</option>
            </select>
          </div>

          <div> 
            <label className="block text-gray-300 mb-2">Temperature</label> 
            <input 
              type="range" 
              min="0" 
              max="1" 
              step="0.1" 
              value={aiSettings.temperature} 
              onChange={(e) => setAiSettings({...aiSettings, temperature: parseFloat(e.target.value)})} 
              className="w-full bg-gray-700" 
            /> 
            <div className="text-gray-400 text-sm mt-1"> 
              {aiSettings.temperature} (Lower = more focused, Higher = more creative) 
            </div> 
          </div> 

          <div> 
            <label className="block text-gray-300 mb-2">Max Tokens</label> 
            <input 
              type="number" 
              value={aiSettings.maxTokens} 
              onChange={(e) => setAiSettings({...aiSettings, maxTokens: parseInt(e.target.value)})} 
              className="w-full p-2 rounded bg-gray-700 text-white" 
              min="100" 
              max="4000" 
              step="100" 
            /> 
            <div className="text-gray-400 text-sm mt-1"> 
              Maximum length of AI responses 
            </div> 
          </div> 
        </div> 
      </div> 

      <div className="bg-gray-800 p-6 rounded-lg mb-6"> 
        <h3 className="text-lg text-white mb-4">Assistant Manager</h3> 
        <div className="space-y-4"> 
          {loading ? ( 
            <div className="text-gray-400">Loading guidance data...</div> 
          ) : error ? ( 
            <div className="text-red-500">{error}</div> 
          ) : ( 
            <> 
              <div className="grid grid-cols-2 gap-4"> 
                <div className="bg-gray-700 p-4 rounded"> 
                  <h4 className="text-white mb-2">Business Rules</h4> 
                  <div className="text-gray-400 text-sm"> 
                    {guidanceData.businessRules?.length || 0} rules loaded 
                  </div> 
                </div> 
                <div className="bg-gray-700 p-4 rounded"> 
                  <h4 className="text-white mb-2">Structured Guidance</h4> 
                  <div className="text-gray-400 text-sm"> 
                    {guidanceData.structuredGuidance?.length || 0} items loaded 
                  </div> 
                </div> 
              </div> 
              <button 
                onClick={fetchGuidanceData} 
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" 
              > 
                Refresh Guidance Data 
              </button> 
            </> 
          )} 
        </div> 
      </div> 

      <div className="bg-gray-800 p-6 rounded-lg"> 
        <h3 className="text-lg text-white mb-4">Theme Settings</h3> 
        <div className="space-y-4"> 
          <div> 
            <label className="block text-gray-300 mb-2">Color Theme</label> 
            <select 
              className="w-full bg-gray-700 text-white p-2 rounded" 
              defaultValue="dark" 
            >
              <option value="dark">Dark</option>
              <option value="light">Light</option>
              <option value="system">System</option>
            </select> 
          </div> 
        </div> 
      </div> 

      <div className="mt-6"> 
        <button 
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" 
          onClick={() => console.log('Settings saved:', aiSettings)} 
        >
          Save Settings 
        </button> 
      </div> 
    </div> 
  ) 
} 
