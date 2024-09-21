// components/Sitemap.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sitemap = () => {
    
  return (
    <div className="flex flex-col items-center">
      <ul className="text-center space-y-2">
        <li>
          <Link to="/" className="text-blue-500 hover:underline">Home</Link>
        </li>
        <li>
          <Link to="/about" className="text-blue-500 hover:underline">About Us</Link>
        </li>
        <li>
          <Link to="/gallery" className="text-blue-500 hover:underline">Gallery</Link>
        </li>
        <li>
          <Link to="/contact" className="text-blue-500 hover:underline">Contact Us</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sitemap;
