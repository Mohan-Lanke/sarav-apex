import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { FaHandsHelping } from 'react-icons/fa';
import ceramic from "../assets/industries/Ceramic.jpg";
import constr_chem from "../assets/industries/constr_Chem.jpg";
import electronics from "../assets/industries/electronics.jpeg";
import ferro from "../assets/industries/ferro.jpeg";

const ContactUs = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm('service_ywk2zsd', 'template_wtcwndd', form.current, 'N79SXEqRUAW2dvp7_')
      .then((result) => {
        console.log(result.text);
        setLoading(false);
        setOpenPopup(true);
        form.current.reset(); // Clear the form after submission
      }, (error) => {
        console.log(error.text);
        setLoading(false);
        alert('Failed to send the message, please try again later.');
      });
  };
  const closeModal = () => {
    setOpenPopup(false);
  };
  return (
    <div className='bg-gray-900'>
    <div className="md:py-14 py-16 w-full items-center md:grid md:grid-cols-7 md:gap-x-4 px-6">
      <div className=" md:px-8 pt-8 md:pt-0 rounded col-span-3">
        <h1 className="text-2xl font-bold mb-6 text-gray-300">Contact Us</h1>

        <form className='max-w-md' ref={form} onSubmit={sendEmail}>
          <div className="mb-4 flex gap-4">
            <div className='w-full'>
              <label className="block text-gray-300 font-medium text-sm mb-2" htmlFor="first_name">First Name</label>
              <input 
                className="w-full px-3 py-2 border rounded-lg border-gray-100 bg-gray-900 text-gray-300" 
                type="text" 
                id="first_name" 
                name="first_name" 
                required 
                disabled={loading} 
              />
            </div>
            <div className='w-full'>
              <label className="block text-gray-300 font-medium text-sm mb-2" htmlFor="last_name">Last Name</label>
              <input 
                className="w-full px-3 py-2 border rounded-lg border-gray-100 bg-gray-900 text-gray-300" 
                type="text" 
                id="last_name" 
                name="last_name" 
                required 
                disabled={loading} 
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 font-medium text-sm mb-2" htmlFor="mobile">Mobile</label>
            <input 
              className="w-full px-3 py-2 border rounded-lg border-gray-100 bg-gray-900 text-gray-300" 
              type="text" 
              id="mobile" 
              name="mobile" 
              required 
              disabled={loading} 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 font-medium text-sm mb-2" htmlFor="email">Email</label>
            <input 
              className="w-full px-3 py-2 border rounded-lg border-gray-100 bg-gray-900 text-gray-300" 
              type="email" 
              id="email" 
              name="email" 
              required 
              disabled={loading} 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 font-medium text-sm mb-2" htmlFor="message">Message</label>
            <textarea 
              className="w-full px-3 py-2 border rounded-lg border-gray-100 bg-gray-900 text-gray-300" 
              id="message" 
              name="message" 
              required 
              disabled={loading} 
            ></textarea>
          </div>
          <button 
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600" 
            type="submit" 
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Submit'}
          </button>
        </form>
      </div>
      <div className='h-full w-full border-2 border-gray-700 rounded-lg hidden md:block overflow-hidden'>
<img src={ceramic} className='h-full object-cover' alt="ceramic" />
      </div>
      <div className='h-full w-full border-2 border-gray-700 rounded-lg hidden md:block overflow-hidden'>
<img src={constr_chem} className='h-full object-cover' alt="construction" />
      </div>
      <div className='h-full w-full border-2 border-gray-700 rounded-lg hidden md:block overflow-hidden'>
<img src={electronics} className='h-full object-cover' alt="electronics" />
      </div>
      <div className='h-full w-full border-2 border-gray-700 rounded-lg hidden md:block overflow-hidden'>
<img src={ferro} className='h-full object-cover' alt="ferro" />
      </div>
    </div>

    {openPopup && (
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
        <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                <FaHandsHelping size={24} color="#4CAF50" />
              </div>
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Thank you for submitting your response!
                </h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    We will reach out to you soon.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={closeModal}
            >
              Ok
            </button>
          </div>
        </div>
      </div>
    )}
  </div>
  )
}

export default ContactUs
