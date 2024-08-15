"use client"
import React from 'react';
import useStore from '../store';

const UndoRedoButtons = () => {
  const undo = useStore((state) => state.undo);
  const redo = useStore((state) => state.redo);

  return (
    <div className="mb-4 flex space-x-4">
      <button onClick={undo} className="px-3 py-2 bg-gray-300 hover:bg-gray-400">
        Undo
      </button>
      <button onClick={redo} className="px-3 py-2 bg-gray-300 hover:bg-gray-400">
        Redo
      </button>
    </div>
  );
};

export default UndoRedoButtons;