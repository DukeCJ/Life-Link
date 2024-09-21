import React from "react";
import { Link } from 'react-router-dom';


const AmbulanceCard = ({ ambulance }) => {
    return (
        <div className="flex bg-white shadow-md rounded p-6">
            <div className="w-2/4">
                <img
                    src={ambulance.image}
                    alt={ambulance.name}
                    className=" rounded-md w-full h-40"
                />
            </div>
            <div className="w-full pl-28">
                <h3 className="text-xl font-bold">{ambulance.name}</h3>
                <p>Type: {ambulance.type}</p>
                <p>Specialization: {ambulance.specialization}</p>
                <p>Cost: ${ambulance.cost}</p>
                <p>Region: {ambulance.region}</p>
                <Link to={`/ambulance/${ambulance.id}`}>
                    <button className="mt-4 w-96 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded ">
                        View Details
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default AmbulanceCard;
