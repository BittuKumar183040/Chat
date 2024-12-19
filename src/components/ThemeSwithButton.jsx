import React from "react";
import { useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const ThemeSwithButton = () => {
  const [darkMode, setDarkMode] = useState(false);
  const changeMode = () => {
    const parentDiv = document.querySelector("#parentDiv");
    setDarkMode(!darkMode);
    !darkMode
      ? parentDiv.classList.add("dark")
      : parentDiv.classList.remove("dark");
  };
  return (
    <div
      className={`cursor-pointer text-xl p-2 select-none ${darkMode && "dark"} `}
      onClick={changeMode}
    >
      {darkMode ? (
        <MdDarkMode
          className=" rounded-full
        dark:text-white dark:bg-gray-800"
        />
      ) : (
        <MdLightMode />
      )}
    </div>
  );
};

export default ThemeSwithButton;
