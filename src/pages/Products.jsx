import React, { useState, useEffect, useRef } from "react";
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
import { useNavigate, useParams } from "react-router-dom";
import ceramic from "../assets/industries/Ceramic.jpg";
import constr_chem from "../assets/industries/constr_Chem.jpg";
import electronics from "../assets/industries/electronics.jpeg";
import ferro from "../assets/industries/ferro.jpeg";
import glass from "../assets/industries/glass.jpeg";
import painting from "../assets/industries/painting.jpeg";
import pestiside_coating from "../assets/industries/pestiside_coating.jpeg";
import rubber from "../assets/industries/Rubber.jpg";
import solar_modules from "../assets/industries/solar_modules.jpeg";
import tiles from "../assets/industries/tiles.jpeg";
import ProductA from "../assets/product_A.mp4"
import Chip from "../assets/product_chips.jpg";
import Gritz from "../assets/product_gritz.jpg";
import Lump from "../assets/product_lump.jpeg";
import Sand from "../assets/product_sand.jpg";

const Products = () => {
  const [showMore, setShowMore] = useState(false);
  const handleToggle = () => {
    setShowMore(!showMore);
  };
  const params = useParams();
  const navigate = useNavigate();
  console.log(params);
  const [activeTab, setActiveTab] = useState("quartz_lumps");
  useEffect(() => {
    if (params.id) {
      setActiveTab(params.id);
      handleTabClick(params.id);
      if (tabRefs.current[params.id]) {
        tabRefs.current[params.id].scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }, [params]);
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    if (tabRefs.current[tabId]) {
      tabRefs.current[tabId].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  const tabRefs = useRef({});
  const products = [
    { id: 1, img: ceramic },
    { id: 2, img: constr_chem },
    { id: 3, img: electronics },
    { id: 4, img: ferro },
    { id: 5, img: glass },
    { id: 6, img: painting },
    { id: 7, img: pestiside_coating },
    { id: 8, img: rubber },
    { id: 9, img: solar_modules },
    { id: 10, img: tiles },
  ];
  const displayedProducts = showMore ? products : products.slice(0, 5);

  const tabs = [
    {
      id: "quartz_lumps",
      label: "Quartz Lumps",
      content:
        "We focus on delivering high quality and consistency. Our quartz is carefully sourced from certified mines and undergoes strict quality checks to ensure its purity and precision. Using modern processing methods and following global standards, we provide different grades of quartz to meet the needs of our domestic and international clients, every time.",
    },
    {
      id: "quartz_grits",
      label: "Quartz Grits",
      content:
        "we pride ourselves on our extensive export expertise in the global quartz market. Our dedicated team ensures that our high-quality quartz products meet the diverse needs of clients across countries such as China, Malaysia, Vietnam, Korea, Japan, Bhutan, Thailand, the USA, Bangladesh, and the UAE. With a robust logistics network and a commitment to customer satisfaction, we deliver unparalleled service and reliability. Partner with us to experience excellence in quartz trading on a global scale. Your trusted source for quality quartz awaits!",
    },
    {
      id: "quartz_chips",
      label: "Quartz Chips",
      content:
        "We focus on giving you great value for your money with top-quality quartz products at fair prices. Our transparent pricing means you get the best deals without any surprises. Your satisfaction is our top priority, and we love seeing our customers come back for more because they trust us. When you choose us as your quartz supplier, you're not just making a purchase—you're building a partnership. Let us help you find exactly what you need!",
    },
    {
      id: "quartz_grains",
      label: "Quartz Grains",
      content:
        "Our robust supply chain and logistics ensure that quartz products are delivered on time, even in challenging situations. With a dedicated customer service team ready to assist, we prioritize communication and transparency, ensuring you stay informed every step of the way. Trust us to keep your projects on track, no matter the obstacles. Experience reliability and excellence in quartz trading with us.",
    },
    {
      id: "quartz_sands",
      label: "Quartz Sands",
      content:
        "we pride ourselves on our extensive export expertise in the global quartz market. Our dedicated team ensures that our high-quality quartz products meet the diverse needs of clients across countries such as China, Malaysia, Vietnam, Korea, Japan, Bhutan, Thailand, the USA, Bangladesh, and the UAE. With a robust logistics network and a commitment to customer satisfaction, we deliver unparalleled service and reliability. Partner with us to experience excellence in quartz trading on a global scale. Your trusted source for quality quartz awaits!",
    },
    {
      id: "raming_mass",
      label: "Raming mass",
      content:
        "We focus on giving you great value for your money with top-quality quartz products at fair prices. Our transparent pricing means you get the best deals without any surprises. Your satisfaction is our top priority, and we love seeing our customers come back for more because they trust us. When you choose us as your quartz supplier, you're not just making a purchase—you're building a partnership. Let us help you find exactly what you need!",
    },
  ];



  // const Video_settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 5000,
  //   arrows: false
  // };



  // const ProductData = [
  //   {
  //     id: 1,
  //     Home_Video: ProductA,
  //     text: 'Unlock the Potential of Quartz for Your Most Demanding Projects'
  //   },
  //   {
  //     id: 2,
  //     Home_Video: ProductB,
  //     text: 'Experience the True Potential of Quartz'
  //   },
  //   {
  //     id: 3,
  //     Home_Video: ProductC,
  //     text: 'Tailored for Every Need, Engineered for Every Industry'
  //   }
  // ]

  const Video_settings = {
    infinite: false, // Disable infinite scrolling
    slidesToShow: 1, // Show only one slide
    slidesToScroll: 1,
    dots: false, // Optional: Hide dots
    arrows: false, // Optional: Hide navigation arrows
  };




  return (
    <section className="bg-[#1D2124]">
      {/* Api through showing */}
      {/* <div className="W-full">
        <Slider {...Video_settings}>
          {ProductData.map((video) => (
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
      </div> */}


      <div className="W-full">
        <Slider {...Video_settings}>
          <div className="relative">
            <video
              style={{ height: '33rem' }}
              className="w-full object-cover"
              src={ProductA}
              autoPlay
              loop
              muted
              playsInline
            ></video>
            <div className="absolute inset-0 flex items-center justify-center" style={{ marginTop: '17%' }}>
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
            </div>
          </div>
        </Slider>
      </div>


      {/* <div className="w-full p-5 h-80 md:h-[calc(100vh-72px)] relative overflow-hidden bg-black text-white text-center flex flex-col justify-center items-center">
        <h1 className="md:text-5xl text-2xl font-bold mb-4 md:mb-8">
          <ZoomIn>Quartz Solutions That Bring Your Vision to Life.</ZoomIn>
        </h1>
        <p className="md:text-lg text-sm mb-4">
          <ZoomIn>
            Reverses signs of aging by improving the inner structure of your
            skin. Bye wrinkles. Ciao sun damage.
          </ZoomIn>
        </p>
        <button className="bg-white text-sm text-black px-4 py-1.5 md:px-6 md:py-3 rounded-lg hover:bg-gray-200">
          <ZoomIn>See All Products</ZoomIn>
        </button>
        <div ref={(el) => (tabRefs.current[params.id] = el)}></div>
      </div> */}

      {/* <section className="pt-8 w-10/12 mx-auto">
        <div>
          <div className="mb-4 items-center justify-between whitespace-nowrap overflow-hidden w-full md:flex md:w-auto md:order-1">
            <ul
              className="scroll-smooth mx-auto flex font-normal overflow-y-auto pb-1 lg:font-medium md:flex-row space-x-2 lg:space-x-8 scroll-style [&amp;::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
              role="tablist"
            >
              {tabs.map((tab) => (
                <li key={tab.id} className="me-2" role="presentation">
                  <button
                    className={`inline-block p-4 border-b-2 rounded-t-lg ${
                      activeTab === tab.id
                        ? "border-orange-600 text-orange-600"
                        : "hover:text-gray-300 hover:border-gray-300 text-gray-300 dark:hover:text-gray-300"
                    }`}
                    id={`${tab.id}-tab`}
                    type="button"
                    role="tab"
                    aria-controls={tab.id}
                    aria-selected={activeTab === tab.id}
                    onClick={() => handleTabClick(tab.id)}
                  >
                    {tab.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div id="default-tab-content" className="lg:w-9/12 mx-auto">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={`rounded-lg ${
                  activeTab === tab.id ? "block" : "hidden"
                }`}
                id={tab.id}
                role="tabpanel"
                aria-labelledby={`${tab.id}-tab`}
              >
                <div>
                  <div className="grid lg:grid-cols-3 grid-cols-2 flex items-center gap-4 py-5 px-4 md:px-0">
                    <div className="rounded-2xl flex items-center justify-center image-content cursor-pointer lg:mb-0 justify-center lg:h-60 md:h-28 overflow-hidden">
                      <img
                        alt=""
                        className="max-w-full h-auto rounded-xl"
                        src="https://5.imimg.com/data5/ANDROID/Default/2020/11/AF/QP/KQ/63001820/product-jpeg-500x500.jpg"
                      />
                    </div>
                    <div className="sm:text-center lg:text-left col-span-2">
                      <h2 className="md:my-6 text-lg tracking-tight font-medium text-gray-300 sm:text-xl md:text-4xl"></h2>
                      <p className="text-gray-600 font-normal md:text-md text-md">
                        {tab.content}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <section className="md:w-10/12 mx-auto">
        <div id="quartz-chips" className="flex flex-col md:flex-row gap-2 pt-8 md:pt-12">
          <div className="basis-5/12">
            <div className="w-8/12 h-56 mx-auto bg-gray-300 rounded-xl">
              <img src={Chip} alt="" />
            </div>
            <p className="text-2xl text-orange-600 font-semibold text-center mt-4">Quartz Chips</p>
          </div>
          <div className="px-8 flex items-center justify-center basis-7/12">
            <p className="text-gray-400 font-normal md:text-md text-md text-justify">
              At SaravApex, we take pride in being a trusted global producer and
              supplier of quartz and other industrial minerals. We specialize in
              the excavation, refinement, sourcing, processing and export of
              minerals tailored to meet the specific needs of diverse industries
              worldwide. With vast reserves, we consistently deliver
              high-quality minerals in both processed and lump forms, ensuring
              timely service for our domestic and international
            </p>
          </div>
        </div>
        <div id="quartz-lumps" className="flex flex-col md:flex-row md:flex-row-reverse gap-2 pt-8 md:pt-12">
          <div className="basis-5/12">
            <div className="w-8/12 h-56 mx-auto bg-gray-300 rounded-xl">
              <img src={Lump} alt="" />
            </div>
            <p className="text-2xl text-orange-600 font-semibold text-center mt-4">Quartz Lumps</p>
          </div>
          <div className="px-8 flex items-center justify-center basis-7/12">
            <p className="text-gray-400 font-normal md:text-md text-md text-justify">
              At SaravApex, we take pride in being a trusted global producer and
              supplier of quartz and other industrial minerals. We specialize in
              the excavation, refinement, sourcing, processing and export of
              minerals tailored to meet the specific needs of diverse industries
              worldwide. With vast reserves, we consistently deliver
              high-quality minerals in both processed and lump forms, ensuring
              timely service for our domestic and international
            </p>
          </div>
        </div>
        <div id="quartz-grits" className="flex flex-col md:flex-row gap-2 pt-8 md:pt-12">
          <div className="basis-5/12">
            <div className="w-8/12 h-56 mx-auto bg-gray-300 rounded-xl">
              <img src={Gritz} alt="" />
            </div>
            <p className="text-2xl text-orange-600 font-semibold text-center mt-4">Quartz Grits</p>
          </div>
          <div className="px-8 flex items-center justify-center basis-7/12">
            <p className="text-gray-400 font-normal md:text-md text-md text-justify">
              At SaravApex, we take pride in being a trusted global producer and
              supplier of quartz and other industrial minerals. We specialize in
              the excavation, refinement, sourcing, processing and export of
              minerals tailored to meet the specific needs of diverse industries
              worldwide. With vast reserves, we consistently deliver
              high-quality minerals in both processed and lump forms, ensuring
              timely service for our domestic and international
            </p>
          </div>
        </div>
        <div id="quartz-sands" className="flex flex-col md:flex-row md:flex-row-reverse gap-2 pt-8 md:pt-12">
          <div className="basis-5/12">
            <div className="w-8/12 h-56 mx-auto bg-gray-300 rounded-xl">
              <img src={Sand} alt="" />
            </div>
            <p className="text-2xl text-orange-600 font-semibold text-center mt-4">Quartz Sands</p>
          </div>
          <div className="px-8 flex items-center justify-center basis-7/12">
            <p className="text-gray-400 font-normal md:text-md text-md text-justify">
              At SaravApex, we take pride in being a trusted global producer and
              supplier of quartz and other industrial minerals. We specialize in
              the excavation, refinement, sourcing, processing and export of
              minerals tailored to meet the specific needs of diverse industries
              worldwide. With vast reserves, we consistently deliver
              high-quality minerals in both processed and lump forms, ensuring
              timely service for our domestic and international
            </p>
          </div>
        </div>
      </section>


      <section className="p-4 pt-8 md:pt-16">
        <div className="md:w-10/12 mx-auto">
          <div className="flex items-center justify-between">
            <h2 className="text-white text-2xl">Industries</h2>
          </div>
          <div className="px-5 md:px-0 flex flex-col py-10">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {displayedProducts.map((product, index) => (
                <FadeUp>
                  <div
                    key={index}
                    className="bg-gray-200 h-32 w-full rounded-lg shadow flex items-center justify-center"
                  >
                    <img
                      src={product.img}
                      className="w-full h-full object-cover rounded-lg"
                      alt=""
                    />
                    {/* <p className="text-gray-800 font-normal text-sm text-center mt-2 p-1.5">
                  {product}
                </p> */}
                  </div>
                </FadeUp>
              ))}
            </div>
            <div className="mx-auto">
              <button
                onClick={handleToggle}
                className="text-orange-500 hover:underline mt-4"
              >
                {showMore ? "View less" : "View more"}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-8 md:pt-12">
        <div className="w-10/12 rounded-lg mx-auto p-5 h-80 md:h-[50vh] relative overflow-hidden bg-black text-white text-center flex flex-col justify-center items-center">
          <h1 className="md:text-3xl text-2xl font-bold mb-4 md:mb-8">
            <ZoomIn options={{ threshold: 0.3 }}>
              Transform Your Vision with Our Quartz
            </ZoomIn>
          </h1>
          <p className="text-sm mb-4 font-normal text-gray-300 md:w-10/12">
            <ZoomIn>
              At SaravApex, we take pride in being a trusted global producer and
              supplier of quartz and other industrial minerals. We specialize in
              the excavation, refinement
            </ZoomIn>
          </p>
          <FadeUp>
            <button
              onClick={() => {
                navigate("/contact-us");
              }}
              className="bg-white text-sm font-medium text-gray-700 text-black mt-2 px-4 py-1.5 md:px-6 md:py-2 rounded-lg hover:bg-gray-200"
            >
              Let's Connect
            </button>
          </FadeUp>
        </div>
      </section>

      <br />
    </section>
  );
};

export default Products;
