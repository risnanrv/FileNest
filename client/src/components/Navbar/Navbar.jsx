import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaSearch, FaUpload, FaHome, FaImages } from 'react-icons/fa';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center py-4 px-4 sm:px-6">

        <div className="mb-4 sm:mb-0">
          <h1 className="text-3xl font-extrabold text-blue-700">FileNest</h1>
        </div>

        <nav className="mb-4 sm:mb-0">
          <ul className="flex gap-6 font-medium">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center gap-2 py-2 px-1 transition-colors ${isActive ? 'text-blue-700' : 'text-gray-600 hover:text-blue-600'}`
                }
              >
                <FaHome className="text-lg" />
                <span>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/upload"
                className={({ isActive }) =>
                  `flex items-center gap-2 py-2 px-1 transition-colors ${isActive ? 'text-blue-700' : 'text-gray-600 hover:text-blue-600'}`
                }
              >
                <FaUpload className="text-lg" />
                <span>Upload</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/gallery"
                className={({ isActive }) =>
                  `flex items-center gap-2 py-2 px-1 transition-colors ${isActive ? 'text-blue-700' : 'text-gray-600 hover:text-blue-600'}`
                }
              >
                <FaImages className="text-lg" />
                <span>Gallery</span>
              </NavLink>
            </li>
          </ul>
        </nav>


        <div className="flex items-center gap-4 w-full sm:w-auto">
          <div className="relative flex-grow sm:flex-grow-0 sm:w-64">
            <input
              type="text"
              placeholder="Search files..."
              className="border border-gray-300 w-full pl-4 pr-10 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-700">
              <FaSearch />
            </button>
          </div>

          <button className="focus:outline-none">
            <img
              src="https://randomuser.me/api/portraits/men/75.jpg"
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover border-2 border-transparent hover:border-blue-500 transition-all"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;