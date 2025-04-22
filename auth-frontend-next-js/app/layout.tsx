// app/layout.tsx
import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Auth Demo',
  description: 'Next.js App Router + Express/Mongo Auth',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans p-8 bg-gray-50 text-gray-900">
      <nav className="mb-8 flex space-x-4">
        <Link href="/" className="text-blue-500 hover:underline">
        Login
        </Link>
        <Link href="/signup" className="text-blue-500 hover:underline">
        Signup
        </Link>
        <Link href="/dashboard" className="text-blue-500 hover:underline">
        Dashboard
        </Link>
      </nav>
      {children}
      </body>
    </html>
  );
}
