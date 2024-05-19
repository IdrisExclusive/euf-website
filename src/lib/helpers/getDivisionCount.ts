export const getDivisionCount = (num: number, divisor: number) => {
  let count = 0;
  while (num > 1) {
    num = num / divisor;
    count = count + 1;
  }
  return count;
};
