"use client"
import React, { useState } from 'react';
import useStore from '../store';

const SearchBar = () => {
  const searchCells = useStore((state) => state.searchCells);
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    searchCells(query);
  };

  return (
    <div className="mb-4 flex space-x-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="px-3 py-2 border"
        placeholder="Search cells..."
      />
      <button onClick={handleSearch} className="px-3 py-2 bg-gray-300 hover:bg-gray-400">
        Search
      </button>
    </div>
  );
};

export default SearchBar;