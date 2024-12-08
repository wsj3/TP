'use client';

import { useState } from 'react';

interface PatientFormProps {
  onSubmit: (data: any) => void;
  onCancel: () => void;
}

export default function PatientForm({ onSubmit, onCancel }: PatientFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dateOfBirth: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-white mb-2">Name</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"
          required
        />
      </div>

      <div>
        <label className="block text-white mb-2">Email</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"
          required
        />
      </div>

      <div>
        <label className="block text-white mb-2">Phone</label>
        <input
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"
          required
        />
      </div>

      <div>
        <label className="block text-white mb-2">Date of Birth</label>
        <input
          type="date"
          value={formData.dateOfBirth}
          onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
          className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"
          required
        />
      </div>

      <div className="flex justify-end space-x-3 mt-6">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-white bg-gray-600 rounded hover:bg-gray-700"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Create Patient
        </button>
      </div>
    </form>
  );
} 