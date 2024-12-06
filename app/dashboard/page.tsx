'use client';

<<<<<<< HEAD
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    // Check if user is logged in
    const userData = localStorage.getItem('user');
    if (!userData) {
      router.push('/login');
      return;
    }
    setUser(JSON.parse(userData));
  }, [router]);

  if (!user) return null;

  return (
    <div className="min-h-screen bg-[#1a1f2b] text-white">
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Welcome to your Dashboard</h1>
        <p className="mb-8">You are logged in as {user.firstName} {user.lastName}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Latest Updates</h2>
            <p>AI shown to be more reliable than doctors</p>
            <a href="#" className="text-blue-400 hover:underline mt-2 inline-block">Read more</a>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">How to ensure reliability</h2>
            <p>Best practices for configuring and working with your AI therapy assistant...</p>
            <a href="#" className="text-blue-400 hover:underline mt-2 inline-block">Read more</a>
          </div>
        </div>
      </div>
=======
export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#1a1f2b] text-white p-8">
      <h1 className="text-2xl font-bold mb-4">Welcome to your Dashboard</h1>
      <p>You are successfully logged in!</p>
>>>>>>> 3e1e3fc5cca94898f789ee7132bd9d4121e00d23
    </div>
  );
} 