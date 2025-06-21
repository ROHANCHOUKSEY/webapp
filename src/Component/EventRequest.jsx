import {
  ChevronUp,
  CircleChevronDown,
  CircleChevronUp,
  Eye,
  MoveLeft,
} from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";

const EventRequest = () => {
  const Eventobj = [
    {
      eyeIcon: <Eye />,
      EventName: "Filled Name",
      EventStart: "Jan 12, 2024",
      EventEnd: "Jan 14, 2024",
      Clientname: "Muhammad Asad",
      ContactInfo: "+1 234 566 7890",
      venue: "Lorem Ipsum Dolor Sit Amet",
    },
    {
      eyeIcon: <Eye />,
      EventName: "Filled Name",
      EventStart: "Jan 12, 2024",
      EventEnd: "Jan 14, 2024",
      Clientname: "Muhammad Asad",
      ContactInfo: "+1 234 566 7890",
      venue: "Lorem Ipsum Dolor Sit Amet",
    },
    {
      eyeIcon: <Eye />,
      EventName: "Filled Name",
      EventStart: "Jan 12, 2024",
      EventEnd: "Jan 14, 2024",
      Clientname: "Muhammad Asad",
      ContactInfo: "+1 234 566 7890",
      venue: "Lorem Ipsum Dolor Sit Amet",
    },
    {
      eyeIcon: <Eye />,
      EventName: "Filled Name",
      EventStart: "Jan 12, 2024",
      EventEnd: "Jan 14, 2024",
      Clientname: "Muhammad Asad",
      ContactInfo: "+1 234 566 7890",
      venue: "Lorem Ipsum Dolor Sit Amet",
    },
    {
      eyeIcon: <Eye />,
      EventName: "Filled Name",
      EventStart: "Jan 12, 2024",
      EventEnd: "Jan 14, 2024",
      Clientname: "Muhammad Asad",
      ContactInfo: "+1 234 566 7890",
      venue: "Lorem Ipsum Dolor Sit Amet",
    },
    {
      eyeIcon: <Eye />,
      EventName: "Filled Name",
      EventStart: "Jan 12, 2024",
      EventEnd: "Jan 14, 2024",
      Clientname: "Muhammad Asad",
      ContactInfo: "+1 234 566 7890",
      venue: "Lorem Ipsum Dolor Sit Amet",
    },
    {
      eyeIcon: <Eye />,
      EventName: "Filled Name",
      EventStart: "Jan 12, 2024",
      EventEnd: "Jan 14, 2024",
      Clientname: "Muhammad Asad",
      ContactInfo: "+1 234 566 7890",
      venue: "Lorem Ipsum Dolor Sit Amet",
    },
    {
      eyeIcon: <Eye />,
      EventName: "Filled Name",
      EventStart: "Jan 12, 2024",
      EventEnd: "Jan 14, 2024",
      Clientname: "Muhammad Asad",
      ContactInfo: "+1 234 566 7890",
      venue: "Lorem Ipsum Dolor Sit Amet",
    },
    {
      eyeIcon: <Eye />,
      EventName: "Filled Name",
      EventStart: "Jan 12, 2024",
      EventEnd: "Jan 14, 2024",
      Clientname: "Muhammad Asad",
      ContactInfo: "+1 234 566 7890",
      venue: "Lorem Ipsum Dolor Sit Amet",
    },
    {
      eyeIcon: <Eye />,
      EventName: "Filled Name",
      EventStart: "Jan 12, 2024",
      EventEnd: "Jan 14, 2024",
      Clientname: "Muhammad Asad",
      ContactInfo: "+1 234 566 7890",
      venue: "Lorem Ipsum Dolor Sit Amet",
    },
    {
      eyeIcon: <Eye />,
      EventName: "Filled Name",
      EventStart: "Jan 12, 2024",
      EventEnd: "Jan 14, 2024",
      Clientname: "Muhammad Asad",
      ContactInfo: "+1 234 566 7890",
      venue: "Lorem Ipsum Dolor Sit Amet",
    },
    {
      eyeIcon: <Eye />,
      EventName: "Filled Name",
      EventStart: "Jan 12, 2024",
      EventEnd: "Jan 14, 2024",
      Clientname: "Muhammad Asad",
      ContactInfo: "+1 234 566 7890",
      venue: "Lorem Ipsum Dolor Sit Amet",
    },
    {
      eyeIcon: <Eye />,
      EventName: "Filled Name",
      EventStart: "Jan 12, 2024",
      EventEnd: "Jan 14, 2024",
      Clientname: "Muhammad Asad",
      ContactInfo: "+1 234 566 7890",
      venue: "Lorem Ipsum Dolor Sit Amet",
    },
    {
      eyeIcon: <Eye />,
      EventName: "Filled Name",
      EventStart: "Jan 12, 2024",
      EventEnd: "Jan 14, 2024",
      Clientname: "Muhammad Asad",
      ContactInfo: "+1 234 566 7890",
      venue: "Lorem Ipsum Dolor Sit Amet",
    },
  ];

  return (
    <>
      <div className="w-full h-full border-2 border-pink-400  bg-gradient-to-b from-gray-900 to-black rounded-2xl">
        <div className="flex flex-row justify-between p-4">
          <h1 className="text-white text-3xl font-medium">Event Request</h1>
          <div className="flex flex-row items-center gap-2">
            <input
              type="text"
              className="w-50 h-8 border-white text-white border-1 text-sm flex items-center p-2 rounded-sm"
              placeholder="Search Here"
            />
            <div className="w-fit h-8 border-1 bg-gradient-to-b from-pink-500 to-purple-500 border-white text-white p-2 flex items-center">
              +
            </div>
          </div>
        </div>

        <div className="w-full bg-pink-300 text-black text-sm font-medium">
          <div className="grid grid-cols-6 gap-4 px-4 py-2 text-white">
            <div className="flex items-center gap-1">
              <span>Event Name</span>
              <CircleChevronUp size={16} />
            </div>
            <div className="flex items-center gap-1">
              <span>Event Start</span>
            </div>
            <div className="flex items-center gap-1">
              <span>Event End</span>
              <CircleChevronDown size={16} />
            </div>
            <div className="flex items-center gap-1">
              <span>Client Name</span>
              <CircleChevronUp size={16} />
            </div>
            <div className="flex items-center gap-1">
              <span>Contact Info</span>
            </div>
            <div className="flex items-center gap-1">
              <span>Venue</span>
            </div>
          </div>
        </div>

        <div className="text-white">
          {Eventobj.map((event, index) => (
            <div
              key={index}
              className="grid grid-cols-6 gap-4 px-4 py-0.5 items-center border-t border-pink-300 text-sm"
            >
              <div className="flex items-center gap-2">
                <NavLink to="/eventname">{event.eyeIcon}</NavLink>{event.EventName}
              </div>
              <div>{event.EventStart}</div>
              <div>{event.EventEnd}</div>
              <div>{event.Clientname}</div>
              <div>{event.ContactInfo}</div>
              <div>{event.venue}</div>
            </div>
          ))}
        </div>
        
        <div className="flex w-full justify-center text-center bg-gradient-to-b from-purple-950 to-blackx   h-10 rounded-b-2xl">
          <ul className="flex flex-row text-white justify-center items-center gap-5">
            <MoveLeft/>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li className="text-pink-400">4</li>
          </ul>
        </div>

      </div>
    </>
  );
};

export default EventRequest;
