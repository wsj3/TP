'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function PatientForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const formData = new FormData(e.currentTarget);
      const data = Object.fromEntries(formData);

      // Get user from localStorage
      const userStr = localStorage.getItem('user');
      if (!userStr) {
        throw new Error('User not logged in');
      }
      const user = JSON.parse(userStr);

      const response = await fetch('/api/patients', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          userId: user._id
        })
      });

      if (!response.ok) {
        throw new Error('Failed to create patient');
      }

      router.push('/patients');
      router.refresh();
    } catch (err) {
      console.error('Error creating patient:', err);
      setError('Failed to create patient. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6 p-6 bg-gray-800 rounded-lg">
      {error && (
        <div className="bg-red-500/10 border border-red-500 text-red-500 p-3 rounded">
          {error}
        </div>
      )}

      <div>
        <label className="block text-gray-300 mb-2">
          Name
        </label>
        <input
          type="text"
          name="name"
          required
          className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-gray-300 mb-2">
          Email
        </label>
        <input
          type="email"
          name="email"
          className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-gray-300 mb-2">
          Phone
        </label>
        <input
          type="tel"
          name="phone"
          className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className={`w-full p-2 rounded text-white ${
          loading 
            ? 'bg-blue-500/50 cursor-not-allowed' 
            : 'bg-blue-500 hover:bg-blue-600'
        }`}
      >
        {loading ? 'Creating...' : 'Create Patient'}
      </button>
    </form>
  );
}