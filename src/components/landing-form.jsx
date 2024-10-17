import React from "react";
import {ReactTyped} from 'react-typed';
import BgImage from '../assets/car27.jpg';
import { MdOpacity } from "react-icons/md";

const bgImage = {
    backgroundImage: `url(${BgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    // height: '100vh',
    filter: `opacity(0.6)`
}


export const LandingForm = () => {
    return (
        <div className="flex justify-center p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-5xl">
          {/* First Card with Images */}
          <div className="bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-lg font-bold mb-4">Image Columns</h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex justify-center">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Image 1"
                  className="rounded-lg"
                />
              </div>
              <div className="flex justify-center">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Image 2"
                  className="rounded-lg"
                />
              </div>
              <div className="flex justify-center">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Image 3"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
  
          {/* Second Card with Form Inputs */}
          <div className="bg-white shadow-lg rounded-lg p-4">
    <h2 className="text-lg font-bold mb-4">Form Inputs</h2>
    <form className="grid grid-cols-2 gap-4">
        <input
            type="text"
            placeholder="Input 1"
            className="border rounded-lg p-2 w-full" // Use w-full for full width
        />
        <input
            type="text"
            placeholder="Input 2"
            className="border rounded-lg p-2 w-full" // Use w-full for full width
        />
        <input
            type="text"
            placeholder="Input 3"
            className="border rounded-lg p-2 w-full" // Use w-full for full width
        />
        <input
            type="text"
            placeholder="Input 4"
            className="border rounded-lg p-2 w-full" // Use w-full for full width
        />
        <button
            type="submit"
            className="col-span-2 bg-blue-500 text-white rounded-lg p-2 mt-4 hover:bg-blue-600 transition"
        >
            Submit
        </button>
    </form>
</div>

        </div>
      </div>
    )
}