// components/Header.js
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-900 text-white p-4">
      <div className="flex justify-between items-center">
        {/* Logo or App Name */}
        <div className="text-xl font-bold">
          <Link href="/dashboard">AR-Store</Link>
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/dashboard" className="hover:text-gray-400">
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-gray-400">
                Products
              </Link>
            </li>
            <li>
              <Link href="/analytics" className="hover:text-gray-400">
                Analytics
              </Link>
            </li>
            <li>
              <Link href="/settings" className="hover:text-gray-400">
                Settings
              </Link>
            </li>
            <li>
              <Link href="/logout" className="hover:text-gray-400">
                Logout
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
