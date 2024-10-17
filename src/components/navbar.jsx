import React, {useState} from "react";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { PopupLogin } from "./popup-signup";
import { LoginPop } from "./login-pop";

import { Login } from '../components/login';
import { Register } from '../components/signup';

import { SignUpPop } from "./signup-pop";

export const Navbar = () =>{
    const [nav, setNav] = useState(false)
    const [showLogin, setShowLogin] = useState(false)
    const handleNav = () => {
        setNav(!nav);
    }
    return (
        <div className="flex justify-between items-center h-24 max-w-[1440px] mx-auto px-4 text-white">
            <h1 className="w-full text-3xl font-bold text-[#00df9a]">RIGHT-RENTAL</h1>
            <ul className="hidden md:flex cursor-pointer">
                <li className="p-4">Home</li>
                <li className="p-4">Hire</li>
                <li className="p-4">Partner</li>
                <li className="p-4">Blog</li>
                <li className="p-4">About</li>
                <li className="p-4">Contacts</li>
                <li onClick={() => setShowLogin(true)} className="p-4 bg-[#00df9a] py-2 rounded-md text-lg">SignIn</li>
                {showLogin && <LoginPop onClose={() => setShowLogin(false)} />}
            </ul>
            <div onClick={handleNav} className="block md:hidden">
                {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} /> }
            </div>
            <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
            <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">RIGHT-RENTAL</h1>
            <ul className="uppercase p-4 cursor-pointer">
                <li className="p-4 border-b border-gray-600">Home</li>
                <li className="p-4 border-b border-gray-600">Hire</li>
                <li className="p-4 border-b border-gray-600">Partner</li>
                <li className="p-4 border-b border-gray-600">Blog</li>
                <li className="p-4 border-b border-gray-600">About</li>
                <li className="p-4 border-b border-gray-600">Contacts</li>
                <li onClick={() => setShowLogin(true)} className="p-4 bg-[#00df9a] py-2 rounded-md text-lg">SignIn</li>
                {showLogin && <LoginPop onClose={() => setShowLogin(false)} />}
            </ul>
            </div>
        </div>
    )
}