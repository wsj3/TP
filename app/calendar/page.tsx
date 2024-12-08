'use client' 
 
import { useState } from 'react' 
import { Calendar } from './components/Calendar' 
import AppointmentForm from './components/AppointmentForm' 
 
export default function CalendarPage() { 
  const [showAppointmentForm, setShowAppointmentForm] = useState(false) 
 
  return ( 
    <main className="p-4"> 
      <div className="flex justify-between items-center mb-6"> 
        <h1 className="text-2xl font-bold text-white">Calendar</h1> 
        <button 
          onClick={() => setShowAppointmentForm(true)} 
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors" 
        > 
          New Appointment 
        </button> 
      </div> 
 
      <Calendar /> 
 
      {/* Modal */} 
      {showAppointmentForm && ( 
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"> 
          <div className="bg-gray-800 rounded-lg p-6 max-w-md w-full"> 
            <h2 className="text-xl font-bold mb-4 text-white">Create New Appointment</h2> 
            <AppointmentForm 
              onSubmit={async (data) => { 
                try { 
                  const response = await fetch('/api/appointments', { 
                    method: 'POST', 
                    headers: { 
                      'Content-Type': 'application/json', 
                    }, 
                    body: JSON.stringify(data), 
                  }) 
 
                  if (!response.ok) { 
                    throw new Error('Failed to create appointment') 
                  } 
 
                  setShowAppointmentForm(false) 
                  window.location.reload() 
                } catch (error) { 
                  console.error('Error creating appointment:', error) 
                  alert('Failed to create appointment') 
                } 
              }} 
              onCancel={() => setShowAppointmentForm(false)} 
            /> 
          </div> 
        </div> 
      )} 
    </main> 
  ) 
} 
