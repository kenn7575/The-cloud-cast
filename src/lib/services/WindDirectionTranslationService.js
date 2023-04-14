export const formatDirection = (inputData) => {
  const directions = [
    "nord",
    "nordøst",
    "øst",
    "sydøst",
    "syd",
    "sydvest",
    "vest",
    "nordvest",
  ];
  const direction = directions[Math.round(inputData / 45) % 8];
  return direction;
};
