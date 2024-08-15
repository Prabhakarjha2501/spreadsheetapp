export const validateCellData = (id, value) => {
    if (id % 2 === 0 && isNaN(value)) {
      return false;
    }
    return true;
  };