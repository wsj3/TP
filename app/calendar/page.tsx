'use client' 
 
import { useState } from 'react' 
 
export default function CalendarPage() { 
  const [viewMode, setViewMode] = useState('month') 
 
  return ( 
    <div className="p-6"> 
      <div className="flex justify-between items-center mb-6"> 
        <h2 className="text-xl text-white">Calendar</h2> 
        <div className="flex space-x-4"> 
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">New Appointment</button> 
        </div> 
      </div> 
 
      <div className="bg-gray-800 rounded-lg p-6"> 
        <div className="flex justify-between items-center mb-4"> 
          <div className="flex bg-gray-700 rounded-lg"> 
            <button onClick={() => setViewMode('month')} className={`px-4 py-2 rounded-lg ${viewMode === 'month' ? 'bg-blue-500 text-white' : 'text-gray-400'}`}>Month</button> 
            <button onClick={() => setViewMode('week')} className={`px-4 py-2 rounded-lg ${viewMode === 'week' ? 'bg-blue-500 text-white' : 'text-gray-400'}`}>Week</button> 
            <button onClick={() => setViewMode('day')} className={`px-4 py-2 rounded-lg ${viewMode === 'day' ? 'bg-blue-500 text-white' : 'text-gray-400'}`}>Day</button> 
          </div> 
          <div className="flex items-center space-x-4"> 
            <button className="text-gray-400 hover:text-white">Previous</button> 
            <span className="text-white">October 2023</span> 
            <button className="text-gray-400 hover:text-white">Next</button> 
          </div> 
        </div> 
 
        <div className="grid grid-cols-7 gap-1"> 
          <div className="text-gray-400 text-sm p-2">Sun</div> 
          <div className="text-gray-400 text-sm p-2">Mon</div> 
          <div className="text-gray-400 text-sm p-2">Tue</div> 
          <div className="text-gray-400 text-sm p-2">Wed</div> 
          <div className="text-gray-400 text-sm p-2">Thu</div> 
          <div className="text-gray-400 text-sm p-2">Fri</div> 
          <div className="text-gray-400 text-sm p-2">Sat</div> 
 
          <div className="bg-gray-700 p-2 min-h-[100px] rounded"> 
            <span className="text-gray-400">1</span> 
            <div className="mt-2"> 
              <div className="bg-blue-500 text-white text-sm p-1 rounded mb-1">9:00 AM - John D.</div> 
            </div> 
          </div> 
        </div> 
      </div> 
    </div> 
  ) 
} 
