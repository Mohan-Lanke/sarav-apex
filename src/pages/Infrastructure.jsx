import React, { useState, useEffect } from "react";
import {
  FadeIn,
  FadeOut,
  FadeLeft,
  FadeRight,
  FadeUp,
  FadeDown,
  ZoomIn,
  ZoomOut,
} from "../Common/animations";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import InfraA from "../assets/infrastructure_A.mp4"
import { useNavigate } from 'react-router-dom';
import Lab from "../assets/lab.png";
import Mines from "../assets/mines.png";
import Process from "../assets/processing.png";
import Raw from "../assets/raw_material.png";



const Infrastructure = () => {
  const navigate = useNavigate();

  const [isActiveId, setActiveId] = useState(1)
  const [getImg, setImg] = useState('https://catalog.wlimg.com/1/1135263/full-images/quartz-mines-3-3293443.jpg')
  const infastructure_data = [
    { id: 1, label: 'Mines', value: 'mines', img: 'https://catalog.wlimg.com/1/1135263/full-images/quartz-mines-3-3293443.jpg' },
    { id: 2, label: 'Raw Materials', value: 'raw materials', img: 'https://5.imimg.com/data5/ANDROID/Default/2020/11/AF/QP/KQ/63001820/product-jpeg-500x500.jpg' },
    { id: 3, label: 'Processing & Powder Plants', value: 'processing', img: 'https://5.imimg.com/data5/KO/GJ/MY-3680613/quartz-grinding-plant-500x500.jpg' },
    { id: 4, label: 'Lab', value: 'lab', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGssP25NuJ_lqchy8z_t_OyCsMpls0O4nZpg&s' },
    { id: 5, label: 'Processing Units', value: 'processing units', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFh04lpJBxMS9VW-RqaY8Tb9nl3a1Ii8gv0w&s' },
    { id: 6, label: 'Stocks', value: 'stocks', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0OonRz8o-6KFVntBR6Q6VTnf4N1i_YRSYWg&s' },
    { id: 7, label: 'Storage & Packing', value: 'storage', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0XII_46rbQQsy16vHi1qDJcdaFYcvzsTJlA&s' },
  ]

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  const toggleMenu = (id, path) => {
    console.log(id)
    console.log(path)
    setActiveId(id);
    setImg(path)
  };


  const Video_settings = {
    infinite: false, // Disable infinite scrolling
    slidesToShow: 1, // Show only one slide
    slidesToScroll: 1,
    dots: false, // Optional: Hide dots
    arrows: false, // Optional: Hide navigation arrows
  };



  return (
    <div className="bg-[#1D2124]">
      <div className="W-full">
        <Slider {...Video_settings}>
          <div className="relative">
            <video
              style={{ height: '33rem' }}
              className="w-full object-cover"
              src={InfraA}
              autoPlay
              loop
              muted
              playsInline
            ></video>
            {/* <div className="absolute inset-0 flex items-center justify-center" style={{ marginTop: '17%' }}>
              <FadeUp>
                <button
                  type="button"
                  className="mt-3 uppercase text-white bg-orange-400 max-w-30 focus:ring-2 focus:ring-orange-300 rounded-lg text-xs md:text-sm px-5 py-2.5 focus:outline-none"
                  onClick={() => {
                    navigate("/contact-us");
                  }}
                >
                  Request a Demo
                </button>
              </FadeUp>
            </div> */}
          </div>
        </Slider>
      </div>

      {/* <section className="flex md:flex-row flex-col gap-2 py-16">
        <div className="md:w-8/12 w-full mx-auto">
          <div class="container md:flex md:items-center md:justify-center mx-auto">
            <div class="w-10/12 mx-auto h-96">
              <img
                alt="Responsive Design"
                class="h-full object-cover rounded-3xl w-full"
                src={getImg}
              />
            </div>
          </div>
        </div>
        <div className="md:w-4/12 flex flex-col items-center p-5">
          <div className=" pt-2 w-full px-4 rounded-lg">
            {
              infastructure_data.map((item) => (<>
                <a
                  onClick={() => {
                    toggleMenu(item.id, item.img);
                  }}
                  className={` ${isActiveId == item.id ? 'text-orange-600' : 'text-gray-300'} block px-4 py-2 text-lg hover:text-orange-600 cursor-pointer rounded-lg`}
                >
                  ● {item.label}
                </a>
              </>))
            }
          </div>
        </div>
      </section> */}
      <section>
        <div className="W-full">
          <img src={Mines} alt="" />
          <img src={Lab} alt="" />
          <img src={Process} alt="" />
          <img src={Raw} alt="" />
        </div>
      </section>
    </div>
  );
};


{/* <a
              onClick={() => {
                toggleMenu("/products/quartz_grits");
              }}
              className="block px-4 py-2 text-gray-300 text-lg hover:text-orange-600 cursor-pointer rounded-lg"
            >
              ● Quartz Grits
            </a>
            <a
              onClick={() => {
                toggleMenu("/products/quartz_chips");
              }}
              className="block px-4 py-2 text-gray-300 text-lg hover:text-orange-600 cursor-pointer rounded-lg"
            >
              ● Quartz Chips
            </a>
            <a
              onClick={() => {
                toggleMenu("/products/quartz_grains");
              }}
              className="block px-4 py-2 text-gray-300 text-lg hover:text-orange-600 cursor-pointer rounded-lg"
            >
              ● Quartz Grains
            </a>
            <a
              onClick={() => {
                toggleMenu("/products/quartz_sands");
              }}
              className="block px-4 py-2 text-gray-300 text-lg hover:text-orange-600 cursor-pointer rounded-lg"
            >
              ● Quartz Sands
            </a>
            <a
              onClick={() => {
                toggleMenu("/products/raming_mass");
              }}
              className="block px-4 py-2 text-gray-300 text-lg hover:text-orange-600 cursor-pointer rounded-lg"
            >
              ● Raming mass
            </a> */}

export default Infrastructure;
