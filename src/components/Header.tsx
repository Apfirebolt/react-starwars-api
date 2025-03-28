import React, { useState } from "react";
import { Link } from "react-router-dom";

const HeaderComponent: React.FC = () => {
  const [links, setLinks] = useState([
    { name: "Home", path: "/" },
    { name: "People", path: "/people" },
    { name: "Planets", path: "/planets" },
    { name: "Starships", path: "/starships" },
    { name: "Vehicles", path: "/vehicles" },
    { name: "Films", path: "/films" },
  ]);
  return (
    <nav className="bg-primary-100 border-gray-200 px-2 sm:px-4 py-4 dark:bg-gray-900">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <p className="text-xl text-secondary-100 font-bold">
          React Star Wars
        </p>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
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
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {links.map((link, index) => (
              <li key={index} className="mb-2 md:mb-0">
                <Link
                  to={link.path}
                  className="block p-2 text-gray-500 rounded-lg hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default HeaderComponent;