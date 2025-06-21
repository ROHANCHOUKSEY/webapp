import React from "react";
import { Bell, Info } from "lucide-react";
import BitcoinImg from "../img/bitcoin.png"

const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-between px-6 py-3  bg-gradient-to-b from-gray-900 to-black text-white ">
      
      {/* Left - Logo */}
      <div className="flex items-center">
        <img
          src={BitcoinImg} // replace with your original logo later
          alt="Logo"
          className="w-10 h-10 rounded-full border-2 border-pink-500 p-1"
        />
      </div>

      {/* Right - Icons and Profile */}
      <div className="flex items-center gap-4">
        <Info size={18} className="text-white cursor-pointer" />
        <Bell size={18} className="text-white cursor-pointer" />

        {/* User Avatar and Text */}
        <div className="flex items-center gap-2">
          <img
            src="https://i.pravatar.cc/40?img=12" // placeholder avatar
            alt="User"
            className="w-9 h-9 rounded-full border-2 border-pink-500"
          />
          <div className="text-right">
            <p className="text-sm">
              Hi, <span className="text-cyan-300 font-medium">Muhammad Asad</span>
            </p>
            <p className="text-xs text-gray-300">welcome back!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
