'use client';

import { useState, useEffect } from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, addHours, parseISO } from 'date-fns';

interface Appointment {
  _id: string;
  patientId: {
    name: string;
    _id: string;
  };
  date: string;
  startTime: string;
  endTime: string;
  type: string;
  status: string;
}

export function Calendar() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Get all dates for the current month
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const monthDays = eachDayOfInterval({ start: monthStart, end: monthEnd });

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await fetch('/api/appointments');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Fetched appointments:', data); // Debug log
        setAppointments(data);
      } catch (err) {
        console.error('Error fetching appointments:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch appointments');
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, [currentMonth]);

  const getAppointmentsForDate = (date: Date) => {
    return appointments.filter(appointment => {
      const appointmentDate = format(parseISO(appointment.date), 'yyyy-MM-dd');
      const currentDate = format(date, 'yyyy-MM-dd');
      return appointmentDate === currentDate;
    });
  };

  if (loading) return <div className="text-white">Loading appointments...</div>;
  if (error) return <div className="text-red-500">Error: {error}</div>;

  return (
    <div className="text-white">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">
          {format(currentMonth, 'MMMM yyyy')}
        </h2>
      </div>

      <div className="grid grid-cols-7 gap-1">
        {/* Week day headers */}
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="p-2 text-center font-bold bg-gray-800">
            {day}
          </div>
        ))}

        {/* Calendar days */}
        {monthDays.map(day => {
          const dayAppointments = getAppointmentsForDate(day);
          return (
            <div
              key={day.toString()}
              className="min-h-[100px] p-2 border border-gray-700 bg-gray-800"
            >
              <div className="font-bold mb-2">{format(day, 'd')}</div>
              <div className="space-y-1">
                {dayAppointments.map(appointment => (
                  <div
                    key={appointment._id}
                    className="text-xs p-1 bg-blue-500 rounded"
                  >
                    <div>{appointment.patientId.name}</div>
                    <div>{`${appointment.startTime} - ${appointment.endTime}`}</div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
} 