// "use client"
// import React, { useState } from 'react';
// import useStore from '../store';

// const Cell = ({ id, content }) => {
//   const [isEditing, setEditing] = useState(false);
//   const updateCell = useStore((state) => state.updateCell);

//   const handleDoubleClick = () => {
//     setEditing(true);
//   };

//   const handleBlur = (e) => {
//     setEditing(false);
//     updateCell(id, e.target.value);
//   };

//   return (
//     <div className="p-2 border" onDoubleClick={handleDoubleClick}>
//       {isEditing ? (
//         <input
//           type="text"
//           defaultValue={content}
//           onBlur={handleBlur}
//           className="w-full h-full"
//         />
//       ) : (
//         <span>{content}</span>
//       )}
//     </div>
//   );
// };

// export default Cell;

import React from 'react';
import useStore from '../store';

const Cell = ({ id }) => {
  const { cells, updateCell, setCellFormatting, selectedCellId, selectCell } = useStore((state) => ({
    cells: state.cells,
    updateCell: state.updateCell,
    setCellFormatting: state.setCellFormatting,
    selectedCellId: state.selectedCellId,
    selectCell: state.selectCell,
  }));

  const cell = cells[id] || { content: '', formatting: {} };

  const handleChange = (e) => {
    updateCell(id, e.target.value);
  };

  const handleClick = () => {
    selectCell(id); // Assuming you have a selectCell action
  };

  const { content, formatting } = cell;

  return (
    <input
      type="text"
      value={content}
      onChange={handleChange}
      onClick={handleClick}
      style={{
        textAlign: formatting.alignment || 'left',
        fontSize: formatting.fontSize || '14px',
        border: '1px solid #ddd',
        padding: '4px',
      }}
      className="w-full h-full"
    />
  );
};

export default Cell;