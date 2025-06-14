'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-100">
      <h1 className="text-5xl font-bold text-red-600">404</h1>
      <p className="text-lg mt-4">Oops! The page you are looking for does not exist.</p>
      <Link
        href="/"
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Go back to dashboard
      </Link>
    </div>
  );
}
