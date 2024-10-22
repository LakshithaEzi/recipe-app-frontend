import React from "react";
import { RxExit } from "react-icons/rx";
export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full bg-white backdrop-blur-xl">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="https://i.postimg.cc/MKD7wbB5/Cook.png"
              alt="Logo"
              className="h-[35px]"
            />
          </div>

          {/* Centered Links */}
          <div className="hidden md:flex flex-grow justify-center">
            <div className="flex items-baseline justify-center m-1 space-x-4">
              <a
                href="#"
                className="px-3 py-2 text-sm font-medium text-black rounded-md hover:text-red-300 hover:underline"
              >
                HOME
              </a>
              <a
                href="#"
                className="px-3 py-2 text-sm font-medium text-black rounded-md hover:text-red-700 hover:underline"
              >
                FAVORITE
              </a>
            </div>
          </div>

          {/* Exit Icon */}
          <div className="flex-shrink-0">
            <button className="flex items-center justify-center p-2 text-gray-600 hover:text-red-700">
              <RxExit className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
