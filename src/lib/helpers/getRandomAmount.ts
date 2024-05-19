export const getRandomAmount = (min: number = 1000, max: number = 100000) => {
  return Math.random() * (max - min) + min;
};
