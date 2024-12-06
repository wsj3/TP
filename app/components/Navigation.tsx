'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Navigation() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check if user data exists in localStorage
    const user = localStorage.getItem('user');
    setIsLoggedIn(!!user);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    router.push('/login');
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800">
      <a href="/" className="text-white text-xl font-bold">Therapist's Friend</a>
      <div className="flex gap-4">
        <a href="/about" className="text-gray-300 hover:text-white">About</a>
        <a href="/help" className="text-gray-300 hover:text-white">Help</a>
        {isLoggedIn ? (
          <button 
            onClick={handleLogout}
            className="text-gray-300 hover:text-white cursor-pointer"
          >
            Log out
          </button>
        ) : (
          <>
            <a href="/login" className="text-gray-300 hover:text-white">Login</a>
            <a href="/signup" className="text-gray-300 hover:text-white">Sign up</a>
          </>
        )}
      </div>
    </nav>
  );
} 