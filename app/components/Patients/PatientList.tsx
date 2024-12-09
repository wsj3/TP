'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Patient {
  _id: string;
  name: string;
  email: string;
  phone: string;
  dateOfBirth: string;
}

export default function PatientList() {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch('/api/patients');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        if (data.success) {
          setPatients(data.data);
        } else {
          throw new Error(data.error || 'Failed to fetch patients');
        }
      } catch (err) {
        console.error('Error fetching patients:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch patients');
      } finally {
        setLoading(false);
      }
    };

    fetchPatients();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center p-8">
        <div className="text-gray-400">Loading patients...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center p-8">
        <div className="text-red-500">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="grid gap-4">
      {patients.length === 0 ? (
        <div className="text-center py-8 text-gray-400">
          No patients found. Click "New Patient" to add one.
        </div>
      ) : (
        patients.map((patient) => (
          <Link
            key={patient._id}
            href={`/patients/${patient._id}`}
            className="p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-white">{patient.name}</h3>
                <p className="text-sm text-gray-400">{patient.email}</p>
              </div>
              <div className="text-sm text-gray-400">
                <p>{patient.phone}</p>
                <p>DOB: {new Date(patient.dateOfBirth).toLocaleDateString()}</p>
              </div>
            </div>
          </Link>
        ))
      )}
    </div>
  );
} 