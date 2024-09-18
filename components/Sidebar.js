// components/Sidebar.js
import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-white h-screen p-4">
      <div className="text-center mb-8">
        <h2 className="text-xl font-bold">AR-Store Dashboard</h2>
      </div>
      <nav>
        <ul>
          <li className="mb-4">
            <Link
              href="/dashboard"
              className="block p-2 hover:bg-gray-700 rounded"
            >
              Dashboard
            </Link>
          </li>
          <li className="mb-4">
            <Link
              href="/products"
              className="block p-2 hover:bg-gray-700 rounded"
            >
              Products
            </Link>
          </li>
          <li className="mb-4">
            <Link
              href="/analytics"
              className="block p-2 hover:bg-gray-700 rounded"
            >
              Analytics
            </Link>
          </li>
          <li className="mb-4">
            <Link
              href="/settings"
              className="block p-2 hover:bg-gray-700 rounded"
            >
              Settings
            </Link>
          </li>
          <li className="mb-4">
            <Link
              href="/logout"
              className="block p-2 hover:bg-gray-700 rounded"
            >
              Logout
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
