import React, { useState } from "react";
import {ReactTyped} from 'react-typed';
import BgImage from '../assets/car21.jpg';
import { LandingForm } from "./landing-form";

const bgImage = {
    backgroundImage: `url(${BgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    // filter: `opacity(0.8)`
}

export const Base = () => {
    const [showForm, setShowForm] = useState(false)
    return(
        <main style={bgImage}>
            <div className="bg-image text-white">
                <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
                    <p className="text-[#00df9a] font-bold p-2">COME RIDE WITH US</p>
                    <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">WELCOME TO RIGHT-RENTAL</h1>
                    <div className="flex justify-center items-center">
                        <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">We Are</p>
                        <ReactTyped 
                        className="md:text-5xl sm:text-4xl text-xl font-bold pl-2"
                            strings={['Fast', 'Flexible', 'Reliable']} 
                            typeSpeed={120}
                            backSpeed={140}
                            loop 
                        />
                    </div>
                    <p className="md:text-2xl text-xl font-bold text-gray-500">Live Young Live Free</p>
                    <button onClick={() => {
                        setShowForm(true)
                    }} className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">Get Started</button>
                    {showForm && <LandingForm onClose={() => setShowForm(false)}/>}
                </div>
            </div>
        </main>
    )
}