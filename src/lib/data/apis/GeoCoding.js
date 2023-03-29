const Encode = async (cityName) => {
  const response = await fetch(
    `http://api.positionstack.com/v1/forward
    ? access_key = 38b187306b4faf606305861143060869
    & query = ` + cityName
  );
  const data = await response.json();
};
const Decode = async (lat, lon) => {
  const response = await fetch(
    `http://api.positionstack.com/v1/reverse
  ? access_key = 38b187306b4faf606305861143060869
  & query = ` +
      lat +
      "," +
      lon
  );
  const data = await response.json();
};
