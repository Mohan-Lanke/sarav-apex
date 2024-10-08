import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaWhatsapp, FaBars } from 'react-icons/fa';
import sarav_apex from '../assets/Sarav_apex_png.png';
import { useNavigate } from 'react-router-dom';


const FooterComponent = () => {
  const [showIcons, setShowIcons] = useState(false);

  const toggleIcons = () => {
    setShowIcons(!showIcons);
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-8 border-t border-gray-800">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 xl:gap-8">
      <div className="flex items-center pb-5">
                <img
                onClick={() => {
                  navigate("/");
                }}
                  src={sarav_apex}
                  alt="Logo"
                  className="h-10 w-auto"
                />
              </div>
        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            <li className='mb-2'><a href="#" className="hover:text-orange-500 text-gray-300">Our Story</a></li>
            <li className='mb-2'><a href="#" className="hover:text-orange-500 text-gray-300">Why Sarav?</a></li>
            <li className='mb-2'><a href="#" className="hover:text-orange-500 text-gray-300">Infrastructure</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-4">Our Products</h2>
          <ul>
            <li className='mb-2'><a href="#" className="hover:text-orange-500 text-gray-300">Quartz Lumps</a></li>
            <li className='mb-2'><a href="#" className="hover:text-orange-500 text-gray-300">Quartz Grits/Grains</a></li>
            <li className='mb-2'><a href="#" className="hover:text-orange-500 text-gray-300">Quartz Sands</a></li>
            <li className='mb-2'><a href="#" className="hover:text-orange-500 text-gray-300">Raming Mass</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-4">Contact Info</h2>
          <ul>
            <li className="mb-2 flex flex-wrap items-center">
              <FaEnvelope className="mr-2" />
              <span className='text-gray-300'>domesticenquiries@saravapex.com</span>
            </li>
            <li className="mb-2 flex flex-wrap items-center">
              <FaEnvelope className="mr-2" />
              <span className='text-gray-300'>globalenquiries@saravapex.com</span>
            </li>
            {/* <li className="mb-2 flex items-center">
              <FaPhone className="mr-2" />
              <span className='text-gray-300'>+91 44 4720 1268</span>
            </li> */}
            <li className="mb-2 flex flex-wrap items-center">
              <span className='text-gray-300'>E-31, Madhura Nagar, near Vellanki foods.</span>
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
          onClick={toggleIcons}
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
            <a href="https://wa.me/919840054331" className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600">
              <FaWhatsapp />
            </a>
          </div>
        )}
      </div>
      <div className="mt-8 border-t border-gray-800 pt-4 text-center">
        <p>&copy; 2024 Sarav Apex, all copy rights reserved.</p>
      </div>
    </footer>
  );
};

export default FooterComponent;
