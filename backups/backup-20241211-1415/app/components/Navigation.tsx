'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Navigation() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check if user exists in localStorage
    const user = localStorage.getItem('user');
    setIsLoggedIn(!!user);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    router.push('/login');
  };

  return (
    <nav className="flex items-center justify-between p-4">
      <Link href="/" className="text-xl font-bold text-white">
        Therapist's Friend
      </Link>
      
      <div className="flex gap-4">
        <Link href="/about" className="text-gray-300 hover:text-white">
          About
        </Link>
        <Link href="/help" className="text-gray-300 hover:text-white">
          Help
        </Link>
        
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="text-gray-300 hover:text-white"
          >
            Logout
          </button>
        ) : (
          <>
            <Link
              href="/login"
              className="text-gray-300 hover:text-white"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Sign up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
} 