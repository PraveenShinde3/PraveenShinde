import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  let [open, setopen] = useState(true);

  return (
    <nav className=" z-10 w-full fixed bg-[#e6e2d9] border-b-[3px] border-black  px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
      <div className="px-5 md:w-9/12 container flex flex-wrap items-center justify-between mx-auto">
        <a className="flex items-center" href="/">
          <span
            className="self-center text-3xl  whitespace-nowrap dark:text-white"
            style={{ fontFamily: "'Yesteryear', cursive" }}
          >
            Praveen
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className={`"inline-flex items-center p-1 ml-3 text-sm ${
            open ? "text-black bg-[#e6e2d9]" : "text-[#e6e3d9] bg-black"
          } md:hidden  focus:outline-none ring-2 ring-black dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"`}
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={() => setopen(!open)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className={` z-10 ease-linear duration-500 w-full md:block md:w-auto ${
            !open ? "visible" : "hidden"
          }`}
          id="navbar-default"
        >
          <ul className="flex md:gap-10 flex-col p-4 mt-4 border bg-transparent border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 ">
            <li>
              <NavLink
                to={"/"}
                className=" text-base block py-2 pl-3 pr-4 text-black rounded md:bg-transparent md:p-0 dark:text-white active:text-blue-500"
                aria-current="page"
                onClick={() => {
                  setopen(!open);
                }}
                style={({ isActive }) => ({
                  fontWeight: isActive ? "bold" : "normal",
                })}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/projects"}
                href="www.example.com"
                className="text-base block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 "
                onClick={() => {
                  setopen(!open);
                }}
                style={({ isActive }) => ({
                  fontWeight: isActive ? "bold" : "normal",
                })}
              >
                Projects
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
