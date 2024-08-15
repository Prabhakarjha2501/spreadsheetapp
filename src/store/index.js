import { validateCellData } from '@/utility/validateCellData';
import {create} from 'zustand';
//import { validateCellData } from '../utils/validateCellData'; // Assuming validateCellData is properly defined

const useStore = create((set) => ({
  cells: Array(1000).fill(null).map(() => ({ content: '', formatting: {} })), // Initialize with 1000 blank cells
  selectedCellId: null,
  history: [],
  historyIndex: -1,

  updateCell: (id, content) => set((state) => {
    if (!validateCellData(id, content)) {
      return state; // Do not update if validation fails
    }

    const newCells = [...state.cells];
    newCells[id] = { ...newCells[id], content };

    return {
      cells: newCells,
      history: [...state.history.slice(0, state.historyIndex + 1), newCells],
      historyIndex: state.historyIndex + 1,
    };
  }),

  setCellFormatting: (cellId, formatting) => {
    console.log('Setting cell formatting', { cellId, formatting }); // Debugging line
    set((state) => ({
      cells: state.cells.map((cell, index) => 
        index === cellId ? { ...cell, formatting } : cell
      ),
    }));
  },

  selectCell: (id) => set({ selectedCellId: id }),

  undo: () => set((state) => {
    if (state.historyIndex <= 0) return state;

    return {
      cells: state.history[state.historyIndex - 1],
      historyIndex: state.historyIndex - 1,
    };
  }),

  redo: () => set((state) => {
    if (state.historyIndex >= state.history.length - 1) return state;

    return {
      cells: state.history[state.historyIndex + 1],
      historyIndex: state.historyIndex + 1,
    };
  }),

  searchCells: (query) => set((state) => {
    const results = state.cells.map((cell, index) => 
      cell.content.includes(query) ? index : null
    ).filter(index => index !== null);
    return { searchResults: results };
  }),

  paginateCells: (page, pageSize) => set((state) => {
    const startIndex = page * pageSize;
    const paginatedCells = state.cells.slice(startIndex, startIndex + pageSize);
    return { paginatedCells };
  }),
}));

export default useStore;







// import {create} from 'zustand';

// const useStore = create((set) => ({
//   cells: Array(1000).fill(''), // Initialize with 1000 blank cells
//   selectedCellId: null,
//   history: [],
//   historyIndex: -1,

// updateCell: (id, content) => set((state) => {
//     if (!validateCellData(id, content)) {
//       return state; // Do not update if validation fails
//     }
  
//     const newCells = [...state.cells];
//     newCells[id] = content;
  
//     return {
//       cells: newCells,
//       history: [...state.history.slice(0, state.historyIndex + 1), newCells],
//       historyIndex: state.historyIndex + 1,
//     };
//   }),


// // setCellFormatting: (id, formatting) => set((state) => {
// //     const newCells = [...state.cells];
// //     newCells[id] = { ...newCells[id], ...formatting };

// //     return { cells: newCells };
// //   }),

// // setCellFormatting: (cellId, formatting) => 
// // {    
// //     console.log(cellId,formatting+"thisksdjkfksdjfkksdj")
// //     set((state) => ({


// //     cells: {
// //       ...state.cells,
// //       [cellId]: {
// //         ...state.cells[cellId],
// //         formatting,
// //       },
// //     },
// //   })),

// // },

// setCellFormatting: (cellId, formatting) => {
//     console.log('Setting cell formatting', { cellId, formatting }); // Debugging line
//     set((state) => ({
//       cells: {
//         ...state.cells,
//         [cellId]: {
//           ...state.cells[cellId],
//           formatting,
//         },
//       },
//     }));
//   },

//   undo: () => set((state) => {
//     if (state.historyIndex <= 0) return state;

//     return {
//       cells: state.history[state.historyIndex - 1],
//       historyIndex: state.historyIndex - 1,
//     };
//   }),

//   redo: () => set((state) => {
//     if (state.historyIndex >= state.history.length - 1) return state;

//     return {
//       cells: state.history[state.historyIndex + 1],
//       historyIndex: state.historyIndex + 1,
//     };
//   }),

//   searchCells: (query) => set((state) => {
//     // Implement search logic here if needed
//   }),

//   paginateCells: (page, pageSize) => set((state) => {
//     // Implement pagination logic here if needed
//   }),
// }));

// export default useStore;