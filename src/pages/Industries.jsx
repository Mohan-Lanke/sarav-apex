import React, { useState } from "react";

const Industries = () => {
  const [showMore, setShowMore] = useState(false);
  const handleToggle = () => {
    setShowMore(!showMore);
  };
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

      <section className="p-4 pt-8 md:pt-16">
        <div className="md:w-10/12 mx-auto">
          <div className="flex items-center justify-between">
            <h2 className="text-white text-2xl">Trending Products</h2>
            {!showMore && (
              <button
                onClick={handleToggle}
                className="text-blue-500 hover:underline"
              >
                See everything
              </button>
            )}
          </div>
          <div className="px-5 md:px-0 flex flex-col py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <div className="bg-gray-200 h-64 w-full rounded-lg shadow flex items-center justify-center">
                  Raw Materials
                </div>
                <p className="text-gray-300 font-normal text-sm text-center mt-2">
                  Raw Materials
                </p>
              </div>
              <div>
                <div className="bg-gray-200 h-64 w-full rounded-lg shadow flex items-center justify-center">
                  Processing & Powder Plants
                </div>
                <p className="text-gray-300 font-normal text-sm text-center mt-2">
                  Processing & Powder Plants
                </p>
              </div>
              <div>
                <div className="bg-gray-200 h-64 w-full rounded-lg shadow flex items-center justify-center">
                  Processing Units
                </div>
                <p className="text-gray-300 font-normal text-sm text-center mt-2">
                  Processing Units
                </p>
              </div>
              <div>
                <div className="bg-gray-200 h-64 w-full rounded-lg shadow flex items-center justify-center">
                  Storage & Packing
                </div>
                <p className="text-gray-300 font-normal text-sm text-center mt-2">
                  Storage & Packing
                </p>
              </div>
              {showMore && (
                <>
                  <div>
                    <div className="bg-gray-200 h-64 w-full rounded-lg shadow flex items-center justify-center">
                      Raw Materials
                    </div>
                    <p className="text-gray-300 font-normal text-sm text-center mt-2">
                      Raw Materials
                    </p>
                  </div>
                  <div>
                    <div className="bg-gray-200 h-64 w-full rounded-lg shadow flex items-center justify-center">
                      Processing & Powder Plants
                    </div>
                    <p className="text-gray-300 font-normal text-sm text-center mt-2">
                      Processing & Powder Plants
                    </p>
                  </div>
                  <div>
                    <div className="bg-gray-200 h-64 w-full rounded-lg shadow flex items-center justify-center">
                      Processing Units
                    </div>
                    <p className="text-gray-300 font-normal text-sm text-center mt-2">
                      Processing Units
                    </p>
                  </div>
                  <div>
                    <div className="bg-gray-200 h-64 w-full rounded-lg shadow flex items-center justify-center">
                      Storage & Packing
                    </div>
                    <p className="text-gray-300 font-normal text-sm text-center mt-2">
                      Storage & Packing
                    </p>
                  </div>
                </>
              )}
            </div>
            <div className="mx-auto">
              {showMore && (
                <button
                  onClick={handleToggle}
                  className="text-blue-500 hover:underline"
                >
                  view less
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="pt-8 md:pt-16">
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

      <section className="pt-8 md:pt-16">
        <div className="flex items-center justify-center py-10">
          <div className="bg-white p-8 rounded-md shadow-lg w-full md:basis-10/12 flex flex-col lg:flex-row items-center justify-between">
            <div className="mb-6 lg:mb-0 lg:mr-6 md:text-center lg:text-left">
              <h3 className="text-sm text-gray-500 font-semibold uppercase">
                Award Winning Support
              </h3>
              <h2 className="text-2xl text-gray-900 font-bold mt-2">
                We’re here to help
              </h2>
              <p className="text-gray-500 mt-4">
                Body care with natural ingredients. Keep your body well-groomed
                and enjoy treatment services from us now and get a special
                discount.
              </p>
              <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-md flex items-center justify-center space-x-2 hover:bg-blue-600">
                <span>Get Started</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 12h14m-7-7l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
            <div className="mb-6 lg:mb-0 lg:mr-6 md:text-center lg:text-left h-48">
            <h3 className="text-sm text-gray-500 font-semibold uppercase">
            SUBSCRIBE TO OUR NEWSLETTER
              </h3>
              <div className="flex items-center space-x-2 mt-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                Subscribe
              </button>
            </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Industries;
