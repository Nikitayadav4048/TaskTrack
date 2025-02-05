
import React from 'react';

import { FaHome, FaHeart, FaCheckCircle } from 'react-icons/fa';
import { GrTask } from "react-icons/gr";
import { RiProgress6Line } from 'react-icons/ri';

const Sidebar = ({ onFilterChange }) => {
  return (
    <div className="bg-gray-800 text-white h-screen w-80 p-8 flex flex-col">
      <div className="flex items-center mb-6 pl-6">
        <GrTask className="text-white text-4xl mr-3" />
        <h1 className="text-3xl font-bold">Tasks</h1>
      </div>
      <ul className="space-y-6 pl-8 pt-8">
        <li className="flex items-center text-lg hover:text-pink-500 cursor-pointer" onClick={() => onFilterChange("all")}>
          <FaHome className="text-2xl mr-2" />
          Home
        </li>
        <li className="flex items-center text-lg hover:text-pink-500 cursor-pointer" onClick={() => onFilterChange("favourite")}>
          <FaHeart className="text-2xl mr-2" />
          Favourite
        </li>
        <li className="flex items-center text-lg hover:text-pink-500 cursor-pointer" onClick={() => onFilterChange("inProgress")}>
          <RiProgress6Line className="text-2xl mr-2" />
          In Progress
        </li>
        <li className="flex items-center text-lg hover:text-pink-500 cursor-pointer" onClick={() => onFilterChange("complete")}>
          <FaCheckCircle className="text-2xl mr-2" />
          Complete
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
