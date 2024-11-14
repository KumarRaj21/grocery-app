import React from 'react';

const SearchBar = ({ setSearchTerm }) => {
  return (
    <div className="p-4 w-full">
      <input
        type="text"
        placeholder="Search for products..."
        className="w-full p-2 border border-gray-300 rounded-md"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
