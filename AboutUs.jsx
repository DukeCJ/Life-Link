// components/AboutUs.js
import React from 'react';
import FeedbackForm from '../../Components/FeedbackForm/FeedbackForm';
import ContactUs from '../../Components/ContactUs/ContactUs';
import Sitemap from '../../Components/Sitemap/Sitemap';

const AboutUs = () => {

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>
      <p className="text-lg mb-6 text-center">
        Welcome to LifeLink. We are dedicated to providing 24/7 emergency ambulance services to different regions. 
        We have a wide network of ambulances equipped to handle various medical emergencies, 
        operating in multiple cities and regions.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 pl-10 rounded-lg shadow-xl">
          <h2 className="text-2xl font-bold mb-4 text-center">Contact Information</h2>
          <ContactUs />
        </div>
        <div className="p-4 rounded-lg shadow-xl">
          <h2 className="text-2xl font-bold mb-4 text-center">Provide Feedback</h2>
          <FeedbackForm />
        </div>
      </div>

      <div className="mt-12 p-4 rounded-lg shadow-xl">
        <h2 className="text-2xl font-bold mb-4 text-center">Sitemap</h2>
        <Sitemap />
      </div>
    </div>
  );
};

export default AboutUs;
