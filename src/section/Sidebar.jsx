import React, { useState } from 'react';
import { AiFillAlert, AiFillCar } from 'react-icons/ai';
import { HiAcademicCap } from 'react-icons/hi2';
import { GoCopilot } from 'react-icons/go';
import { FaBars } from 'react-icons/fa6';

const MenuItem = ({ title, logo }) => {
  return (
    <div
      className=" flex items-center cursor-pointer rounded-l-md gap-2 py-3 px-4 pr-8 
    hover:bg-white dark:hover:bg-gray-900"
    >
      <div className=" text-gray-800 dark:text-white mr-3 ">{logo}</div>
      <p className=" text-md">{title}</p>
    </div>
  );
};
const Sidebar = () => {
  const [isHidden, setIsHidden] = useState(false);
  return (
    <div
      className={`bg-white-400 ${isHidden ? 'w-20' : 'w-52'} h-full transition-all overflow-hidden shadow-md select-none list-none flex flex-col justify-between
      dark:bg-gray-800 dark:text-white
      `}
    >
      <div>
        <div
          className={`flex ${isHidden ? ' justify-center' : 'justify-between'} py-3 px-2 items-center border-b-2`}
        >
          {!isHidden && <p className=" text-sm">Contacts</p>}
          <FaBars
            onClick={() => setIsHidden(!isHidden)}
            className=" p-0.5 cursor-pointer rounded-md"
            size={20}
          />
        </div>
        <div className=" flex flex-col gap-4 pl-2 py-2">
          <MenuItem title={!isHidden ? 'Olivia' : ' '} logo={<AiFillAlert />} />
          <MenuItem title={!isHidden ? 'Amelia' : ' '} logo={<AiFillCar />} />
          <MenuItem title={!isHidden ? 'Emma' : ' '} logo={<HiAcademicCap />} />
          <MenuItem title={!isHidden ? 'Noah' : ' '} logo={<GoCopilot />} />
        </div>
      </div>
      <div className="text-center mb-2 dark:bg-gray-900 dark:text-white bg-white py-2">
        <p className=" text-xs">v1.0</p>
      </div>
    </div>
  );
};

export default Sidebar;
