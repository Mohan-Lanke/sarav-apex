import React from 'react';
import Marquee from 'react-fast-marquee';
import '../styles/Scale.css'; // Make sure this path is correct for your project

const ScaleComponent = () => {
  const values = [
    { letter: 'S', title: 'Sustain', description: 'We focus on sustainable practices for a better future.', color: 'text-green-600' },
    { letter: 'C', title: 'Customer Focus', description: 'We prioritize our customers in everything we do.', color: 'text-blue-600' },
    { letter: 'A', title: 'Adapt', description: 'We adapt to changes swiftly and effectively.', color: 'text-yellow-500' },
    { letter: 'L', title: 'Lead', description: 'We lead by example and inspire others.', color: 'text-pink-600' },
    { letter: 'E', title: 'Excel', description: 'We strive for excellence in all our endeavors.', color: 'text-purple-600' },
  ];

  return (
    <div className="overflow-hidden py-5 w-10/12 mx-auto">
      <Marquee pauseOnHover={true} gradient={false}>
        {values.map((value, index) => (
          <div
          key={index}
          className="flex-none border border-gray-200 bg-gray-300 group flex items-center justify-center rounded-lg shadow-lg p-4 m-4 w-48 h-48 md:w-64 w-48 h-48 md:h-64 transition-transform transform cursor-pointer"
        >
          <div className="relative flex items-center justify-center h-full w-full">
            <div
              className={`absolute text-5xl md:text-8xl font-bold ${value.color} group-hover:scale-75 group-hover:opacity-0 transition-transform transition-opacity duration-500 ease-in-out`}
            >
              {value.letter}
            </div>
            <div
              className="absolute flex flex-col items-center justify-center text-center opacity-0 transform scale-0 group-hover:scale-100 group-hover:opacity-100 transition-transform transition-opacity duration-300 ease-in-out"
            >
              <h3 className="text-lg font-semibold mt-2">{value.title}</h3>
              <p className="text-center text-gray-600">{value.description}</p>
            </div>
          </div>
        </div>
        ))}
        {values.map((value, index) => (
          <div
          key={index}
          className="flex-none border border-gray-200 bg-gray-300 group flex items-center justify-center rounded-lg shadow-lg p-4 m-4 w-48 h-48 md:w-64 w-48 h-48 md:h-64 transition-transform transform cursor-pointer"
        >
          <div className="relative flex items-center justify-center h-full w-full">
            <div
              className={`absolute text-5xl md:text-8xl font-bold ${value.color} group-hover:scale-75 group-hover:opacity-0 transition-transform transition-opacity duration-300 ease-in-out`}
            >
              {value.letter}
            </div>
            <div
              className="absolute flex flex-col items-center justify-center text-center opacity-0 transform scale-0 group-hover:scale-100 group-hover:opacity-100 transition-transform transition-opacity duration-300 ease-in-out"
            >
              <h3 className="text-lg font-semibold mt-2">{value.title}</h3>
              <p className="text-center text-gray-600">{value.description}</p>
            </div>
          </div>
        </div>
        ))}
      </Marquee>
    </div>
  );
};

export default ScaleComponent;
