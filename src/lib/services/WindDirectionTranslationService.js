export const formatDirection = (inputData) => {
  const directions = [
    "North",
    "North-East",
    "East",
    "South-East",
    "South",
    "South-West",
    "West",
    "North-West",
  ];
  const direction = directions[Math.round(inputData / 45) % 8];
  return direction;
};
