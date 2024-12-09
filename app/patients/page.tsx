'use client'

import PatientNav from '../components/Patients/PatientNav';
import PatientList from '../components/Patients/PatientList';

export default function PatientsPage() {
  return (
    <div className="container mx-auto p-6">
      <PatientNav />
      <PatientList />
    </div>
  );
} 
