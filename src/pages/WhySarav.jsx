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
import SaravA from "../assets/whysarav_A.mp4"
import { useNavigate } from 'react-router-dom';
import Quality from "../assets/Vector.svg"
import Export from "../assets/Vector-1.svg"
import Good from "../assets/Group.svg"
import Timely from "../assets/Group-1.svg"
import Team from "../assets/Vector-2.svg"
import Technical from "../assets/Group-2.svg"
import Environment from "../assets/Vector-3.svg"



const WhySarav = () => {
  const [activeTab, setActiveTab] = useState("Quality Assurance");
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);

  }, [])
  const tabs = [
    {
      id: "Quality Assurance",
      label: "Quality Assurance",
      content:
        "We focus on delivering high quality and consistency. Our quartz is carefully sourced from certified mines and undergoes strict quality checks to ensure its purity and precision. Using modern processing methods and following global standards, we provide different grades of quartz to meet the needs of our domestic and international clients, every time.",
    },
    {
      id: "Exports",
      label: "Exports",
      content:
        "we pride ourselves on our extensive export expertise in the global quartz market. Our dedicated team ensures that our high-quality quartz products meet the diverse needs of clients across countries such as China, Malaysia, Vietnam, Korea, Japan, Bhutan, Thailand, the USA, Bangladesh, and the UAE. With a robust logistics network and a commitment to customer satisfaction, we deliver unparalleled service and reliability. Partner with us to experience excellence in quartz trading on a global scale. Your trusted source for quality quartz awaits!",
    },
    {
      id: "Good Value for money",
      label: "Good Value for money",
      content:
        "We focus on giving you great value for your money with top-quality quartz products at fair prices. Our transparent pricing means you get the best deals without any surprises. Your satisfaction is our top priority, and we love seeing our customers come back for more because they trust us. When you choose us as your quartz supplier, you're not just making a purchase—you're building a partnership. Let us help you find exactly what you need!",
    },
    {
      id: "Timely Delivery",
      label: "Timely Delivery",
      content:
        "Our robust supply chain and logistics ensure that quartz products are delivered on time, even in challenging situations. With a dedicated customer service team ready to assist, we prioritize communication and transparency, ensuring you stay informed every step of the way. Trust us to keep your projects on track, no matter the obstacles. Experience reliability and excellence in quartz trading with us.",
    },
    {
      id: "Team of Industry Experts",
      label: "Team of Industry Experts",
      content:
        " logistics ensure that quartz products are delivered on time, even in challenging situations. With a dedicated customer service team ready to assist, we prioritize communication and transparency, ensuring you stay informed every step of the way. Trust us to keep your projects on track, no matter the obstacles. Experience reliability and excellence in quartz trading with us.",
    },
    {
      id: "Technical Support",
      label: "Technical Support",
      content:
        " logistics ensure that quartz products are delivered on time, even in challenging situations. With a dedicated customer service team ready to assist, we prioritize communication and transparency, ensuring you stay informed every step of the way. Trust us to keep your projects on track, no matter the obstacles. Experience reliability and excellence in quartz trading with us.",
    },
    {
      id: "Environmental Responsibility",
      label: "Environmental Responsibility",
      content:
        " logistics ensure that quartz products are delivered on time, even in challenging situations. With a dedicated customer service team ready to assist, we prioritize communication and transparency, ensuring you stay informed every step of the way. Trust us to keep your projects on track, no matter the obstacles. Experience reliability and excellence in quartz trading with us.",
    },
  ];


  const Video_settings = {
    infinite: false, // Disable infinite scrolling
    slidesToShow: 1, // Show only one slide
    slidesToScroll: 1,
    dots: false, // Optional: Hide dots
    arrows: false, // Optional: Hide navigation arrows
  };



  return (
    <div className="bg-[#0E1112] h-full">
      <div className="W-full">
        <Slider {...Video_settings}>
          <div className="relative">
            <video
              style={{ height: '33rem' }}
              className="w-full object-cover"
              src={SaravA}
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

      {/* <section className="pt-8 pb-12 w-10/12 mx-auto">
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
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div id="default-tab-content">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={`p-4 rounded-lg  ${
                  activeTab === tab.id ? "block" : "hidden"
                }`}
                id={tab.id}
                role="tabpanel"
                aria-labelledby={`${tab.id}-tab`}
              >
                <p className="md:w-9/12 mx-auto text-sm md:text-lg text-gray-300 dark:text-gray-400">
                  {tab.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* <section class="lg:py-16 md:py-12 py-8 relative">
        <div class="w-10/12 max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div class="w-full justify-start items-center md:gap-12 gap-5 grid grid-cols-1">
            <div class="flex flex-col items-center md:flex-row md:space-x-5 md:space-y-0 mx-auto p-3 relative rounded-xl space-y-3">
              <div class=" grid md:w-1/2 w-full">
                <FadeLeft duration={2} >
                <img
                  alt="image"
                  class="h-auto object-cover rounded-xl w-full"
                  src="https://assets.growith.io/Industry/straunt/banners/A_Celebration_of_Nature%27s_Beauty_.png"
                />
                </FadeLeft>
              </div>

              <div class=" flex flex-col md:w-1/2 p-3 space-y-2 w-full">
                <p class="lg:text-3xl text-gray-300 font-medium">
                  <FadeRight>Team of Industry Experts -</FadeRight>
                </p>

                <p class="lg:text-md text-gray-300 text-base pt-4">
                  <FadeRight>
                  SaravApex is powered by a team of experts in geology,
                  logistics, quality control, and trade compliance, ensuring
                  top-tier quartz products and reliable global delivery. Our
                  specialists in finance and legal services guarantee secure,
                  transparent transactions, while our technical advisors and
                  business development t eam offer custom solutions across
                  industries. Trust SaravApex for expert-driven, seamless quartz
                  trading worldwide.
                  </FadeRight>
                </p>
              </div>
            </div>

            <div class="flex flex-col items-center md:flex-row md:space-x-5 md:space-y-0 mx-auto p-3 relative rounded-xl space-y-3">
              <div class=" flex flex-col md:w-1/2 p-3 space-y-2 w-full">
                <h3 class="lg:text-3xl text-gray-300 font-medium">
                  <FadeLeft>
                  Technical Support -
                  </FadeLeft>
                </h3>

                <p class="lg:text-md text-gray-300 text-base pt-4">
                  <FadeLeft>
                  Our technical expertise optimizes extraction processes,
                  enhancing efficiency and minimizing waste for high-quality
                  quartz sourcing. We maintain rigorous quality control through
                  testing and analysis to protect product integrity. Technical
                  support includes equipment maintenance, reducing downtime and
                  boosting operational efficiency, along with staff training to
                  enhance safety and productivity.
                  </FadeLeft>
                </p>
                <p class="lg:text-md text-gray-300 text-base">
                  <FadeLeft>
                  This robust support enables SaravApex to swiftly address
                  challenges, minimizing disruptions. Together, we drive success
                  in the quartz industry.
                  </FadeLeft>
                </p>
              </div>
              <div class=" grid md:w-1/2 w-full">
              <FadeRight>
                <img
                  alt="image"
                  class="h-auto object-cover rounded-xl w-full"
                  src="https://assets.growith.io/Industry/straunt/banners/A_Touch_of_Artistic_Flair.png"
                />
              </FadeRight>
              </div>
            </div>

            <div class="flex flex-col items-center md:flex-row md:space-x-5 md:space-y-0 mx-auto p-3 relative rounded-xl space-y-3">
              <div class=" grid md:w-1/2 w-full">
                <FadeLeft>
                <img
                  alt="image"
                  class="h-auto object-cover rounded-xl w-full"
                  src="https://assets.growith.io/Industry/straunt/banners/Unwind_by_the_Serene_Sukhna_Lake.png"
                />
                </FadeLeft>
              </div>

              <div class=" flex flex-col md:w-1/2 p-3 space-y-2 w-full">
                <h3 class="lg:text-3xl text-gray-300 font-medium">
                  <FadeRight>
                  Environmental responsibility -
                  </FadeRight>
                </h3>

                <p class="lg:text-md text-gray-300 text-base">
                  <FadeRight>
                  At SaravApex, we prioritize environmental responsibility in
                  our quartz extraction and trading practices. We use
                  sustainable mining techniques to minimize ecological impact,
                  protect biodiversity, and manage resources efficiently. Our
                  efforts include pollution control, community engagement,
                  regulatory compliance, and land restoration post-mining. By
                  integrating these principles, we contribute to a healthier
                  planet while fulfilling industry needs.
                  </FadeRight>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="pt-12 pb-12 w-10/12 mx-auto">
        <div className="grid md:grid-cols-2 gap-4 md:gap-24">
          <div className="space-y-8">
            <FadeUp>
              <div className="flex items-center justify-start gap-4">
                <div className="bg-[#262626] rounded-lg" style={{ width: '47px' }}>
                  <img src={Quality} alt="" className="h-full p-2" />
                </div>
                <p className="text-1xl font-semibold text-gray-300" style={{ fontFamily: 'Rubik, sans-serif' }}>Quality Assurance</p>
              </div>
              <p className="text-sm text-gray-400 font-normal pt-4 md:pt-8" style={{ height: '200px', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                We focus on delivering high quality and consistency. Our quartz is carefully sourced from certified mines and undergoes strict quality checks to ensure its purity and precision. Using modern processing methods and following global standards, we provide different grades of quartz to meet the needs of our domestic and international clients, every time.              </p>
            </FadeUp>

            <FadeUp>
              <div className="flex items-center justify-start gap-4">
                <div className="bg-[#262626] rounded-lg" style={{ width: '47px' }}>
                  <img src={Export} alt="" className="h-full p-2" />
                </div>
                <p className="text-1xl font-semibold text-gray-300" style={{ fontFamily: 'Rubik, sans-serif' }}>Exports</p>
              </div>
              <p className="text-sm text-gray-400 font-normal pt-4 md:pt-8" style={{ height: '200px', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                we pride ourselves on our extensive export expertise in the global quartz market. Our dedicated team ensures that our high-quality quartz products meet the diverse needs of clients across countries such as China, Malaysia, Vietnam, Korea, Japan, Bhutan, Thailand, the USA, Bangladesh, and the UAE. With a robust logistics network and a commitment to customer satisfaction, we deliver unparalleled service and reliability. Partner with us to experience excellence in quartz trading on a global scale. Your trusted source for quality quartz awaits!
              </p>
            </FadeUp>

            <FadeUp>
              <div className="flex items-center justify-start gap-4">
                <div className="bg-[#262626] rounded-lg" style={{ width: '47px' }}>
                  <img src={Good} alt="" className="h-full p-2" />
                </div>
                <p className="text-1xl font-semibold text-gray-300" style={{ fontFamily: 'Rubik, sans-serif' }}>Good Value for Money</p>
              </div>
              <p className="text-sm text-gray-400 font-normal pt-4 md:pt-8" style={{ height: '200px', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                We focus on giving you great value for your money with top-quality quartz products at fair prices. Our transparent pricing means you get the best deals without any surprises. Your satisfaction is our top priority, and we love seeing our customers come back for more because they trust us. When you choose us as your quartz supplier, you're not just making a purchase—you're building a partnership. Let us help you find exactly what you need!              </p>
            </FadeUp>

            <FadeUp>
              <div className="flex items-center justify-start gap-4">
                <div className="bg-[#262626] rounded-lg" style={{ width: '47px' }}>
                  <img src={Timely} alt="" className="h-full p-2" />
                </div>
                <p className="text-1xl font-semibold text-gray-300" style={{ fontFamily: 'Rubik, sans-serif' }}>Timely Delivery</p>
              </div>
              <p className="text-sm text-gray-400 font-normal pt-4 md:pt-8" style={{ height: '200px', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                Our robust supply chain and logistics ensure that quartz products are delivered on time, even in challenging situations. With a dedicated customer service team ready to assist, we prioritize communication and transparency, ensuring you stay informed every step of the way. Trust us to keep your projects on track, no matter the obstacles. Experience reliability and excellence in quartz trading with us.
              </p>
            </FadeUp>
          </div>

          {/* Right Column: 3 Cards */}
          <div className="space-y-8">
            <FadeUp>
              <div className="flex items-center justify-start gap-4">
                <div className="bg-[#262626] rounded-lg" style={{ width: '47px' }}>
                  <img src={Team} alt="" className="h-full p-2" />
                </div>
                <p className="text-1xl font-semibold text-gray-300" style={{ fontFamily: 'Rubik, sans-serif' }}>Team of Industry Experts</p>
              </div>
              <p className="text-sm text-gray-400 font-normal pt-4 md:pt-8" style={{ height: '200px', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                SaravApex is powered by a team of experts in geology, logistics, quality control, and trade compliance, ensuring top-tier quartz products and reliable global delivery. Our specialists in finance and legal services guarantee secure, transparent transactions, while our technical advisors and business development team offer custom solutions across industries. Trust SaravApex for expert-driven, seamless quartz trading worldwide.
              </p>
            </FadeUp>

            <FadeUp>
              <div className="flex items-center justify-start gap-4">
                <div className="bg-[#262626] rounded-lg" style={{ width: '47px' }}>
                  <img src={Technical} alt="" className="h-full p-2" />
                </div>
                <p className="text-1xl font-semibold text-gray-300" style={{ fontFamily: 'Rubik, sans-serif' }}>Technical Support</p>
              </div>
              <p className="text-sm text-gray-400 font-normal pt-4 md:pt-8" style={{ height: '200px', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                Our technical expertise optimizes extraction processes, enhancing efficiency and minimizing waste for high-quality quartz sourcing. We maintain rigorous quality control through testing and analysis to protect product integrity. Technical support includes equipment maintenance, reducing downtime and boosting operational efficiency, along with staff training to enhance safety and productivity.

                This robust support enables SaravApex to swiftly address challenges, minimizing disruptions. Together, we drive success in the quartz industry.
              </p>
            </FadeUp>

            <FadeUp>
              <div className="flex items-center justify-start gap-4">
                <div className="bg-[#262626] rounded-lg" style={{ width: '47px' }}>
                  <img src={Environment} alt="" className="h-full p-2" />
                </div>
                <p className="text-1xl font-semibold text-gray-300" style={{ fontFamily: 'Rubik, sans-serif' }}>Environmental Responsibility</p>
              </div>
              <p className="text-sm text-gray-400 font-normal pt-4 md:pt-8" style={{ height: '200px', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                At SaravApex, we prioritize environmental responsibility in our quartz extraction and trading practices. We use sustainable mining techniques to minimize ecological impact, protect biodiversity, and manage resources efficiently. Our efforts include pollution control, community engagement, regulatory compliance, and land restoration post-mining. By integrating these principles, we contribute to a healthier planet while fulfilling industry needs.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

    </div>
  );
};

export default WhySarav;
