// src/components/Hero.js
import React from 'react';
import Ambulance from '../Assets/ambulance.png'

const Hero = () => {
  return (
    <section className="bg-white px-28 my-28 md:py-16 relative">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Text Section */}
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            24/7 Emergency Ambulance Care with <span className="text-red-600">Life<span className='text-blue-600'>Link</span></span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600">
            For emergency ambulance services, contact LifeLink for swift response and professional care.
          </p>
          <div className="mt-6 flex justify-center md:justify-start space-x-4">
            <button className="bg-red-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-red-600">
              Call Ambulance
            </button>
            <button className="bg-gray-100 text-gray-800 px-6 py-3 rounded-md shadow-md hover:bg-gray-200">
              Request Callback
            </button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
          <img
            src={Ambulance}  // Replace with actual image path
            alt="Ambulance"
            className="w-72 md:w-96"
          />
        </div>
      </div>

      {/* Background Shape Decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-red-100 rounded-full -z-10"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-100 rounded-full -z-10"></div>
    </section>
  );
};

export default Hero;

