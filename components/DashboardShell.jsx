"use client";

import Header from "./Header";
import Sidebar from "./Sidebar";

export default function DashboardShell({ children }) {
  return (
    <div className="min-h-screen bg-background lg:flex" dir="rtl">
      <Sidebar />
      <div className="min-w-0 flex-1">
        <Header />
        <main className="mx-auto w-full max-w-[1440px] p-4 pb-24 sm:p-6 sm:pb-24 lg:p-10">
          {children}
        </main>
      </div>
    </div>
  );
}
