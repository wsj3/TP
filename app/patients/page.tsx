'use client'

import { useState, useEffect } from 'react';
import PatientForm from '../components/PatientForm';

interface Patient {
  _id: string;
  name: string;
  email: string;
  phone: string;
  dateOfBirth: string;
}

export default function PatientsPage() {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [showPatientForm, setShowPatientForm] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPatients = async () => {
    try {
      const response = await fetch('/api/patients');
      if (!response.ok) throw new Error('Failed to fetch patients');
      const data = await response.json();
      setPatients(data);
    } catch (err) {
      setError('Failed to load patients');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  const handleCreatePatient = async (formData: any) => {
    try {
      const response = await fetch('/api/patients', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to create patient');

      setShowPatientForm(false);
      fetchPatients(); // Refresh the list
    } catch (err) {
      console.error('Error creating patient:', err);
      alert('Failed to create patient');
    }
  };

  if (loading) return <div className="text-white">Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-white">Patients</h1>
        <button
          onClick={() => setShowPatientForm(true)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add New Patient
        </button>
      </div>

      <div className="space-y-4">
        {patients.map((patient) => (
          <div key={patient._id} className="p-4 bg-gray-800 rounded-lg">
            <h3 className="text-lg font-semibold text-white">{patient.name}</h3>
            <p className="text-gray-300">{patient.email}</p>
            <p className="text-gray-300">{patient.phone}</p>
            <p className="text-gray-300">
              DOB: {new Date(patient.dateOfBirth).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showPatientForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-gray-800 rounded-lg p-6 max-w-md w-full">
            <h2 className="text-xl font-bold mb-4 text-white">Add New Patient</h2>
            <PatientForm
              onSubmit={handleCreatePatient}
              onCancel={() => setShowPatientForm(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
} 
