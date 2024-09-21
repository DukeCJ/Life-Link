import React from "react";


const SearchFilterSort = ({ handleSearch }) => {
    const handleInputChange = (e) => {
        handleSearch(e.target.value);
    };

    return (
        <div className="p-4 bg-gray-100">
            <input
                type="text"
                placeholder="Search by location..."
                className="border p-2 rounded w-full"
                onChange={handleInputChange}
            />
        </div>
    );
};

export default SearchFilterSort;
