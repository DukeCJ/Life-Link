
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from '../../Data/Ambulances.json'; // Importing data from JSON

const AmbulanceDetails = () => {
  const { id } = useParams(); // Get the ID from the route parameters
  const [ambulance, setAmbulance] = useState(null);

  useEffect(() => {
    // Find the ambulance with the matching ID
    const selectedAmbulance = data.ambulances.find((item) => item.id === parseInt(id));
    setAmbulance(selectedAmbulance);
  }, [id]);

  if (!ambulance) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">{ambulance.name}</h1>
      <img src={ambulance.image} alt={ambulance.name} className="mb-4 rounded-md" />
      <p>Type: {ambulance.type}</p>
      <p>Specialization: {ambulance.specialization}</p>
      <p>Cost: ${ambulance.cost}</p>
      <p>Region: {ambulance.region}</p>
      <p>Additional Information: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.</p>
      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">Book Now</button>
    </div>
  );
};

export default AmbulanceDetails;
