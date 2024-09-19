// app/(root)/not-found.js
import Link from 'next/link';
import "../../globals.css";


export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] dark:bg-gray-900">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">404</h1>
        <p className="text-2xl text-gray-700 dark:text-gray-300 mb-6">Oops! We couldn’t find what you’re looking for in our AR space.</p>
        
        {/* AR-Themed Placeholder Image */}
        <img
          src="/icon.webp"
          alt="AR Not Found"
          className="w-64 h-64 mx-auto mb-6"
        />

        {/* Button to redirect back to the dashboard */}
        <Link href="/dashboard">
          <p className="px-6 py-3 bg-blue-600 text-white text-lg rounded-lg shadow-md hover:bg-blue-700 focus:outline-none">
            Return to Dashboard
          </p>
        </Link>
      </div>
    </div>
  );
}
