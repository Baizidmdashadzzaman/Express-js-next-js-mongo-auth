// app/page.tsx
'use client';

import { useState, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';
import api from '../lib/api';

export default function LoginPage() {
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const [error, setError]       = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = async () => {
    try {
      await api.post('/login', { email, password });
      router.push('/dashboard');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="max-w-sm mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
      <input
      type="email"
      placeholder="Email"
      value={email}
      onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
      className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
      type="password"
      placeholder="Password"
      value={password}
      onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
      className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
      onClick={handleLogin}
      className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
      >
      Login
      </button>
    </div>
  );
}
