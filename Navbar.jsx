// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Assets/lifelink.jpg';

const Navbar = () => {
    const [menu, setMenu] = useState("Home");
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="flex justify-between items-center px-12 py-4 bg-white shadow text-xl font-medium max-w-7xl mx-auto md:px-4 sm:px-6 lg:px-8">
            <Link to="/" className="font-bold text-lg w-1/12"><img src={Logo} alt="life-Link" /></Link>

            <div className="block lg:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-black focus:outline-none"
                >
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'} />
                    </svg>
                </button>
            </div>
            <div className={`w-full lg:flex lg:w-auto ${isOpen ? '' : 'hidden'} lg:block`}>
                <ul className="flex space-x-6">
                    <li className=' hover:text-red-500' onClick={() => { setMenu("home") }}><Link to="/">Home</Link> {menu === "home" ? <hr className='h-1 bg-red-500 rounded' /> : <></>}</li>
                    <li className=' hover:text-red-500' onClick={() => { setMenu("gallery") }}><Link to="/gallery">Image Gallery</Link> {menu === "gallery" ? <hr className='h-1 bg-red-500 rounded' /> : <></>}</li>
                    <li className=' hover:text-red-500' onClick={() => { setMenu("about") }}><Link to="/about">About Us</Link> {menu === "about" ? <hr className='h-1 bg-red-500 rounded' /> : <></>}</li>
                </ul>
            </div>


            <button className=" text-red-500 px-4 py-2 rounded hover:bg-red-600 hover:text-white hover:border-none ease-in delay-75"><Link to="/auth">Login</Link></button>

        </nav>
    );
};

export default Navbar;
