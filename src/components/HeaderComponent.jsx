import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HeaderComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
  const toggleMenu = (path) => {
    console.log(path)
    setIsOpen(!isOpen);
    if(path) navigate(path)
  };
  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-50">
        <section className="w-11/12 mx-auto ">
          <div className="container mx-auto flex justify-between items-center p-4">
            {/* Logo Section */}
            <div className="flex items-center">
              <img
                src="https://via.placeholder.com/100" // Replace with your logo URL
                alt="Logo"
                className="h-10 w-auto"
              />
              <span className="ml-3 text-xl font-bold">Sarav Apex</span>
            </div>

            {/* Navigation Section */}
            <nav className="hidden lg:flex space-x-8">
              <a
                onClick={()=>{toggleMenu('/')}}
                className="relative relative group/border cursor-pointer text-orange-600 transition duration-300"
              >
                Our Story
                <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-red-500 transition-all duration-300 ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover/border:w-full group-hover/border:left-0 "></span>
              </a>
              <a
                onClick={()=>{toggleMenu('/why-sarav')}}
                className="relative relative group/border cursor-pointer text-orange-600 transition duration-300"
              >
                Why Sarav?
                <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-red-500 transition-all duration-300 ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover/border:w-full group-hover/border:left-0 "></span>
              </a>
              <a
                onClick={()=>{toggleMenu('/products')}}
                className="relative relative group/border cursor-pointer text-orange-600 transition duration-300"
              >
                Products
                <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-red-500 transition-all duration-300 ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover/border:w-full group-hover/border:left-0 "></span>
              </a>
              <a
                onClick={()=>{toggleMenu('/infrastructre')}}
                className="relative relative group/border cursor-pointer text-orange-600 transition duration-300"
              >
                Infrastructure
                <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-red-500 transition-all duration-300 ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover/border:w-full group-hover/border:left-0 "></span>
              </a>
              <a
                onClick={()=>{toggleMenu('/industries')}}
                className="relative relative group/border cursor-pointer text-orange-600 transition duration-300"
              >
                Industries
                <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-red-500 transition-all duration-300 ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover/border:w-full group-hover/border:left-0 "></span>
              </a>
              <a
                onClick={()=>{toggleMenu('/contact-us')}}
                className="relative relative group/border cursor-pointer text-orange-600 transition duration-300"
              >
                Contact
                <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-red-500 transition-all duration-300 ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover/border:w-full group-hover/border:left-0 "></span>
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <div className="lg:hidden z-50">
              <button
                onClick={()=>{toggleMenu()}}
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
            } lg:hidden bg-white p-4 shadow-md transition-all duration-700 ease-in-out absolute top-16 left-0 right-0`}
          >
            <nav>
              <a
                href="#"
                onClick={()=>{toggleMenu('/')}}
                className="block relative relative group/border cursor-pointer text-orange-600 hover:text-blue-500 transition duration-500 py-2"
              >
                Our Story
                <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-red-500 transition-all duration-300 ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover/border:w-full group-hover/border:left-0 "></span>
              </a>
              <a
                href="#"
                onClick={()=>{toggleMenu('/why-sarav')}}
                className="block relative relative group/border cursor-pointer text-orange-600 hover:text-blue-500 transition duration-500 py-2"
              >
                Why Sarav?
                <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-red-500 transition-all duration-300 ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover/border:w-full group-hover/border:left-0 "></span>
              </a>
              <a
                href="#"
                onClick={()=>{toggleMenu('/products')}}
                className="block relative relative group/border cursor-pointer !text-orange-600 hover:text-blue-500 transition duration-500 py-2"
              >
                Products
                <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-red-500 transition-all duration-300 ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover/border:w-full group-hover/border:left-0 "></span>
              </a>
              <a
                href="#"
                onClick={()=>{toggleMenu('/infrastructre')}}
                className="block relative relative group/border cursor-pointer !text-orange-600 hover:text-blue-500 transition duration-500 py-2"
              >
                Infrstructure
                <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-red-500 transition-all duration-300 ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover/border:w-full group-hover/border:left-0 "></span>
              </a>
              <a
                href="#"
                onClick={()=>{toggleMenu('/industries')}}
                className="block relative relative group/border cursor-pointer !text-orange-600 hover:text-blue-500 transition duration-500 py-2"
              >
                Industries
                <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-red-500 transition-all duration-300 ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover/border:w-full group-hover/border:left-0 "></span>
              </a>
              <a
                href="#"
                onClick={()=>{toggleMenu('/contact-us')}}
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
