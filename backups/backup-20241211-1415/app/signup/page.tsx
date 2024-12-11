'use client' 

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SignupPage() { 
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error);
        return;
      }

      router.push('/login');
    } catch (err) {
      setError('Failed to create account');
    }
  };

  return ( 
    <div className="min-h-screen flex items-center justify-center bg-[#1a1f2b]"> 
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-[480px]"> 
        <h2 className="text-2xl text-white mb-6 text-center">Create Your Account</h2> 
        <form onSubmit={handleSubmit} className="space-y-4"> 
          <div className="grid grid-cols-2 gap-4"> 
            <div> 
              <label className="block text-gray-300 mb-2">First Name</label> 
              <input 
                type="text" 
                value={formData.firstName} 
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} 
                className="w-full bg-gray-700 text-white p-2 rounded" 
                required 
              /> 
            </div> 
            <div> 
              <label className="block text-gray-300 mb-2">Last Name</label> 
              <input 
                type="text" 
                value={formData.lastName} 
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} 
                className="w-full bg-gray-700 text-white p-2 rounded" 
                required 
              /> 
            </div> 
          </div> 
          <div> 
            <label className="block text-gray-300 mb-2">Email</label> 
            <input 
              type="email" 
              value={formData.email} 
              onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
              className="w-full bg-gray-700 text-white p-2 rounded" 
              required 
            /> 
          </div> 
          <div> 
            <label className="block text-gray-300 mb-2">Password</label> 
            <input 
              type="password" 
              value={formData.password} 
              onChange={(e) => setFormData({ ...formData, password: e.target.value })} 
              className="w-full bg-gray-700 text-white p-2 rounded" 
              required 
            /> 
          </div> 
          <div className="flex items-center space-x-2"> 
            <input type="checkbox" required /> 
            <label className="text-gray-300 text-sm"> 
              I agree to the <a href="/terms" className="text-blue-400 hover:underline">Terms of Service</a> and{' '} 
              <a href="/privacy" className="text-blue-400 hover:underline">Privacy Policy</a> 
            </label> 
          </div> 
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Create Account</button> 
        </form> 
        {error && <div className="text-red-500 mt-4 text-center">{error}</div>} 
        <p className="text-gray-400 text-sm mt-4 text-center">Already have an account? <a href="/login" className="text-blue-400 hover:underline">Login</a></p> 
      </div> 
    </div> 
  ) 
} 
