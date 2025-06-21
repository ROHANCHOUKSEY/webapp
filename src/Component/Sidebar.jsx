import { ChevronUp, LogOut } from "lucide-react";
import React from "react";

const Sidebar = () => {
  return (
    <div className="w-64 h-full bg-gradient-to-b from-gray-900 to-black border-2 border-pink-500 rounded-2xl  p-5 flex flex-col justify-between">
      <div className="space-y-6">
        <div>
          <div className="flex justify-between items-center text-pink-400 font-semibold text-sm mb-2 px-2 py-1 border border-pink-400 rounded">
            <span>Events</span>
            <ChevronUp size={16} />
          </div>
          <ul className="ml-4 text-sm text-white space-y-2 relative border-l border-pink-400 pl-4">
            <li className="text-pink-400 border border-pink-400 px-2 py-1 rounded">
              New Requests
            </li>
            <li>Estimate</li>
            <li>Events</li>
            <li>Partial Requests</li>
          </ul>
        </div>

        <div className="text-white space-y-6 text-sm">
          <div>Positions</div>
          <div>Contractors</div>
          <div className="flex justify-between">
            <h1>User</h1>
            <ChevronUp />
          </div>

          <div>
            <div className="flex justify-between items-center text-pink-400 font-semibold mb-2 px-2 py-1 border border-pink-400 rounded">
              <span>Users</span>
              <ChevronUp size={16} />
            </div>
            <ul className="ml-4 space-y-2 relative border-l border-pink-400 pl-4">
              <li>Admins</li>
              <li>Clients</li>
              <li>Coordinators</li>
            </ul>
          </div>

          <div>Profile</div>
        </div>
      </div>

      <div className="flex items-center justify-center bg-black hover:bg-pink-600 transition text-white font-medium text-sm py-2 rounded-xl mt-6 border border-pink-400">
        <LogOut className="mr-2" size={16} />
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Sidebar;
