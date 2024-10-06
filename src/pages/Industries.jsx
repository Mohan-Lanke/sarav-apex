import React, { useState } from "react";
import UseAnimateInViewHook from "../reusable-hooks/UseAnimateInViewHook";
import { useParams } from "react-router-dom";

const Industries = () => {
  const [showMore, setShowMore] = useState(false);
  const leftElement = UseAnimateInViewHook("left");
  const rightElement = UseAnimateInViewHook("right");
  const upElement = UseAnimateInViewHook("down");
  const downElement = UseAnimateInViewHook("down");
  const zoomInElement = UseAnimateInViewHook("", "1500ms", true);
  const handleToggle = () => {
    setShowMore(!showMore);
  };
  const params = useParams()
  console.log(params)
  const [activeTab, setActiveTab] = useState("quartz_lumps");

  const products = [
    'Raw Materials',
    'Processing & Powder Plants',
    'Processing Units',
    'Storage & Packing',
    'Product 5',
    'Product 6',
    'Product 7',
    'Product 8',
    'Product 9',
    'Product 10',
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
        "Our robust supply chain and logistics ensure that quartz products are delivered on time, even in challenging situations. With a dedicated customer service team ready to assist, we prioritize communication and transparency, ensuring you stay informed every step of the way. Trust us to keep your projects on track, no matter the obstacles. Experience reliability and excellence in quartz trading with us.",
    },
    {
      id: "raming_mass",
      label: "Raming mass",
      content:
        "Our robust supply chain and logistics ensure that quartz products are delivered on time, even in challenging situations. With a dedicated customer service team ready to assist, we prioritize communication and transparency, ensuring you stay informed every step of the way. Trust us to keep your projects on track, no matter the obstacles. Experience reliability and excellence in quartz trading with us.",
    },
  ];

  return (
    <section className="bg-gray-900">
      <div className="w-full p-5 h-80 md:h-[calc(100vh-72px)] relative overflow-hidden bg-black text-white text-center flex flex-col justify-center items-center">
        <h1 className="md:text-5xl text-2xl font-bold mb-4 md:mb-8">
          Quartz Solutions That Bring Your Vision to Life.
        </h1>
        <p className="md:text-lg text-sm mb-4">
          Reverses signs of aging by improving the inner structure of your skin.
          Bye wrinkles. Ciao sun damage.
        </p>
        <button className="bg-white text-sm text-black px-4 py-1.5 md:px-6 md:py-3 rounded-lg hover:bg-gray-200">
          See All Products
        </button>
      </div>


      <section className="pt-8 w-10/12 mx-auto">
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
          <div id="default-tab-content" className="lg:w-9/12 mx-auto">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={` rounded-lg  ${
                  activeTab === tab.id ? "block" : "hidden"
                }`}
                id={tab.id}
                role="tabpanel"
                aria-labelledby={`${tab.id}-tab`}
              >
                <div>
          <div class="grid lg:grid-cols-3 grid-cols-1 gap-4 py-5 px-4 md:px-0">
            <div class="rounded-2xl flex items-center justify-center image-content cursor-pointer  lg:mb-0 justify-center lg:h-60 md:h-28 overflow-hidden">
              <img
                alt=""
                class="max-w-full h-auto rounded-xl"
                src="https://assets.growith.io/Industry/straunt/banners/AtithiGrillandBar_home_banner_42.png"
              />
            </div>
            <div class="sm:text-center lg:text-left col-span-2">
              <h2 class="md:my-6 text-lg tracking-tight font-medium text-gray-300 sm:text-xl md:text-4xl">
                Embark on a culinary journey
              </h2>

              <p class="text-gray-600 font-normal md:text-md text-md">
                {tab.content}
              </p>
            </div>
          </div>
        </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="p-4 pt-8 md:pt-12">
      <div className="md:w-10/12 mx-auto">
        <div className="flex items-center justify-between">
          <h2 className="text-white text-2xl">Trending Products</h2>
        </div>
        <div className="px-5 md:px-0 flex flex-col py-10">
          <div className="flex flex-wrap md:grid md:grid-cols-5 gap-4">
            {displayedProducts.map((product, index) => (
              <div
                key={index}
                className="flex-1 md:flex-none md:w-auto bg-gray-200 h-36 w-full rounded-lg shadow flex items-center justify-center"
              >
                
                <p className="text-gray-900 font-normal text-sm text-center mt-2">
                  {product}
                </p>
              </div>
            ))}
          </div>
          <div className="mx-auto">
            <button
              onClick={handleToggle}
              className="text-blue-500 hover:underline mt-4"
            >
              {showMore ? 'View less' : 'View more'}
            </button>
          </div>
        </div>
      </div>
    </section>

      <section className="pt-8 md:pt-12">
        <div className="w-10/12 rounded-lg mx-auto p-5 h-80 md:h-[50vh] relative overflow-hidden bg-black text-white text-center flex flex-col justify-center items-center">
          <h1 className="md:text-3xl text-2xl font-bold mb-4 md:mb-8">
            Transform Your Vision with Our Quartz
          </h1>
          <p className="text-sm mb-4 font-normal text-gray-300 md:w-10/12">
            At SaravApex, we take pride in being a trusted global producer and
            supplier of quartz and other industrial minerals. We specialize in
            the excavation, refinement
          </p>
          <button className="bg-white text-sm font-medium text-gray-700 text-black mt-2 px-4 py-1.5 md:px-6 md:py-2 rounded-lg hover:bg-gray-200">
            Start consultation
          </button>
        </div>
      </section>

      <br />

    </section>
  );
};

export default Industries;
