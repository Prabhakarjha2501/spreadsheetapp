"use client"

import React from 'react';
import useStore from '../store';
import Cell from './cell';

const SpreadsheetGrid = () => {
  const { cells } = useStore();

  return (
    <div className="grid grid-cols-10 gap-1">
      {cells.map((content, id) => (
        <Cell key={id} id={id} content={content} />
      ))}
    </div>
  );
};

export default SpreadsheetGrid;