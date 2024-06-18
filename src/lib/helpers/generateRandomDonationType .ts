import { donationTypes } from "../data/enums";

export const generateRandomDonationType = () => {
  const probabilities = [0.125, 0.005, 0.25, 0.05, 0.05, 0.02, 0.5];
  const cdf = [probabilities[0]];
  for (let i = 1; i < probabilities.length; i++) {
    cdf.push(cdf[i - 1] + probabilities[i]);
  }

  const randomValue = Math.random();
  let randomIndex = 0;
  while (randomIndex < cdf.length && randomValue > cdf[randomIndex]) {
    randomIndex++;
  }

  return donationTypes[randomIndex];
};
