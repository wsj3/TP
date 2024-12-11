import PatientForm from '../../components/Patients/PatientForm';  // Relative to app directory

export default function NewPatientPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Add New Patient</h1>
      <PatientForm />
    </div>
  );
} 