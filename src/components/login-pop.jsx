import React, {useState, useEffect, useRef} from "react";
import { MdCancel } from "react-icons/md";

import { Login } from './login';
import { Register } from './signup';
import { SignUpPop } from "./signup-pop";
import { PopupLogin } from "./popup-signup";


import BgImage from '../assets/car24.jpg'
import GOOGLE_ICON from '../assets/google.jpg';

const colors = {
    primary: '#060606',
    background: '#E0E0E0',
    disabled: '#D9D9D9'
}

export const LoginPop = ({onClose}) => {
    const [showSignUp, setShowSignUp] = useState(false)
    const loginRef = useRef();

    const closeLogin = (e) => {
        if (loginRef.current === e.target){
            onClose();
        }
    }
    const handleSignUpClick = () => {
        setShowSignUp(true); // Open the sign up form
        onClose(); // Close the login popup
    };

    return(
        <div ref={loginRef} onClick={closeLogin} className="fixed inset-0 bg-black text-white bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            <div className="w-1/2 h-3/2 flex items-start">
            <button onClick={onClose} className="absolute top-4 right-4 text-2xl"><MdCancel/></button>
            <div className="w-1/2 h-full bg-[#f5f5f5] flex flex-col p-20 justify-between items-center">
                <h1 className="text-xl text-[#060606] font-semibold">RIGHT-RENTAL</h1>
                <div className="w-full flex flex-col max-w-[500px]">
                    <div className="w-full flex flex-col mb-2">
                        <h3 className="text-3xl font-semibold mb-2 text-black">Login</h3>
                        <p className="text-base mb-2 text-black">Welcome Back! Please enter your details.</p>
                    </div> 
                    <div className="w-full flex flex-col">
                        <input type = "email" placeholder = "Email" className="w-full text-black py-4 my-4 bg-transparent border-b border-black outline-none focus:outline-none" />
                        <input type = "password" placeholder = "Password" className="w-full text-black py-4 my-4 bg-transparent border-b border-black outline-none focus:outline-none" />
                    </div>
                    <div className="w-full flex items-center justify-between">
                        <div className="w-full flex items-center">
                            <input type="checkbox" className="w-4 h-4 mr-2" />
                            <p className="text-sm text-black">Remember Me</p>
                        </div>
                        <p className="text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2 text-black">Forgot Password</p>
                    </div>
                    <div className="w-full flex flex-col">
                        <button className="w-full text-white my-2 bg-[#060606] rounded-md p-4 text-center font-semibold flex items-center justify-center cursor-pointer">
                            Log In
                        </button>
                        <button className="w-full text-black my-2 bg-white border border-black rounded-md p-4 text-center font-semibold flex items-center justify-center cursor-pointer">
                            Register
                        </button>
                    </div>
                    <div className="w-full flex items-center justify-center relative py-2">
                        <div className="w-full h-[1px] bg-black/40"></div>
                        <p className="text-lg absolute text-black/80 bg-[#f5f5f5]">or</p>
                    </div>
                    <button className="w-full text-black my-2 bg-white border border-black/40 rounded-md p-4 text-center font-semibold flex items-center justify-center cursor-pointer">
                           <img src={GOOGLE_ICON} className="h-6 mr-2" /> Sign In with Google
                        </button>
                </div>
                <div className="w-full flex items-center justify-center">
                    <p className="text-sm font-normal text-[#060606]">Don't have an account? <span onClick={() => 
                        setShowSignUp(true)
                    } className="font-semibold underline underline-offset-2 cursor-pointer">Sign up for free</span></p>
                    {showSignUp && <SignUpPop onClose={() => setShowSignUp(false)} />}
                </div>
            </div>
        </div>
        </div>
    )
}