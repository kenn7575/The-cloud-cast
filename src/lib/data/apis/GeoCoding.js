const Encode = async (cityName) => {
  // const response = await fetch(
  //   `http://api.positionstack.com/v1/forward
  //   ? access_key = 38b187306b4faf606305861143060869
  //   & query = ` + cityName
  // );
  // const data = await response.json();
};
const Decode = async (lat, lon) => {
  const response = await fetch(
    `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lon}&apiKey=ea47387ed72e4b0db5092e389d23dd0c`
  );
  const data = await response.json();

  const path = data.features[0].properties;

  return [{ city: path.city, country: path.country }];

  return [{ city: "city", country: "Denmark" }];
};
export { Encode, Decode };

//this commented out to save api usage
