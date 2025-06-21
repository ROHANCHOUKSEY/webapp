import React from "react";
import Sidebar from "./Component/Sidebar";
import Navbar from "./Component/Nabar";
import { Outlet } from "react-router-dom";

const Content = () => {
  return (
    <div className="w-full  flex flex-col">
      
      {/* Navbar at the top */}
      <div className="w-full">
        <Navbar />
      </div>

      {/* Main content: Sidebar + Outlet */}
      <div className="flex items-center   flex-row  flex-1 overflow-hidden">
        
        {/* Sidebar on the left */}
        <div className="w-64 border-r h-[94%] border-pink-500">
          <Sidebar />
        </div>

        {/* Routed page content on the right */}
        <div className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </div>
        
      </div>
    </div>
  );
};

export default Content;
