import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="p-4 bg-gray-600 text-white">
        <div className="container flex justify-between h-16 mx-auto md:justify-center md:space-x-8">
          <ul className="items-stretch hidden space-x-3 md:flex text-xl font-medium">
            <li className="flex">
              <Link
                to="/home"
                rel="noopener noreferrer"
                className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
              >
                Home
              </Link>
            </li>
            <li className="flex">
              <Link
                to="/addProducts"
                rel="noopener noreferrer"
                className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
              >
                Add-Products
              </Link>
            </li>
            <li className="flex">
              <Link
                to="/manageProducts"
                rel="noopener noreferrer"
                className="flex items-center px-4 -mb-1"
              >
                Manage-Products
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
