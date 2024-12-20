import React, { useState, useRef } from 'react';
import { FaEnvelope, FaPhone, FaWhatsapp, FaBars, FaLinkedin } from 'react-icons/fa';
import sarav_apex from '../assets/Sarav_apex_png.png';
import { useNavigate } from 'react-router-dom';


const FooterComponent = () => {
  const [showIcons, setShowIcons] = useState(false);
  const navigate = useNavigate();
  const toggleIcons = (path) => {

    if (path) {
      navigate(path);
    } else {
      setShowIcons(!showIcons);
    }

  };

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#1D2124] text-gray-300 py-8 border-t border-gray-800">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 xl:gap-8">
        <div className="flex items-start pb-5">
          <img
            onClick={() => {
              navigate("/");
            }}
            src={sarav_apex}
            alt="Logo"
            className="h-10 w-auto cursor-pointer"
          />
        </div>
        <div className='pt-4 md:pt-0'>
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            <li className='mb-2'><a onClick={() => { toggleIcons('/') }} className="hover:text-orange-500 text-gray-300 text-sm cursor-pointer">Our Story</a></li>
            <li className='mb-2'><a onClick={() => { toggleIcons('/why-sarav') }} className="hover:text-orange-500 text-gray-300 text-sm cursor-pointer">Why Sarav?</a></li>
            <li className='mb-2'><a onClick={() => { toggleIcons('/infrastructre') }} className="hover:text-orange-500 text-gray-300 text-sm cursor-pointer">Infrastructure</a></li>
          </ul>
        </div>
        <div className='pt-4 md:pt-0'>
          <h2 className="text-lg font-semibold mb-4">Our Products</h2>
          <ul>
            <li className='mb-2'><a onClick={() => { toggleIcons("/products/quartz_lumps") }} className="hover:text-orange-500 text-gray-300 text-sm cursor-pointer">Quartz Lumps</a></li>
            <li className='mb-2'><a onClick={() => { toggleIcons("/products/quartz_grits") }} className="hover:text-orange-500 text-gray-300 text-sm cursor-pointer">Quartz Grits/Grains</a></li>
            <li className='mb-2'><a onClick={() => { toggleIcons("/products/quartz_sands") }} className="hover:text-orange-500 text-gray-300 text-sm cursor-pointer">Quartz Sands</a></li>
            {/* <li className='mb-2'><a onClick={() => { toggleIcons("/products/quartz_chips") }} className="hover:text-orange-500 text-gray-300 text-sm cursor-pointer">Quartz Chips</a></li> */}
            <li className='mb-2'><a onClick={() => { toggleIcons("/products/raming_mass") }} className="hover:text-orange-500 text-gray-300 text-sm cursor-pointer">Raming Mass</a></li>
          </ul>
        </div>
        <div className='pt-4 md:pt-0'>
          <h2 className="text-lg font-semibold mb-4">Contact Info</h2>
          <ul>
            <li className="mb-2 flex flex-wrap items-center">
              <FaEnvelope className="mr-2" />
              <span className='text-gray-300 text-sm'>domesticenquiries@saravapex.com</span>
            </li>
            <li className="mb-2 flex flex-wrap items-center">
              <FaEnvelope className="mr-2" />
              <span className='text-gray-300 text-sm'>globalenquiries@saravapex.com</span>
            </li>
            {/* <li className="mb-2 flex items-center">
              <FaPhone className="mr-2" />
              <span className='text-gray-300'>+91 44 4720 1268</span>
            </li> */}
            <li className="mb-2 flex flex-wrap items-center">
              <span className='text-gray-300 text-sm'>E-31, Madhura Nagar, near Vellanki foods.</span>
            </li>
          </ul>
        </div>
        <div>
          {/* <iframe
            src="https://maps.app.goo.gl/hQsiPM5i8qWtuH4s9"
            width="100%"
            height="200"
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
            className="rounded-lg"
          ></iframe> */}
        </div>
      </div>
      <div className="fixed bottom-4 right-4 flex flex-col flex-col-reverse gap-2 space-y-4">
        <button
          onClick={() => { toggleIcons() }}
          className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none"
        >
          <FaBars />
        </button>
        {showIcons && (
          <div className="flex flex-col space-y-4">
            <a href="mailto:globalenquiries@saravapex.com" className="bg-red-500 text-white p-3 rounded-full shadow-lg hover:bg-red-600">
              <FaEnvelope />
            </a>
            <a href="tel:+919840054331" className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600">
              <FaPhone />
            </a>
            <a href="" className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600">
              <FaLinkedin />
            </a>
            <a href="https://wa.me/919840054331" className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600">
              <FaWhatsapp />
            </a>
          </div>
        )}
      </div>
      <div className="border-t border-gray-800 pt-4 text-center">
        <p>&copy; 2024 Sarav Apex, all copy rights reserved.</p>
      </div>
    </footer>
  );
};

export default FooterComponent;
