import React, { useEffect, useState } from "react";
import UseAnimateInViewHook from "../reusable-hooks/UseAnimateInViewHook";
import Slider from "react-slick";
/* Add this to your main CSS file */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import oneImg from "../assets/one.svg";
import twoImg from "../assets/two.svg";
import threeImg from "../assets/three.svg";
import fourImg from "../assets/four.svg";
import fiveImg from "../assets/five.svg";
import NumberAnimation from "../Common/NumberAnimation";
import { FaQuoteLeft } from "react-icons/fa";
import videoSrc from "../assets/sample.mp4";
import world_map from '../assets/new_world_map.jpeg';
import "../styles/OurStory.css";
const items = [
  { shortText: "A", fullText: "Apple" },
  { shortText: "B", fullText: "Banana" },
  { shortText: "C", fullText: "Cherry" },
  { shortText: "D", fullText: "Dragonfruit" },
  { shortText: "E", fullText: "Elderberry" },
  // Add more items as needed
];

const testimonials = [
  {
    quote: `I absolutely love the designs and styles that Ehya creates. They are so different and innovative. I have bought several times from the collections and what I love is that they really are timeless pieces.`,
    author: "Satish Kumar",
    position: "UX Designer",
  },
  {
    quote: `I absolutely love the designs and styles that Ehya creates. They are so different and innovative. I have bought several times from the collections and what I love is that they really are timeless pieces.`,
    author: "Mohan Lanke",
    position: "UI Developer",
  },
  {
    quote: `I absolutely love the designs and styles that Ehya creates. They are so different and innovative. I have bought several times from the collections and what I love is that they really are timeless pieces.`,
    author: "Aadhi",
    position: "UI Developer",
  },
  // Add more testimonials here
];

const numCount = [
  { id: 1, title: "Avg teams experience", count: 20, addOn: "years" },
  { id: 2, title: "MT Delivered", count: 150000, addOn: "+" },
  { id: 3, title: "Clients", count: 15, addOn: "+" },
  { id: 4, title: "Global Network", count: 7, addOn: "+" },
];
const OurStory = () => {
  const leftElement = UseAnimateInViewHook("left");
  const rightElement = UseAnimateInViewHook("right");
  const upElement = UseAnimateInViewHook("down");
  const downElement = UseAnimateInViewHook("down");
  const zoomInElement = UseAnimateInViewHook("", "1500ms", true);
  const [hoveredLocation, setHoveredLocation] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [autoplay, setAutoplay] = useState(true); // State to control autoplay

  useEffect(() => {
    console.log(autoplay);
  }, [autoplay]);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  const testimonial_settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false, // Remove arrows
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: autoplay ? 5000 : 500, // Set a slower speed for smooth continuous sliding
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // This is key to keep it continuous
    cssEase: "linear", // Continuous linear scrolling
    pauseOnHover: true, // Do not pause automatically on hover
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const locations = [
    {
      id: 1,
      name: "Hyderabad, India",
      details: "Address for Hyderabad",
      top: "44%", // adjust based on actual pin position
      left: "65.3%", // adjust based on actual pin position
    },
    {
      id: 2,
      name: "Delhi, India",
      details: "Address for Delhi",
      top: "40%",
      left: "64.5%",
    },
    {
      id: 3,
      name: "Sydney, Australia",
      details: "Address for australia",
      top: "70%",
      left: "80%",
    },
    {
      id: 4,
      name: "Ontario, Canada",
      details: "Address for Canada",
      top: "21%",
      left: "22%",
    },
    {
      id: 5,
      name: "Huawei, China",
      details: "Address for Chins",
      top: "37.5%",
      left: "68%",
    },
    {
      id: 6,
      name: "Texas, US",
      details: "Address for US",
      top: "30%",
      left: "17%",
    },
    // Add more locations if necessary
  ];

  return (
    <div className="bg-gray-900 h-full">
      {/* <div className="grid grid-cols-2 gap-4 h-[60vh]">
        Left element
        <div ref={leftElement.ref} className={leftElement.classes}>
          <h2 className="text-center">Left Section Animates!</h2>
        </div>

        Right element
        <div ref={rightElement.ref} className={rightElement.classes}>
          <h2 className="text-center">Right Section Animates!</h2>
        </div>

        Up element
        <div ref={upElement.ref} className={upElement.classes}>
          <h2 className="text-center">Up Section Animates!</h2>
        </div>

        Down element
        <div ref={downElement.ref} className={downElement.classes}>
          <h2 className="text-center">Down Section Animates!</h2>
        </div>

        <div ref={zoomInElement.ref} className={zoomInElement.classes}>
          <h2 className="text-center text-2xl font-bold">Mohan Lanke</h2>
        </div>
      </div>
      <br />
      <br /> */}
      {/* landing section  */}
      <div className="w-full h-80 md:h-[calc(100vh-72px)] relative overflow-hidden">
        <img
          className="h-full w-full object-cover"
          src="https://cdn-rio.dataweavers.io/-/media/content/images/news/rt-mining-pit.jpg?rev=5f747b008b624ebc848dd421004f0965&w=1920&hash=4087A1C934DD418C203734373713F55E"
          alt="mining site"
        />

        <div className="absolute w-full h-full top-0 md:top-56 md:left-16 flex flex-col gap-4 items-center justify-center md:items-start md:justify-start">
          <p className="uppercase text-sm text-gray-800 font-semibold tracking-widest">
            Introducing Saravapex
          </p>
          <h2 className="md:text-5xl text-2xl font-bold leading-normal text-center md:text-left">
            The Best Mining <br /> for the Digital Age
          </h2>

          <button
            type="button"
            className="uppercase text-white bg-orange-400 max-w-40 hover:bg-orange-800 focus:ring-2 focus:ring-orange-300 rounded-lg text-xs md:text-sm px-5 py-2.5 focus:outline-none"
          >
            Request a Demo
          </button>
        </div>
      </div>

      {/* about us  */}
      <section className="text-white py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-8 md:px-16">
          {/* Image Box */}
          <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0 px-5">
            <div className="w-full h-64 md:h-80 bg-orange-400 border-4 border-white"></div>
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 text-left px-5">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-[2px] bg-white"></div>
              <h2 className="text-xl md:text-3xl font-semibold text-white">
                About Us - <span className="!text-orange-600">SaravApex</span>
              </h2>
            </div>
            <p className="text-sm font-normal text-gray-300 md:pl-14 text-justify mb-4">
              At SaravApex, we take pride in being a trusted global producer and
              supplier of quartz and other industrial minerals. We specialize in
              the excavation, refinement, sourcing, processing and export of
              minerals tailored to meet the specific needs of diverse industries
              worldwide. With vast reserves, we consistently deliver
              high-quality minerals in both processed and lump forms, ensuring
              timely service for our domestic and international customers.
            </p>
            <a
              href="#"
              className="text-orange-500 font-semibold hover:underline md:pl-14"
            >
              View More
            </a>
          </div>
        </div>
      </section>

      {/* locations section  */}
      <section>
        <div className="relative w-full h-full ">
          {/* Map image */}
          <img
            src={world_map}
            alt="World Map"
            className="w-full h-auto"
          />

          {/* Pin points */}
          {locations.map((location) => (
            <div
              key={location.id}
              className="absolute"
              style={{ top: location.top, left: location.left }}
              onMouseEnter={() => setHoveredLocation(location.id)}
              onMouseLeave={() => setHoveredLocation(null)}
            >
              <div className="relative">
                {/* Pin */}
                <div className=" rounded-full flex items-center justify-center">
                  <span className="text-white">
                    <svg
                      class="w-6 h-6 text-red-800 dark:text-white animate-bounce"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                </div>

                {/* Tooltip card on hover */}
                {hoveredLocation === location.id && (
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 p-4 w-64 bg-blue-500 text-white text-sm rounded-lg shadow-lg z-10">
                    <h3 className="font-bold">{location.name}</h3>
                    <p>{location.details}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* number animation  */}
      <section className="px-4 py-8 md:py-16">
        <div className="md:w-11/12 mx-auto">
          <div className="grid md:grid-cols-4 grid-cols-2 md:gap-4 gap-y-4">
            {numCount.map((item) => (
              <>
                <div
                  key={item.id}
                  className="flex flex-col items-center md:items-center"
                >
                  <p className="text-3xl text-white font-bold flex items-center gap-x-2">
                    <NumberAnimation value={item.count} /> {item.addOn}
                  </p>
                  <p className="text-lg text-gray-300 font-semibold">
                    {item.title}
                  </p>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>  

      {/* vision and mission */}
      <section className="bg-transparent h-full">
        <div className="md:w-9/12 lg:7/12 h-screen md:h-96 p-4 mx-auto grid md:grid-cols-2 gap-2 md:mt-16">
          <div className="bg-[#D4E3DD] rounded-md border border-green-400 md:relative flex flex-col items-center justify-center p-4 md:p-2">
            <div className="md:absolute md:-top-16 flex flex-col gap-4 items-center">
              <div className="h-64 bg-orange-300 w-8/12 rounded-lg  "></div>
              <div className="w-8/12 !text-center">
                <p className="text-sm font-medium text-gray-900">Vision</p>
                <p className="text-sm font-normal text-gray-900">
                  To be the leading global provider of Minerals, recognized for
                  our commitment to excellent customer satisfaction and
                  sustainable.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#D6E2E6] rounded-md border border-blue-400 md:relative flex flex-col items-center justify-center p-4 md:p-2">
            <div className="md:absolute md:-top-16 flex flex-col gap-4 items-center">
              <div className="h-64 bg-orange-300 w-8/12 rounded-lg  "></div>
              <div className="w-8/12 !text-center">
                <p className="text-sm font-medium text-gray-900">Vision</p>
                <p className="text-sm font-normal text-gray-900">
                  To be the leading global provider of Minerals, recognized for
                  our commitment to excellent customer satisfaction and
                  sustainable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>      

      {/* core values  */}
      <section className="card px-0 pt-8 md:pt-16">
        <div className="my-8 lg:w-9/12 mx-auto overflow-hidden">
          <Slider
            {...settings}
            onMouseEnter={() => setAutoplay(false)} // Pause autoplay on hover
            onMouseLeave={() => setAutoplay(true)} // Resume autoplay when mouse leaves
          >
            {items.map((item, index) => (
              <div
                key={index}
                className="flex justify-center items-center h-32 "
              >
                <div className="card text-center bg-whitem-2 h-full w-9/12 rounded-lg border border-solid shadow-lg group cursor-pointer">
                  {/* Text wrapper */}
                  <div className="relative h-full w-full flex justify-center items-center overflow-hidden ">
                    {/* Single character */}
                    <span className="absolute group-hover:hidden group-hover:opacity-0 opacity-100  transition-opacity duration-500 text-4xl font-bold text-gray-300">
                      {item.shortText}
                    </span>
                    {/* Full text on hover */}
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity  text-sm text-gray-300 font-normal">
                      {item.fullText}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* customer testimonial  */}
      <section className="pt-8 md:pt-16">
        <div className="w-11/12 md:flex mx-auto">
          <div className="md:w-4/12"></div>
          <div className="md:w-8/12 pb-5 relative">
            <div className="flex gap-4 items-center mb-3">
              <div className="w-12 h-[2px] bg-white"></div>
              <p className="text-xl md:text-3xl text-white">What our customer says</p>
            </div>

            <div className="pl-14">
              <Slider {...testimonial_settings}>
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="flex flex-col items-center pl-2">
                    {/* Testimonial Quote */}
                    <p className="text-sm md:text-lg text-gray-300 !font-normal mb-4 w-10/12">
                      {`"${testimonial.quote}"`}
                    </p>

                    {/* Author Info */}
                    <div className="text-sm md:text-lg text-gray-300 font-semibold  mt-4">
                      {testimonial.author}{" "}
                      <span className="text-sm font-medium text-gray-300">- {testimonial.position}</span>
                    </div>

                    {/* Move dots below this */}
                  </div>
                ))}
              </Slider>
            </div>

            {/* Quote Icon */}
            <div className="absolute bottom-0 right-10 md:right-44 text-orange-500 opacity-80">
              <FaQuoteLeft size={60} />
            </div>
          </div>
        </div>
      </section>

      
      {/* video section  */}
      <section className="w-full h-[400px] bg-black flex justify-center items-center mt-8 md:mt-16">
        {!isPlaying ? (
          <button
            onClick={handlePlayClick}
            className="bg-white w-16 h-16 rounded-full flex justify-center items-center focus:outline-none"
          >
            <svg
              className="w-8 h-8 text-black"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        ) : (
          <video
            className="w-full h-full"
            src={videoSrc} // Use the local video file
            controls
            autoPlay
          />
        )}
      </section>
 
      <div className="h-56"></div>
    </div>
  );
};

export default OurStory;
