"use client";
// app/layout.js
import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import "../globals.css";

export default function RootLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false); // Manage collapsed state

  // Toggle the collapsed state
  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar with collapse functionality */}
      <Sidebar userRole="super_admin" collapsed={collapsed} toggleCollapse={toggleCollapse} />

      {/* Main content wrapper */}
      <div className={`flex-grow flex flex-col p-8 transition-all duration-300 ${collapsed ? 'ml-[80px]' : 'ml-[250px]'}`}>
        {/* Header */}
        <Header />
        
        {/* Main content area */}
        <main className="flex-grow p-6 mt-4 shadow-sm rounded-lg">
          {children}
        </main>
      </div>
    </div>
  );
}
