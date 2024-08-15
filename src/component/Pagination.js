"use client"

import React, { useState } from 'react';
import useStore from '../store';

const Pagination = () => {
  const paginateCells = useStore((state) => state.paginateCells);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 100; 

  const handlePageChange = (page) => {
    setCurrentPage(page);
    paginateCells(page, pageSize);
  };

  return (
    <div className="mt-4 flex space-x-4">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-2 bg-gray-300 hover:bg-gray-400"
      >
        Previous
      </button>
      <span className="px-3 py-2">{`Page ${currentPage}`}</span>
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        className="px-3 py-2 bg-gray-300 hover:bg-gray-400"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;