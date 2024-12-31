import React, { useRef, useState, useEffect } from 'react';
// import emailjs from 'emailjs-com';
import { FaHandsHelping } from 'react-icons/fa';
import ceramic from "../assets/industries/Ceramic.jpg";
import constr_chem from "../assets/industries/constr_Chem.jpg";
import electronics from "../assets/industries/electronics.jpeg";
import ferro from "../assets/industries/ferro.jpeg";
import axios from 'axios';
import Contact_Img from "../assets/Contact.jpg";



const ContactUs = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  // const [loader, setLoader] = useState(false);
  const [formData, setFormData] = useState({
    FirstName: '',
    LastName: '',
    Mobile: '',
    Email: '',
    Message: '',
    Date: ''
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'ta_Fyo7uBBYPpg#pwl3veDj8To2F$#B3BUi2v5q@F5y9#2E20n_Bp@2-q#1JFD6-',
    };

    const currentDateTime = new Date();
    const formattedDate = currentDateTime.toISOString().split('T')[0];
    const formattedTime = currentDateTime.toTimeString().split(' ')[0];
    const formattedDateTime = `${formattedDate} ${formattedTime}`;

    const dataToSend = { ...formData, Date: formattedDateTime };
    axios
      .post("https://api.sheetbest.com/sheets/dd64fc3a-0e96-4177-aad4-2e1e47cfb342", dataToSend, { headers })
      .then((response) => {
        console.log(response);

        if (response.status == 200 || response.status == 201) {
          setLoading(false);

        }
      }).catch((error) => {
        console.error("There was an error!", error);
        setLoading(false);
      });
    setOpenPopup(true);
    console.log("Form submitted", formData);
  };


  // emailjs.sendForm('service_ywk2zsd', 'template_wtcwndd', form.current, 'N79SXEqRUAW2dvp7_')
  //   .then((result) => {
  //     console.log(result.text);
  //     setLoading(false);
  //     setOpenPopup(true);
  //     form.current.reset(); // Clear the form after submission
  //   }, (error) => {
  //     console.log(error.text);
  //     setLoading(false);
  //     alert('Failed to send the message, please try again later.');
  //   });
  const closeModal = () => {
    setFormData({
      FirstName: '',
      LastName: '',
      Mobile: '',
      Email: '',
      Message: '',
      Date: ''
    })
    setOpenPopup(false);
  };
  return (
    <div className='bg-[#1D2124]'>
      <div className="md:py-14 py-16 w-full items-center px-6">
        <div className="flex flex-col md:flex-row items-center md:justify-center w-full gap-6">
          {/* Left Side - Image */}
          <div className="md:w-1/2 w-full flex justify-center">
            <img
              src={Contact_Img}
              alt="Contact Illustration"
              className="rounded-lg max-w-full md:max-w-[76%] h-auto"
            />
          </div>

          {/* Right Side - Form */}
          <div className="md:px-8 md:pt-0 rounded md:w-1/2 mx-auto">
            <h1 className="text-2xl font-bold mb-6 text-gray-300 mx-auto xl:text-center" style={{ fontFamily: 'Rubik, sans-serif' }}>
              Contact Us
            </h1>
            <form className="max-w-md mx-auto" ref={form} onSubmit={sendEmail}>
              <div className="mb-4 flex gap-4">
                <div className="w-full">
                  <label
                    className="block text-gray-300 font-medium text-sm mb-2"
                    htmlFor="first_name"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                    First Name
                  </label>
                  <input
                    className="w-full px-3 py-2 border rounded-lg border-gray-100 bg-gray-900 text-gray-300"
                    type="text"
                    id="FirstName"
                    name="FirstName"
                    onChange={handleChange}
                    value={formData.FirstName}
                    required
                    disabled={loading}
                  />
                </div>
                <div className="w-full">
                  <label
                    className="block text-gray-300 font-medium text-sm mb-2"
                    htmlFor="last_name"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                    Last Name
                  </label>
                  <input
                    className="w-full px-3 py-2 border rounded-lg border-gray-100 bg-gray-900 text-gray-300"
                    type="text"
                    id="LastName"
                    name="LastName"
                    onChange={handleChange}
                    value={formData.LastName}
                    required
                    disabled={loading}
                  />
                </div>
              </div>

              <div className="mb-4 flex gap-4">
                <div className="w-full">
                  <label
                    className="block text-gray-300 font-medium text-sm mb-2"
                    htmlFor="mobile"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                    Mobile
                  </label>
                  <input
                    className="w-full px-3 py-2 border rounded-lg border-gray-100 bg-gray-900 text-gray-300"
                    type="text"
                    id="Mobile"
                    name="Mobile"
                    onChange={handleChange}
                    value={formData.Mobile}
                    required
                    disabled={loading}
                  />
                </div>
                <div className="w-full">
                  <label
                    className="block text-gray-300 font-medium text-sm mb-2"
                    htmlFor="email"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                    Email
                  </label>
                  <input
                    className="w-full px-3 py-2 border rounded-lg border-gray-100 bg-gray-900 text-gray-300"
                    type="email"
                    id="Email"
                    name="Email"
                    onChange={handleChange}
                    value={formData.Email}
                    required
                    disabled={loading}
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-300 font-medium text-sm mb-2"
                  htmlFor="message"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                  Message
                </label>
                <textarea
                  className="w-full px-3 py-2 border rounded-lg border-gray-100 bg-gray-900 text-gray-300"
                  id="Message"
                  name="Message"
                  onChange={handleChange}
                  value={formData.Message}
                  required
                  disabled={loading}
                ></textarea>
              </div>
              <div className='text-center'>
                <button
                  className="p-8 bg-orange-500 text-white py-2 rounded hover:bg-blue-600"
                  type="submit"
                  disabled={loading}
                  style={{ fontFamily: 'Rubik, sans-serif' }}>
                  {loading ? "Sending..." : "Submit"}
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>


      {/* <div className='h-full w-full border-2 border-gray-700 rounded-lg hidden md:block overflow-hidden'>
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
      </div> */}


      {openPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-gray-300 rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
            <div className="bg-gray-300 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className='flex  flex-col items-center gap-4'>

                <div className="mx-auto flex-shrink-0 flex items-center justify-center !h-16 !w-16 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                  <FaHandsHelping size={28} color="#4CAF50" />
                </div>
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3 className="text-lg leading-6 font-medium text-green-600 text-center">
                    Thank you for submitting your response!
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-green-600 text-center">
                      We will reach out to you soon.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-300 px-4 py-3 sm:px-6  flex items-center justify-center">
              <button
                type="button"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-orange-500 text-base font-medium text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
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
