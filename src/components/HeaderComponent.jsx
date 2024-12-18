import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import sarav_apex from "../assets/Sarav_apex_png.png";

const HeaderComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab,setActiveTab] = useState(0);
  const navigate = useNavigate();
  const toggleMenu = (path) => {
    console.log(path);
    setIsOpen(!isOpen);
    if (path) navigate(path);
  };
  const getTabId=(id)=>{
    setActiveTab(id)
    localStorage.setItem('tabId',id)
  }
  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-50">
        <section className="w-full mx-auto ">
          <div className="container mx-auto flex justify-between items-center p-4">
            {/* Logo Section */}
            <div
              onClick={() => {
                navigate("/");
              }}
              className="cursor-pointer"
            >
              <img
                // src="https://via.placeholder.com/100" // Replace with your logo URL
                src={sarav_apex} // Replace with your logo URL
                alt="Logo"
                className="h-10 w-auto"
              />
            </div>

            {/* Navigation Section */}
            <nav className="hidden lg:flex space-x-8">
              <a
                onClick={() => {
                  toggleMenu("/")
                }}
                className="relative relative group/border cursor-pointer font-medium text-orange-600 transition duration-300"
              >
                Our Story
                <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-red-500 transition-all duration-300 ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover/border:w-full group-hover/border:left-0 "></span>
              </a>
              <a
                onClick={() => {
                  toggleMenu("/why-sarav");
                }}
                className="relative relative group/border cursor-pointer font-medium text-orange-600 transition duration-300"
              >
                Why Sarav?
                <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-red-500 transition-all duration-300 ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover/border:w-full group-hover/border:left-0 "></span>
              </a>
              <div className="relative group">
                <a className="relative cursor-pointer flex items-center font-medium text-orange-600 transition duration-300">
                  Products
                  <svg
                    className="ml-1 mt-0.5 h-4 w-4 transition-transform duration-300 group-hover:rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                  <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-red-500 transition-all duration-300 ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover:w-full group-hover:left-0"></span>
                </a>
                <div className="absolute left-0 hidden pt-2 w-48 bg-white shadow-lg group-hover:block rounded-lg">
                  <a
                    onClick={() => {
                      toggleMenu("/products/quartz_lumps");
                    }}
                    className="cursor-pointer block px-4 py-2 text-gray-800 hover:bg-gray-200 rounded-lg"
                  >
                    ● Quartz Lumps
                  </a>
                  <a
                    onClick={() => {
                      toggleMenu("/products/quartz_grits");
                    }}
                    className="cursor-pointer block px-4 py-2 text-gray-800 hover:bg-gray-200 rounded-lg"
                  >
                    ● Quartz Grits/Grains
                  </a>
                  {/* <a
                    onClick={() => {
                      toggleMenu("/products/quartz_chips");
                    }}
                    className="cursor-pointer block px-4 py-2 text-gray-800 hover:bg-gray-200 rounded-lg"
                  >
                    ● Quartz Chips
                  </a> */}
                  {/* <a
                    onClick={() => {
                      toggleMenu("/products/quartz_grains");
                    }}
                    className="cursor-pointer block px-4 py-2 text-gray-800 hover:bg-gray-200 rounded-lg"
                  >
                    ● Quartz Grains
                  </a> */}
                  <a
                    onClick={() => {
                      toggleMenu("/products/quartz_sands");
                    }}
                    className="cursor-pointer block px-4 py-2 text-gray-800 hover:bg-gray-200 rounded-lg"
                  >
                    ● Quartz Sands
                  </a>
                  <a
                    onClick={() => {
                      toggleMenu("/products/raming_mass");
                    }}
                    className="cursor-pointer block px-4 py-2 text-gray-800 hover:bg-gray-200 rounded-lg"
                  >
                    ● Raming mass
                  </a>
                </div>
              </div>
              <a
                onClick={() => {
                  toggleMenu("/infrastructre");
                }}
                className="relative relative group/border cursor-pointer font-medium text-orange-600 transition duration-300"
              >
                Infrastructure
                <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-red-500 transition-all duration-300 ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover/border:w-full group-hover/border:left-0 "></span>
              </a>
              {/* <a
                onClick={() => {
                  toggleMenu("/industries");
                }}
                className="relative relative group/border cursor-pointer font-medium text-orange-600 transition duration-300"
              >
                Industries
                <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-red-500 transition-all duration-300 ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover/border:w-full group-hover/border:left-0 "></span>
              </a> */}
              <a
                onClick={() => {
                  toggleMenu("/contact-us");
                }}
                className="relative relative group/border cursor-pointer font-medium text-orange-600 transition duration-300"
              >
                Contact
                <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-red-500 transition-all duration-300 ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover/border:w-full group-hover/border:left-0 "></span>
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <div className="lg:hidden z-50">
              <button
                onClick={() => {
                  toggleMenu();
                }}
                className="text-gray-700 focus:outline-none"
              >
                {isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Section with smooth animation */}
          <div
            className={`${
              isOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-full"
            } lg:hidden bg-white p-4 shadow-md transition-all duration-700 ease-in-out absolute top-0 left-0 right-0 mb-8 lg:mb-0`}
          >
            <nav>
              <div className="flex items-center pb-5">
                <img
                onClick={() => {
                  navigate("/");
                }}
                  // src="https://via.placeholder.com/100" // Replace with your logo URL
                  src={sarav_apex}
                  alt="Logo"
                  className="h-10 w-auto"
                />
              </div>
              <a
                href="#"
                onClick={() => {
                  toggleMenu("/");
                }}
                className="block relative relative group/border cursor-pointer text-orange-600 hover:text-blue-500 transition duration-500 py-2"
              >
                Our Story
                <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-red-500 transition-all duration-300 ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover/border:w-full group-hover/border:left-0 "></span>
              </a>
              <a
                href="#"
                onClick={() => {
                  toggleMenu("/why-sarav");
                }}
                className="block relative relative group/border cursor-pointer text-orange-600 hover:text-blue-500 transition duration-500 py-2"
              >
                Why Sarav?
                <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-red-500 transition-all duration-300 ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover/border:w-full group-hover/border:left-0 "></span>
              </a>
              <div className="relative group">
                <a className="relative cursor-pointer flex items-center font-normal text-orange-600 transition duration-300">
                  Products
                  <svg
                    className="ml-1 mt-0.5 h-4 w-4 transition-transform duration-300 group-hover:rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                  <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-red-500 transition-all duration-300 ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover:w-full group-hover:left-0"></span>
                </a>
                <div className="absolute bg-white z-10 left-0 hidden pt-2 w-48 bg-white shadow-lg group-hover:block rounded-lg">
                  <a
                    onClick={() => {
                      toggleMenu("/products/quartz_lumps");
                    }}
                    className="cursor-pointer block px-4 py-2 text-gray-800 hover:bg-gray-200 rounded-lg"
                  >
                    ● Quartz Lumps
                  </a>
                  <a
                    onClick={() => {
                      toggleMenu("/products/quartz_grits");
                    }}
                    className="cursor-pointer block px-4 py-2 text-gray-800 hover:bg-gray-200 rounded-lg"
                  >
                    ● Quartz Grits
                  </a>
                  <a
                    onClick={() => {
                      toggleMenu("/products/quartz_chips");
                    }}
                    className="cursor-pointer block px-4 py-2 text-gray-800 hover:bg-gray-200 rounded-lg"
                  >
                    ● Quartz Chips
                  </a>
                  <a
                    onClick={() => {
                      toggleMenu("/products/quartz_grains");
                    }}
                    className="cursor-pointer block px-4 py-2 text-gray-800 hover:bg-gray-200 rounded-lg"
                  >
                    ● Quartz Grains
                  </a>
                  <a
                    onClick={() => {
                      toggleMenu("/products/quartz_sands");
                    }}
                    className="cursor-pointer block px-4 py-2 text-gray-800 hover:bg-gray-200 rounded-lg"
                  >
                    ● Quartz Sands
                  </a>
                  <a
                    onClick={() => {
                      toggleMenu("/products/raming_mass");
                    }}
                    className="cursor-pointer block px-4 py-2 text-gray-800 hover:bg-gray-200 rounded-lg"
                  >
                    ● Raming mass
                  </a>
                </div>
              </div>
              <a
                href="#"
                onClick={() => {
                  toggleMenu("/infrastructre");
                }}
                className="block relative relative group/border cursor-pointer !text-orange-600 hover:text-blue-500 transition duration-500 py-2"
              >
                Infrstructure
                <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-red-500 transition-all duration-300 ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover/border:w-full group-hover/border:left-0 "></span>
              </a>
              {/* <a
                href="#"
                onClick={() => {
                  toggleMenu("/industries/?quartz_lumps");
                }}
                className="block relative relative group/border cursor-pointer !text-orange-600 hover:text-blue-500 transition duration-500 py-2"
              >
                Industries
                <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-red-500 transition-all duration-300 ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover/border:w-full group-hover/border:left-0 "></span>
              </a> */}
              <a
                href="#"
                onClick={() => {
                  toggleMenu("/contact-us");
                }}
                className="block relative relative group/border cursor-pointer !text-orange-600 hover:text-blue-500 transition duration-500 py-2"
              >
                Contact
                <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-red-500 transition-all duration-300 ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover/border:w-full group-hover/border:left-0 "></span>
              </a>
            </nav>
          </div>
        </section>
      </header>
    </>
  );
};

export default HeaderComponent;
