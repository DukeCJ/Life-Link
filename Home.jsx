// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import Hero from '../Components/Hero/Hero';
import AmbulanceList from "../Components/AmbulanceList/AmbulanceList";
import SearchFilterSort from "../Components/SearchFilterSort/SearchFilterSort";
import data from "../Data/Ambulances.json";
import MedicalServices from '../Components/MedicalServices/MedicalServices';
import WhyChooseUs from '../Components/WhyChooseUs/WhyChooseUs';


const Home = () => {
    const [ambulances, setAmbulances] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredAmbulances, setFilteredAmbulances] = useState([]);

    useEffect(() => {
        const ambulanceCopy = [...data.ambulances];
        const shuffledAmbulances = ambulanceCopy.sort(() => 0.5 - Math.random());
        const randomAmbulances = shuffledAmbulances.slice(0, 4);
        setAmbulances(randomAmbulances);
        setFilteredAmbulances(randomAmbulances);
    }, []);


    // Search/filter function
    const handleSearch = (term) => {
        setSearchTerm(term);
        const results = ambulances.filter((ambulance) =>
            ambulance.region.toLowerCase().includes(term.toLowerCase())
        );
        setFilteredAmbulances(results);
    };



    return (
        <>
            <SearchFilterSort handleSearch={handleSearch} />
            <Hero />
            <AmbulanceList ambulances={filteredAmbulances} />
            <MedicalServices />
            <WhyChooseUs />
        </>
    );
};

export default Home;
