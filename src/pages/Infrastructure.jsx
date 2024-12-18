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
import InfraB from "../assets/infrastructure_B.mp4"
import InfraC from "../assets/infrastructure_C.mp4"
import { useNavigate } from 'react-router-dom';




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
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false
  };



  const InfraData = [
    {
      id: 1,
      Home_Video: InfraA,
      text: 'From Mines to Markets: Infrastructure That Powers Global Quartz Solutions'
    },
    {
      id: 2,
      Home_Video: InfraB,
      text: 'The Perfect Fusion of Art and Engineering'
    },
    {
      id: 3,
      Home_Video: InfraC,
      text: 'Engineered for Excellence – Where Quartz Meets Precision in Infrastructure'
    }
  ]





  return (
    <div className="bg-[#1D2124]">
      {/* <div className="w-full h-80 md:h-[calc(100vh-72px)] relative overflow-hidden flex items-center justify-center">
        <img
          className="h-full w-full object-cover"
          src="https://cdn-rio.dataweavers.io/-/media/content/images/news/rt-mining-pit.jpg?rev=5f747b008b624ebc848dd421004f0965&w=1920&hash=4087A1C934DD418C203734373713F55E"
          alt="mining site"
        />

        <div className="absolute w-full h-full flex flex-col gap-4 items-center justify-center items-center">
          <FadeIn>
            <p className="uppercase text-sm text-black font-semibold tracking-widest ">
              Introducing Saravapex
            </p>
          </FadeIn>
          <ZoomIn>
            <h2 className="md:text-7xl text-2xl font-bold leading-normal text-center md:text-left ">
              The Best Mining for the
            </h2>
          </ZoomIn>
          <ZoomIn>
            <h2 className="md:text-7xl text-2xl font-bold leading-normal text-center md:text-left ">
              Digital Age
            </h2>
          </ZoomIn>
          <FadeUp>
            <button
              type="button"
              className=" mt-3 uppercase text-white bg-orange-400 max-w-40 focus:ring-2 focus:ring-orange-300 rounded-lg text-xs md:text-sm px-5 py-2.5 focus:outline-none"
            >
              Request a Demo
            </button>
          </FadeUp>
        </div>
      </div> */}
      <div className="W-full">
        <Slider {...Video_settings}>
          {InfraData.map((video) => (
            <div key={video.id} className="relative">
              <video style={{ height: '30rem' }}
                className="w-full object-cover"
                src={video.Home_Video}
                autoPlay
                loop
                muted
                playsInline
              ></video>
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-center">
                  <ZoomIn><span className=" md:text-4xl text-white font-bold leading-normal text-2xl">{video.text}</span></ZoomIn>
                  <FadeUp>
                    <button type="button" className="mt-3 uppercase text-white bg-orange-400 max-w-30 focus:ring-2 focus:ring-orange-300 rounded-lg text-xs md:text-sm px-5 py-2.5 focus:outline-none"
                      onClick={() => { navigate("/contact-us") }} >
                      Request a Demo
                    </button>
                  </FadeUp>
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <section className="flex md:flex-row flex-col gap-2 py-16">
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
          {/* <p className="text-center text-gray-300 text-xl md:text-3xl uppercase border-b">
            Infrastructre
          </p> */}
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default Infrastructure;
