// app/dashboard/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import api from '../../lib/api';

interface User {
  _id: string;
  email: string;
}

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    api.get<User>('/dashboard')
      .then(res => setUser(res.data))
      .catch(() => router.replace('/'));
  }, [router]);

  const handleLogout = async () => {
    await api.post('/logout');
    router.replace('/');
  };

  if (!user) return <p>Loading…</p>;

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <p className="text-gray-700">
        Welcome, <strong className="text-blue-600">{user.email}</strong>!
      </p>
      <button
        onClick={handleLogout}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Logout
      </button>
    </div>
  );
}
