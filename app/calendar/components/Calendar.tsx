'use client';

import { useState, useEffect } from 'react';

interface Appointment {
  _id: string;
  date: string;
  startTime: string;
  endTime: string;
  type: string;
  status: string;
}

export function Calendar() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await fetch('/api/appointments');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setAppointments(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error('Error fetching appointments:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch appointments');
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  if (loading) return <div className="text-white">Loading appointments...</div>;
  if (error) return <div className="text-red-500">Error: {error}</div>;

  return (
    <div className="text-white">
      <h2 className="text-xl mb-4">Appointments ({appointments.length})</h2>
      <div className="space-y-4">
        {appointments.length === 0 ? (
          <div className="text-gray-400">No appointments scheduled</div>
        ) : (
          appointments.map((appointment) => (
            <div key={appointment._id} className="p-4 bg-gray-800 rounded-lg">
              <p>Date: {new Date(appointment.date).toLocaleDateString()}</p>
              <p>Time: {appointment.startTime} - {appointment.endTime}</p>
              <p>Type: {appointment.type}</p>
              <p>Status: {appointment.status}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
} 