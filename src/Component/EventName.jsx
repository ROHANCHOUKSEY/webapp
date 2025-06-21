import { CircleArrowLeft } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";

const EventName = () => {
  return (
    <div className="w-full h-full border-2 border-pink-400  bg-gradient-to-b from-gray-900 to-black rounded-2xl text-white p-6 space-y-6">

      <div className="flex items-center gap-3">
        <NavLink to="/"><CircleArrowLeft size={30} /></NavLink>
        <h1 className="text-2xl font-semibold">
          Event Name <span className="text-gray-300 text-base font-light">(Venue Details)</span>
        </h1>
      </div>

      <div className="flex gap-4">
        {["Event Details", "Assign Coordinator/Coordinator", "Session Management", "Generate SOW"].map((tab, idx) => (
          <button key={idx} className="px-4 py-2 text-sm bg-gradient-to-b from-gray-900 to-black hover:bg-pink-600 transition rounded-md border border-pink-300">
            {tab}
          </button>
        ))}
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-6">

        <div className="w-full md:w-1/2 space-y-2">
          <h2 className="text-sm font-semibold">Assign Coordinator</h2>
          <select className="w-full px-3 py-2 bg-gradient-to-r from-black to-gray-900 text-white border border-pink-400 rounded-md">
            <option>Search Coordinator</option>
          </select>
          <button className="text-sm text-pink-400 hover:underline">Add New Coordinator</button>
        </div>

        <div className="w-full md:w-1/2 space-y-2">
          <h2 className="text-sm font-semibold">Event Name <span className="font-light text-gray-400">(Venue Here)</span></h2>
          <div className="flex gap-4">
            <div className="flex flex-col w-1/2">
              <label className="text-xs mb-1">Start</label>
              <input
                type="text"
                value="12-12-2023"
                readOnly
                className="px-3 py-2 bg-black border border-pink-400 rounded-md text-white text-sm"
              />
            </div>
            <div className="flex flex-col w-1/2">
              <label className="text-xs mb-1">Ends</label>
              <input
                type="text"
                value="15-12-2023"
                readOnly
                className="px-3 py-2 bg-black border border-pink-400 rounded-md text-white text-sm"
              />
            </div>
          </div>
          <div>
            <label className="text-xs mb-1 block">Venue Address</label>
            <input
              type="text"
              value="Some Location 12,  Name Here, City, State."
              readOnly
              className="w-full px-3 py-2 bg-black border border-pink-400 rounded-md text-white text-sm"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div className="space-y-3">
          {["Meeting Room 1", "Meeting Room 2", "Meeting Room 3", "Meeting Room 4", "Meeting Room 5"].map((room, idx) => (
            <div key={idx} className={`rounded-md border ${idx === 0 ? "bg-pink-400 text-white" : "bg-black border-white"} p-3`}>
              <h3 className="font-semibold">{room} <span className="text-xs">★ 12 Positions</span></h3>
              <p className="text-xs mt-1">Start from 12 Jan, 2023 – Ends at 15 Jan, 2023</p>
            </div>
          ))}
        </div>

        <div className="md:col-span-2 bg-black border border-white rounded-md overflow-x-auto">
          <div className="grid grid-cols-5 text-sm font-semibold text-white px-4 py-2 bg-gray-800 border-b border-gray-600">
            <span>Position</span>
            <span>Time</span>
            <span>Info</span>
            <span>Quantity</span>
            <span>Select Contractor</span>
          </div>
          {[...Array(8)].map((_, idx) => (
            <div key={idx} className="grid grid-cols-5 px-4 py-2 text-sm border-t border-gray-700">
              <span>Camera 1 (Video)</span>
              <span>9 am – 7 pm</span>
              <span><strong>LP</strong> default</span>
              <span>20</span>
              <select className="bg-black border border-white text-white rounded-md px-2 py-1">
                <option>Select Contractor</option>
              </select>
            </div>
          ))}

          <div className="flex justify-center py-4 gap-2 text-white text-xs">
            <button className="w-2 h-2 rounded-full bg-pink-400"></button>
            <button className="w-2 h-2 rounded-full bg-gray-400"></button>
            <button className="w-2 h-2 rounded-full bg-gray-400"></button>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <button className="px-10 py-2 bg-pink-400 hover:bg-pink-600 text-white font-semibold rounded-md shadow-md transition">
          Save Edits
        </button>
      </div>
    </div>
  );
};

export default EventName;
