export const changeSize = (length) => {
  if (length <= 50) {
    return 32;
  }

  if (length >= 50 && length <= 150) {
    return 28;
  }

  if (length >= 150 && length <= 250) {
    return 22;
  }

  if (length >= 250 && length <= 350) {
    return 18;
  }
};
