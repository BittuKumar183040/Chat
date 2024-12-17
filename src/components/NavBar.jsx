import React from 'react';
import ThemeSwithButton from './ThemeSwithButton';

const NavBar = () => {
  return (
    <div className=" min-h-14 dark:text-white bg-white dark:bg-gray-800 flex justify-between gap-2 p-2 items-center">
      <div className="flex items-center gap-2 cursor-pointer">
        <img className=' h-7' src="./logo.svg" />
        <p className=" font-bold text-blue-700">
          Chat.
          <span className=" text-yellow-400">Peer</span>
        </p>
      </div>
      <li className="flex gap-4 pr-3 w-full justify-end">
        <p className=" cursor-pointer"></p>
        <p className=" cursor-pointer"></p>
        <p
          className=" cursor-pointer p-1 px-5 shadow-sm border bg-gray-100 rounded text-gray-800 
          dark:bg-gray-900 dark:text-white"
        >
          LOGIN
        </p>
      </li>
      <ThemeSwithButton />
    </div>
  );
};

export default NavBar;
