'use client' 
 
import { useState } from 'react' 
 
export default function SessionsPage() { 
  const [analysisMode, setAnalysisMode] = useState('live') 
 
  return ( 
    <div className="p-6"> 
      <div className="flex justify-between items-center mb-6"> 
        <h2 className="text-xl text-white">Client Sessions</h2> 
        <div className="flex space-x-4"> 
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Start New Session</button> 
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Import Recording</button> 
        </div> 
      </div> 
 
      <div className="grid grid-cols-3 gap-6"> 
        <div className="col-span-1 bg-gray-800 rounded-lg p-4"> 
          <h3 className="text-white mb-4">Recent Sessions</h3> 
          <div className="space-y-2"> 
            <div className="bg-gray-700 p-3 rounded cursor-pointer hover:bg-gray-600"> 
              <div className="text-white">John Doe - Anxiety Management</div> 
              <div className="text-sm text-green-400 mt-1">AI Analysis Complete</div> 
            </div> 
          </div> 
        </div> 
 
        <div className="col-span-2 bg-gray-800 rounded-lg p-4"> 
          <div className="flex space-x-4 mb-4"> 
            <button className={`px-4 py-2 rounded ${analysisMode === 'live' ? 'bg-blue-500 text-white' : 'text-gray-400'}`}>Live Analysis</button> 
            <button className={`px-4 py-2 rounded ${analysisMode === 'transcript' ? 'bg-blue-500 text-white' : 'text-gray-400'}`}>Transcript</button> 
          </div> 
          <div className="bg-gray-700 p-4 rounded"> 
            <h4 className="text-white mb-4">AI Insights</h4> 
            <div className="space-y-4"> 
              <div className="border-l-4 border-blue-500 pl-3"> 
                <h5 className="text-blue-400">Treatment Progress</h5> 
                <p className="text-gray-300 text-sm">Client shows improved coping mechanisms.</p> 
              </div> 
            </div> 
          </div> 
        </div> 
      </div> 
    </div> 
  ) 
} 
