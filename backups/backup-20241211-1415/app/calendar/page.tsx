'use client' 
 
import { useState, useEffect } from 'react' 
 
export default function CalendarPage() { 
  const [viewMode, setViewMode] = useState('month') 
  const [currentDate, setCurrentDate] = useState(new Date()) 
  const [showNewAppointment, setShowNewAppointment] = useState(false) 
  const [patients, setPatients] = useState([]) 
  const [appointments, setAppointments] = useState([]) 
  const [formData, setFormData] = useState({ 
    patientId: '', 
    date: '', 
    startTime: '', 
    endTime: '', 
    type: 'followup', 
    status: 'scheduled' 
  }) 
 
  const fetchAppointments = async () => { 
    try { 
      const response = await fetch('/api/appointments') 
      const data = await response.json() 
      if (data.success) { 
        setAppointments(data.data) 
      } 
    } catch (error) { 
      console.error('Error fetching appointments:', error) 
    } 
  } 
 
  useEffect(() => { 
    const fetchPatients = async () => { 
      try { 
        const response = await fetch('/api/patients') 
        const data = await response.json() 
        if (data.success) { 
          setPatients(data.data) 
        } 
      } catch (error) { 
        console.error('Error fetching patients:', error) 
      } 
    } 
 
    fetchPatients() 
    fetchAppointments() 
  }, []) 
 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => { 
    const { name, value } = e.target 
    setFormData(prev => ({ ...prev, [name]: value })) 
  } 
 
  const handleSubmit = async (e: React.FormEvent) => { 
    e.preventDefault() 
    try { 
      const response = await fetch('/api/appointments', { 
        method: 'POST', 
        headers: { 
          'Content-Type': 'application/json' 
        }, 
        body: JSON.stringify(formData) 
      }) 
 
      if (!response.ok) { 
        throw new Error(`HTTP error! status: ${response.status}`) 
      } 
 
      const result = await response.json() 
      if (result.success) { 
        setShowNewAppointment(false) 
        setFormData({ 
          patientId: '', 
          date: '', 
          startTime: '', 
          endTime: '', 
          type: 'followup', 
          status: 'scheduled' 
        }) 
        fetchAppointments() 
      } 
    } catch (error) { 
      console.error('Error creating appointment:', error) 
    } 
  } 
 
  const generateCalendarDays = () => { 
    const year = currentDate.getFullYear() 
    const month = currentDate.getMonth() 
    const firstDay = new Date(year, month, 1) 
    const lastDay = new Date(year, month + 1, 0) 
    const daysInMonth = lastDay.getDate() 
    const startingDay = firstDay.getDay() 
 
    const days = [] 
    
    // Add empty cells for days before the first of the month 
    for (let i = 0; i < startingDay; i++) { 
      days.push(null) 
    } 
    
    // Add the actual days 
    for (let i = 1; i <= daysInMonth; i++) { 
      days.push(i) 
    } 
    
    return days 
  } 
 
  const formatMonth = () => { 
    return currentDate.toLocaleString('default', { month: 'long', year: 'numeric' }) 
  } 
 
  return ( 
    <div className="p-6"> 
      <div className="flex justify-between items-center mb-6"> 
        <h2 className="text-xl text-white">Calendar</h2> 
        <button 
          onClick={() => setShowNewAppointment(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          New Appointment
        </button>
      </div> 
 
      <div className="bg-gray-800 rounded-lg p-6"> 
        <div className="flex justify-between items-center mb-4"> 
          <div className="flex bg-gray-700 rounded-lg"> 
            <button onClick={() => setViewMode('month')} className={`px-4 py-2 rounded-lg ${viewMode === 'month' ? 'bg-blue-500 text-white' : 'text-gray-400'}`}>Month</button> 
            <button onClick={() => setViewMode('week')} className={`px-4 py-2 rounded-lg ${viewMode === 'week' ? 'bg-blue-500 text-white' : 'text-gray-400'}`}>Week</button> 
            <button onClick={() => setViewMode('day')} className={`px-4 py-2 rounded-lg ${viewMode === 'day' ? 'bg-blue-500 text-white' : 'text-gray-400'}`}>Day</button> 
          </div> 
          <div className="flex items-center space-x-4"> 
            <button 
              onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)))}
              className="text-gray-400 hover:text-white"
            >
              Previous
            </button> 
            <span className="text-white">{formatMonth()}</span> 
            <button 
              onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)))}
              className="text-gray-400 hover:text-white"
            >
              Next
            </button> 
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
 
          {generateCalendarDays().map((day, index) => ( 
            <div key={index} className="bg-gray-700 p-2 min-h-[100px] rounded"> 
              {day && ( 
                <> 
                  <span className="text-gray-400">{day}</span> 
                  <div className="mt-2"> 
                    {appointments 
                      .filter(apt => { 
                        const aptDate = new Date(apt.date) 
                        return aptDate.getDate() === day && 
                               aptDate.getMonth() === currentDate.getMonth() && 
                               aptDate.getFullYear() === currentDate.getFullYear() 
                      }) 
                      .map((apt: any) => ( 
                        <div key={apt._id} className="bg-blue-500 text-white text-sm p-1 rounded mb-1"> 
                          {apt.startTime} - {apt.patientId?.name || 'Patient'} 
                        </div> 
                      ))} 
                  </div> 
                </> 
              )} 
            </div> 
          ))} 
        </div> 
      </div> 
 
      {showNewAppointment && ( 
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"> 
          <div className="bg-gray-800 p-6 rounded-lg w-[400px]"> 
            <h3 className="text-white mb-4">New Appointment</h3> 
            <form onSubmit={handleSubmit} className="space-y-4"> 
              <select 
                name="patientId" 
                value={formData.patientId}
                onChange={handleChange} 
                required 
                className="w-full p-2 rounded bg-gray-700 text-white"
              > 
                <option value="">Select Patient</option> 
                {patients.map((patient: any) => ( 
                  <option key={patient._id} value={patient._id}> 
                    {patient.name} 
                  </option> 
                ))} 
              </select> 
              <input 
                type="date" 
                name="date"
                value={formData.date}
                onChange={handleChange} 
                required 
                className="w-full p-2 rounded bg-gray-700 text-white"
              /> 
              <input 
                type="time" 
                name="startTime"
                value={formData.startTime}
                onChange={handleChange} 
                required 
                className="w-full p-2 rounded bg-gray-700 text-white"
              /> 
              <input 
                type="time" 
                name="endTime"
                value={formData.endTime}
                onChange={handleChange} 
                required 
                className="w-full p-2 rounded bg-gray-700 text-white"
              /> 
              <select 
                name="type"
                value={formData.type}
                onChange={handleChange} 
                className="w-full p-2 rounded bg-gray-700 text-white"
              > 
                <option value="initial">Initial</option> 
                <option value="followup">Follow-up</option> 
                <option value="emergency">Emergency</option> 
              </select> 
              <div className="flex justify-end space-x-2 mt-4"> 
                <button 
                  type="button"
                  onClick={() => setShowNewAppointment(false)}
                  className="px-4 py-2 text-gray-400 hover:text-white"
                >
                  Cancel
                </button> 
                <button 
                  type="submit" 
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Save
                </button> 
              </div> 
            </form> 
          </div> 
        </div> 
      )} 
    </div> 
  ) 
} 
