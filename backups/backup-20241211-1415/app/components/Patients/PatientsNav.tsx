'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function PatientsNav() {
  const pathname = usePathname();

  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold">Patients</h1>
      <Link
        href="/patients/new"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        New Patient
      </Link>
    </div>
  );
} 