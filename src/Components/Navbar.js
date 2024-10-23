import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxExit } from "react-icons/rx";

export default function Navbar() {
  const token = localStorage.getItem("token");
  const [selected, setSelected] = useState(1);
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-white backdrop-blur-xl">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="flex items-center justify-between h-12">
          <div className="flex-shrink-0">
            <img
              src="https://i.postimg.cc/MTVsCK0C/Screenshot-2024-10-23-133616.png"
              alt="Logo"
              className="h-[35px]"
            />
          </div>

          <div className="justify-center flex-grow hidden md:flex">
            <div className="flex items-baseline justify-center m-1 space-x-4">
              <Link
                to="/"
                onClick={() => {
                  setSelected(1);
                }}
                className={`px-3 py-2 text-sm font-medium ${
                  selected == 1 ? "text-red-300" : "text-black"
                } rounded-md hover:text-red-300 hover:underline`}
              >
                HOME
              </Link>
              <Link
                to="/favourites"
                onClick={() => {
                  setSelected(2);
                }}
                className={`px-3 py-2 text-sm font-medium ${
                  selected == 2 ? "text-red-300" : "text-black"
                } rounded-md hover:text-red-300 hover:underline`}
              >
                FAVORITE
              </Link>
            </div>
          </div>

          <div className="flex-shrink-0 space-x-2">
            {!token ? (
              <>
                <Link
                  to="/login"
                  className="px-4 py-2 text-sm font-medium text-white bg-[#da3772] rounded-md hover:bg-[#d92365]"
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-2 text-sm font-medium text-white bg-[#da3772] rounded-md hover:bg-[#d92365]"
                >
                  Register
                </Link>
              </>
            ) : (
              <button
                onClick={handleLogout}
                className="flex items-center justify-center p-2 text-black bg-white rounded-md hover:scale-105"
              >
                <RxExit className="w-6 h-6" />
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
