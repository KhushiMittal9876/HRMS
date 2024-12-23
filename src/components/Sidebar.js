import React from "react";
import { NavLink } from "react-router-dom";
import { FiHome, FiUser, FiCalendar, FiLogOut } from "react-icons/fi";
import { LuMessageSquare } from "react-icons/lu";
import { FaClockRotateLeft } from "react-icons/fa6";
import { GrActions } from "react-icons/gr";

const Sidebar = () => {
  const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: <FiHome /> },
    { name: "Attendance", path: "/attendance", icon: <FiCalendar /> },
    { name: "Leave Requests", path: "/leave-management", icon: <FaClockRotateLeft /> },
    {
      name: "Employee Directory",
      path: "/employee-directory",
      icon: <FiUser />,
    },{
      name: "Messages",
      path: "/",
      icon: <LuMessageSquare />,
    },{
      name: "Theme",
      path: "/Addtheme",
      icon: <GrActions />,
    }
  ];

  return (
    <div className="relative w-64 h-full bg-base-300 shadow-md ">
      <h2 className="flex text-3xl font-bold p-6  justify-start italic ">
        HRM System
      </h2>
      <br />
      <ul className="space-y-4 my-4">
        {menuItems.map((item) => (
          <li key={item.name}>
            <NavLink
              to={item.path}
              className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-600  hover:text-white"
            >
              {item.icon}
              <span className="ml-2">{item.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>

      <button className="absolute flex w-5/6 bottom-2 font-bold py-4 text-xl items-center justify-end text-red-600 hover:text-red-800 ">
        <FiLogOut className="text-lg mr-1" />
        Logout
      </button>
    </div>

    
  );
};

export default Sidebar;
