import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import { initializeTheme } from '@/utils/theme'; // Import the utility function
import "../globals.css";

export default function RootLayout({ children }) {
  // Initialize the theme when the layout is loaded
  if (typeof window !== 'undefined') {
    initializeTheme();
  }

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar userRole="super_admin" />
      
      <div className="flex-grow flex flex-col ml-[250px] p-8">
        {/* Header */}
        <Header />
        
        {/* Main content area with conditional background */}
        <main className="flex-grow p-6 mt-4 shadow-sm rounded-lg">
          {children}
        </main>
      </div>
    </div>
  );
}
