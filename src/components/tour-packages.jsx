import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdTimer, MdArrowBack,MdArrowForward  } from "react-icons/md";


const ReverseArrow = () => (
    <MdArrowBack className="h-6 w-6 text-white-600" />
);

const ForwardArrow = () => (
    <MdArrowForward className="h-6 w-6 text-white-600" />
);

const data = [
    {
        name: 'Pokhara',
        img: '../assets/car9.jpeg',
        fare: 'Rs. 25000',
        time: '5-days'
    },
    {
        name: 'Mustang',
        img: '../assets/car8.jpeg',
        fare: 'Rs. 25000',
        time: '15-days'
    },
    {
        name: 'ABC',
        img: '../assets/car7.jpeg',
        fare: 'Rs. 25000',
        time: '10-days'
    },
    {
        name: 'Tilicho',
        img: '../assets/car1.jpeg',
        fare: 'Rs. 25000',
        time: '8-days'
    },
    {
        name: 'Chitwan',
        img: '../assets/car2.jpeg',
        fare: 'Rs. 25000',
        time: '6-days'
    },
    {
        name: 'Dhulikhel',
        img: '../assets/car3.jpeg',
        fare: 'Rs. 25000',
        time: '5-days'
    }
]

// slider arrow
const NextArrow = ({ onClick }) => {
    return (
        <div
            className="absolute right-4 top-[50%] transform -translate-y-1/2 cursor-pointer text-white bg-black rounded-full p-2 shadow-lg z-10"
            onClick={onClick}
        >
            {/* ➔ */}
            <ForwardArrow />
        </div>
    );
};
const PrevArrow = ({ onClick }) => {
    return (
        <div
            className="absolute left-4 top-[50%] transform -translate-y-1/2 cursor-pointer text-white bg-black rounded-full p-2 shadow-lg z-10"
            onClick={onClick}
        >
            {/* ➔ */}
            <ReverseArrow />
        </div>
    );
};
export const TourPackages = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
      };
    return (
        <div className="w-full bg-white py-10 px-4">
            <div>
                <h1 className="md:text-4xl sm:text-6xl text-4xl font-bold md:py-2 text-center">TOUR PACKAGES</h1>
                <p className="text-[#00df9a] font-bold p-1 text-center">Discover unforgettable adventures with our curated tour packages designed to explore the world's hidden gems and vibrant cultures!</p>
            </div>
            <div className="w-3/4 m-auto">
                <div className="mt-20 relative">
                    <Slider {...settings}>
                    {data.map((d) => (
                        <div className="bg-white h-[400px] w-[400px] text-black rounded-xl mx-2 border border-gray-300 shadow-md p-2">
                        <div className="rounded-t-xl bg-indigo-500 flex justify-center items-center h-2/3">
                            <img src={d.img} alt="" className="object-cover h-full w-full"/>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-8 pb-8 px-4">
                            <div className="flex flex-col justify-between h-full">
                                <div>
                                    <p className="text-[#0e1815] font-extrabold">{d.name}</p>
                                    <p className="text-[#00df9a] font-bold">{d.fare}</p>
                                </div>
                            </div>
                            <div className="flex flex-col justify-between h-full">
                                <div className="flex items-center text-gray-600 alig">
                                    <MdTimer className="mr-2" />
                                    <span>{d.time}</span>
                                </div>
                                <button className="bg-black text-[#00df9a] w-full rounded-md font-medium py-3 hover:bg-gray-800 transition">Buy Now</button>
                            </div>
                        </div>
                    </div>   
                    ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}
