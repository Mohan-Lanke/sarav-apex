import React from 'react';
import Marquee from 'react-fast-marquee';
// import '../styles/Scale.css'; // Make sure this path is correct for your project

import constr_chem from "../assets/industries/constr_Chem.jpg";
import electronics from "../assets/industries/electronics.jpeg";
import glass from "../assets/industries/glass.jpeg";
import painting from "../assets/industries/painting.jpeg";
import rubber from "../assets/industries/Rubber.jpg";
import solar_modules from "../assets/industries/solar_modules.jpeg";
import tiles from "../assets/industries/tiles.jpeg";
import pestiside_coating from "../assets/industries/pestiside_coating.jpeg";
import ferro from "../assets/industries/ferro.jpeg";
import ceramic from "../assets/industries/Ceramic.jpg";




const Products_slider = () => {
    const values = [
        { letter: ceramic, title: 'Alloys', description: 'We focus on sustainable practices for a better future.' },
        { letter: ferro, title: 'Foundery industry  ', description: 'We lead by example and inspire others.' },
        { letter: constr_chem, title: 'Construction Chemicals', description: 'We prioritize our customers in everything we do.' },
        { letter: electronics, title: 'Electronic industry', description: 'We adapt to changes swiftly and effectively.' },
        { letter: glass, title: 'Glass Manufacturing', description: 'We strive for excellence in all our endeavors.' },
        { letter: painting, title: 'Paints & Coating', description: 'We strive for excellence in all our endeavors.' },
        { letter: pestiside_coating, title: 'Water Filteration  ', description: 'We strive for excellence in all our endeavors.' },
        { letter: rubber, title: 'Rubber Industry', description: 'We strive for excellence in all our endeavors.' },
        { letter: solar_modules, title: 'Solar Modules', description: 'We strive for excellence in all our endeavors.' },
        { letter: tiles, title: 'Tile Industry', description: 'We strive for excellence in all our endeavors.' },
    ];

    return (
        <div className="overflow-hidden py-5 w-10/12 mx-auto">
            <Marquee pauseOnHover={true} gradient={false}>
                {values.map((value, index) => (
                    <div
                        key={index}
                        className="flex-none border-none group flex items-center justify-center rounded-lg p-4 m-4 w-48 h-48 md:w-64 md:h-64 transition-transform transform cursor-pointer"
                    >
                        {/* Image container with hover blur */}
                        <div className="relative flex items-center justify-center h-full w-full overflow-hidden bg-gray-900 rounded-lg">
                            <img
                                src={value.letter}
                                alt=""
                                className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:opacity-60"
                                style={{
                                    display: "block",
                                }}
                            />
                            {/* Text on hover */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-transform transition-opacity duration-300 ease-in-out">
                                <h3
                                    className="text-lg font-semibold mt-2 text-white"
                                    style={{ fontFamily: "Rubik, sans-serif" }}
                                >
                                    {value.title}
                                </h3>
                            </div>
                        </div>
                    </div>
                ))}
            </Marquee>
        </div>
    );
};

export default Products_slider;
