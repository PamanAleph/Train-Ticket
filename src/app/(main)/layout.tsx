import Navbar from "@/components/main/Navbar";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col scroll-smooth">
      <Navbar />
      <div className="flex-1 bg-[#FBFBFB]">{children}</div>
    </div>
  );
}

export default layout;
