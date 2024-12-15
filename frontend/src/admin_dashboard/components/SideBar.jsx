import React, { useState } from "react";
import { FaUsers } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import { BiSolidBookContent } from "react-icons/bi";
const SideBar = () => {
  const [dropDowns, setDropDowns] = useState({});
  const toggleDropdown = (dropdownId) => {
    setDropDowns((prevState) => ({
      ...prevState,
      [dropdownId]: !prevState[dropdownId],
    }));
  };

  return (
    <div className="w-[25%] h- pb-10 bg-themeGreen text-white flex flex-col gap-3">
      <div className="w-full relative flex flex-col items-center justify-center">
        <svg
          className="fill-themeYellow rotate-180 w-full h-[250px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 526.16 123"
        >
          <g>
            <path
              d="M526.24,211.95c0,77.96-0.02,155.92,0.08,233.88c0,3.17-0.29,4.23-3.96,4.22c-172.75-0.12-345.49-0.12-518.24,0
                                    		c-3.67,0-3.96-1.06-3.96-4.23c0.1-78.29,0.08-156.59,0.08-234.88c7.78-21.03,24-30.67,45.27-33.16c4.2-0.49,4.67-2.73,4.73-6.06
                                    		c0.39-22.14,11.45-37.76,30.17-48.43c13.24-7.55,27.66-10.46,42.81-9.64c3.82,0.21,6.11-0.96,7.84-4.54
                                    		c12.26-25.31,31.61-43.43,56.98-55.22c10.88-5.06,22.06-9.46,32.54-15.35c17.31-9.75,33.26-21.04,43.66-38.6c0.33,0,0.67,0,1,0
                                    		c5.68,10.26,13.77,18.33,22.99,25.38c13.75,10.51,28.97,18.42,44.9,24.92c29.09,11.87,51.54,30.88,65.42,59.38
                                    		c1.45,2.98,3.4,4.05,6.67,3.91c8.56-0.36,16.95,0.89,25.16,3.31c27.38,8.06,46.93,30.09,45.2,55.68c-0.25,3.63,1.71,4.76,5.12,5.2
                                    		C502.31,180.5,518.75,190.31,526.24,211.95z"
            ></path>
          </g>
        </svg>
        <img className="absolute top-1" src="/imgs/logo2.png" alt="" />
        <h1 className="text-2xl font-semibold font-themeHeading -translate-y-10 text-white scale-y-125">
          Admin Dashboard
        </h1>
      </div>
      <div className="w-full h-full flex flex-col">
        <div className="flex py-4 border-t border-gray-400 font-themeHeading px-5 items-center justify-between transition-all duration-200 hover:bg-white/35 cursor-pointer">
          <span className=" flex items-center gap-3">
            <FaUsers className="text-xl" />
            <span>Users</span>
          </span>
        </div>
        <div
          onClick={() => toggleDropdown("dropdown-1")}
          className="flex flex-col border-y border-gray-400 "
        >
          <div className="flex items-center py-4 px-5 justify-between transition-all duration-200 hover:bg-white/35 cursor-pointer">
            <span className=" flex items-center gap-3">
              <img src="/imgs/Sorat.png" className="w-6" />
              <span className="font-themeHeading">Add Surah</span>
            </span>
            <span
              className={`${
                dropDowns["dropdown-1"] ? "-rotate-90" : "rotate-0"
              } transition-all duration-700`}
            >
              <IoMdArrowDropdown />
            </span>
          </div>
          <div
            id="dropdown-1"
            className={`bg-[#055c1a] overflow-hidden ${
              dropDowns["dropdown-1"] ? "max-h-svh" : "max-h-0"
            } transition-all duration-700 ease`}
          >
            <div className="flex items-center pl-10 py-4 justify-between transition-all duration-200 hover:bg-white/35 cursor-pointer">
              <span className=" flex items-center gap-3">
                <BiSolidBookContent className="text-xl" />
                <span className="font-themeText">Add Surah</span>
              </span>
            </div>
            <div className="flex items-center pl-10 py-4 justify-between transition-all duration-200 hover:bg-white/35 cursor-pointer">
              <span className=" flex items-center gap-3">
                <BiSolidBookContent className="text-xl" />
                <span className="font-themeText">View Surah</span>
              </span>
            </div>
          </div>
        </div>
        <div
          onClick={() => toggleDropdown("dropdown-2")}
          className="flex flex-col border-y border-gray-400 "
        >
          <div className="flex items-center py-4 px-5 justify-between transition-all duration-200 hover:bg-white/35 cursor-pointer">
            <span className=" flex items-center gap-3">
              <BiSolidBookContent className="text-xl" />
              <span className="font-themeHeading">Add Hadis</span>
            </span>
            <span
              className={`${
                dropDowns["dropdown-2"] ? "-rotate-90" : "rotate-0"
              } transition-all duration-700`}
            >
              <IoMdArrowDropdown />
            </span>
          </div>
          <div
            id="dropdown-2"
            className={`bg-[#055c1a] overflow-hidden ${
              dropDowns["dropdown-2"] ? "max-h-svh" : "max-h-0"
            } transition-all duration-700 ease`}
          >
            <div className="flex items-center pl-10 py-4 justify-between transition-all duration-200 hover:bg-white/35 cursor-pointer">
              <span className=" flex items-center gap-3">
                <BiSolidBookContent className="text-xl" />
                <span className="font-themeText">Add Hadis</span>
              </span>
            </div>
            <div className="flex items-center pl-10 py-4 justify-between transition-all duration-200 hover:bg-white/35 cursor-pointer">
              <span className=" flex items-center gap-3">
                <BiSolidBookContent className="text-xl" />
                <span className="font-themeText">View Hadis</span>
              </span>
            </div>
          </div>
        </div>
        <div
          onClick={() => toggleDropdown("dropdown-4")}
          className="flex flex-col border-y border-gray-400 "
        >
          <div className="flex items-center py-4 px-5 justify-between transition-all duration-200 hover:bg-white/35 cursor-pointer">
            <span className=" flex items-center gap-3">
              <BiSolidBookContent className="text-xl" />
              <span className="font-themeHeading">Add Books</span>
            </span>
            <span
              className={`${
                dropDowns["dropdown-4"] ? "-rotate-90" : "rotate-0"
              } transition-all duration-700`}
            >
              <IoMdArrowDropdown />
            </span>
          </div>
          <div
            id="dropdown-4"
            className={`bg-[#055c1a] overflow-hidden ${
              dropDowns["dropdown-4"] ? "max-h-svh" : "max-h-0"
            } transition-all duration-700 ease`}
          >
            <div className="flex items-center pl-10 py-4 justify-between transition-all duration-200 hover:bg-white/35 cursor-pointer">
              <span className=" flex items-center gap-3">
                <BiSolidBookContent className="text-xl" />
                <span className="font-themeText">Add Books</span>
              </span>
            </div>
            <div className="flex items-center pl-10 py-4 justify-between transition-all duration-200 hover:bg-white/35 cursor-pointer">
              <span className=" flex items-center gap-3">
                <BiSolidBookContent className="text-xl" />
                <span className="font-themeText">View Books</span>
              </span>
            </div>
          </div>
        </div>
        <div
          onClick={() => toggleDropdown("dropdown-3")}
          className="flex flex-col border-y border-gray-400 "
        >
          <div className="flex items-center py-4 px-5 justify-between transition-all duration-200 hover:bg-white/35 cursor-pointer">
            <span className=" flex items-center gap-3">
              <BiSolidBookContent className="text-xl" />
              <span className="font-themeHeading">Add Lectures</span>
            </span>
            <span
              className={`${
                dropDowns["dropdown-3"] ? "-rotate-90" : "rotate-0"
              } transition-all duration-700`}
            >
              <IoMdArrowDropdown />
            </span>
          </div>
          <div
            id="dropdown-3"
            className={`bg-[#055c1a] overflow-hidden ${
              dropDowns["dropdown-3"] ? "max-h-svh" : "max-h-0"
            } transition-all duration-700 ease`}
          >
            <div className="flex items-center pl-10 py-4 justify-between transition-all duration-200 hover:bg-white/35 cursor-pointer">
              <span className=" flex items-center gap-3">
                <BiSolidBookContent className="text-xl" />
                <span className="font-themeText">Add Lectures</span>
              </span>
            </div>
            <div className="flex items-center pl-10 py-4 justify-between transition-all duration-200 hover:bg-white/35 cursor-pointer">
              <span className=" flex items-center gap-3">
                <BiSolidBookContent className="text-xl" />
                <span className="font-themeText">View Lectures</span>
              </span>
            </div>
          </div>
        </div>
        <div className="flex py-4 border-b border-gray-400 font-themeHeading px-5 items-center justify-between transition-all duration-200 hover:bg-white/35 cursor-pointer">
          <span className=" flex items-center gap-3">
            <FaUsers className="text-xl" />
            <span>Set Prayers Time</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
