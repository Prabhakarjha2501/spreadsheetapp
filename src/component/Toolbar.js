"use client";

import React from 'react';
import useStore from '../store';

const Toolbar = () => {
  const { selectedCellId, setCellFormatting } = useStore((state) => ({
    selectedCellId: state.selectedCellId,
    setCellFormatting: state.setCellFormatting,
  }));

  const handleAlignmentChange = (alignment) => {
    if (selectedCellId !== null) {
      setCellFormatting(selectedCellId, { alignment });
    } else {
        alert('Please select a cell before applying alignment.');
    }
  };

  const handleFontSizeChange = (fontSize) => {
    if (selectedCellId !== null) {
      setCellFormatting(selectedCellId, { fontSize });
    } else {
      console.error('No cell selected. Cannot apply font size.');
    }
  };

  return (
    <div className="mb-4 flex space-x-4">
      <button
        onClick={() => handleAlignmentChange('left')}
        className="px-3 py-2 bg-gray-300 hover:bg-gray-400"
      >
        Align Left
      </button>
      <button
        onClick={() => handleAlignmentChange('center')}
        className="px-3 py-2 bg-gray-300 hover:bg-gray-400"
      >
        Align Center
      </button>
      <button
        onClick={() => handleAlignmentChange('right')}
        className="px-3 py-2 bg-gray-300 hover:bg-gray-400"
      >
        Align Right
      </button>
      <select
        onChange={(e) => handleFontSizeChange(e.target.value)}
        className="px-3 py-2 bg-gray-300 hover:bg-gray-400"
      >
        <option value="text-sm">Small</option>
        <option value="text-base">Medium</option>
        <option value="text-lg">Large</option>
      </select>
    </div>
  );
};

export default Toolbar;




















// "use client"

// import React from 'react';
// import useStore from '../store';

// const Toolbar = () => {
//   const setCellFormatting = useStore((state) => state.setCellFormatting);

//   console.log('setCellFormatting:', setCellFormatting);

//   const handleAlignmentChange = (alignment) => {
//     // setCellFormatting('selectedCellId', { alignment });
//     if (setCellFormatting) {
//         setCellFormatting(selectedCellId, { alignment });
//       } else {
//         console.error('setCellFormatting is undefined');
//       }
//   };

//   const handleFontSizeChange = (fontSize) => {
//     setCellFormatting('selectedCellId', { fontSize });
//   };

//   return (
//     <div className="mb-4 flex space-x-4">
//       <button
//         onClick={() => handleAlignmentChange('left')}
//         className="px-3 py-2 bg-gray-300 hover:bg-gray-400"
//       >
//         Align Left
//       </button>
//       <button
//         onClick={() => handleAlignmentChange('center')}
//         className="px-3 py-2 bg-gray-300 hover:bg-gray-400"
//       >
//         Align Center
//       </button>
//       <button
//         onClick={() => handleAlignmentChange('right')}
//         className="px-3 py-2 bg-gray-300 hover:bg-gray-400"
//       >
//         Align Right
//       </button>
//       <select
//         onChange={(e) => handleFontSizeChange(e.target.value)}
//         className="px-3 py-2 bg-gray-300 hover:bg-gray-400"
//       >
//         <option value="text-sm">Small</option>
//         <option value="text-base">Medium</option>
//         <option value="text-lg">Large</option>
//       </select>
//     </div>
//   );
// };

// export default Toolbar;