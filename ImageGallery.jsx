
import React from 'react';
import { Link } from 'react-router-dom';
import data from '../../Data/Ambulances.json'; // Importing data from JSON

const ImageGallery = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Ambulance Image Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.ambulances.map((ambulance) => (
          <div key={ambulance.id} className="border rounded-md shadow-md p-4">
            <Link to={`/ambulance/${ambulance.id}`}>
              <img 
                src={ambulance.image} 
                alt={ambulance.name} 
                className="w-full h-48 object-cover rounded-md mb-4 hover:opacity-90 transition-opacity"
              />
            </Link>
            <h3 className="text-lg font-bold text-center">{ambulance.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
