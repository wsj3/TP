'use client' 
 
import { useState } from 'react' 
 
export default function SettingsPage() { 
  return ( 
    <div className="p-6"> 
      <h2 className="text-xl text-white mb-6">Settings</h2> 
      <div className="grid grid-cols-2 gap-6"> 
        <div className="bg-gray-800 p-6 rounded-lg"> 
          <h3 className="text-lg text-white mb-4">AI Assistant Configuration</h3> 
          <div className="space-y-4"> 
            <div> 
              <label className="block text-gray-300 mb-2">Analysis Depth</label> 
              <select className="w-full bg-gray-700 text-white p-2 rounded"> 
                <option>Standard Analysis</option> 
                <option>Detailed Analysis</option> 
                <option>Comprehensive Analysis</option> 
              </select> 
            </div> 
            <div> 
              <label className="block text-gray-300 mb-2">AI Language Model</label> 
              <select className="w-full bg-gray-700 text-white p-2 rounded"> 
                <option>GPT-4</option> 
                <option>Claude</option> 
              </select> 
            </div> 
            <div className="flex items-center space-x-2"> 
              <input type="checkbox" className="bg-gray-700" /> 
              <label className="text-gray-300">Enable real-time analysis</label> 
            </div> 
          </div> 
        </div> 
        <div className="bg-gray-800 p-6 rounded-lg"> 
          <h3 className="text-lg text-white mb-4">Practice Settings</h3> 
          <div className="space-y-4"> 
            <div> 
              <label className="block text-gray-300 mb-2">Practice Name</label> 
              <input type="text" className="w-full bg-gray-700 text-white p-2 rounded" /> 
            </div> 
            <div> 
              <label className="block text-gray-300 mb-2">Time Zone</label> 
              <select className="w-full bg-gray-700 text-white p-2 rounded"> 
                <option>Eastern Time</option> 
                <option>Central Time</option> 
                <option>Pacific Time</option> 
              </select> 
            </div> 
          </div> 
        </div> 
      </div> 
    </div> 
  ) 
} 
