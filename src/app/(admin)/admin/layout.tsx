
import Sidebar from "@/components/admin/Sidebar";
import Navbar from "@/components/main/Navbar";
import React from "react";


function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen scroll-smooth">
      {/* Sidebar */}
      <div className="w-1/6 bg-gray-200 h-screen overflow-auto">
        <Sidebar />
      </div>
      {/* Main Content */}
      <div className="w-5/6 flex flex-col">
        {/* Navbar */}
        <Navbar />
        {/* Main Content */}
        <div className="flex-1 bg-[#FBFBFB] p-4 overflow-auto">
          {children}
        </div>
      </div>
    </div>
  );
}

export default layout;