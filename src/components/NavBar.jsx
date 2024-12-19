import React from "react";
import ThemeSwithButton from "./ThemeSwithButton";

const NavBar = () => {
  return (
    <div className=" min-h-14 dark:bg-gray-800 p-2 flex justify-between gap-20 md:gap-48 items-center border-b-2 ">
      <div className="flex items-center gap-2 cursor-pointer">
        <img className=" h-7" src="./logo.svg" />
        <p className=" font-bold text-blue-700">
          Chat.
          <span className=" text-yellow-400">Peer</span>
        </p>
      </div>
      <li className=" flex items-center gap-4 text-xs">
        <p className=" cursor-pointer hover:border-b dark:text-white">About</p>
        <p className=" cursor-pointer hover:border-b dark:text-white">Repo</p>
      </li>
      <li className="flex gap-4 pr-3 w-full justify-end items-center">
        <p
          className=" cursor-pointer p-1 px-5 h-fit shadow-md text-xs border bg-gray-100 rounded-full text-gray-800 whitespace-nowrap
          dark:bg-gray-900 dark:text-white"
        >
          Log In
        </p>
        <ThemeSwithButton />
      </li>
    </div>
  );
};

export default NavBar;
