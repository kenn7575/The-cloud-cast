const Encode = async (cityName) => {
  // const response = await fetch(
  //   `http://api.positionstack.com/v1/forward
  //   ? access_key = 38b187306b4faf606305861143060869
  //   & query = ` + cityName
  // );
  // const data = await response.json();
};
const Decode = async (lat, lon) => {
  // const response = await fetch(
  //   `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lon}&format=json&apiKey=15addd394224470e81489b234bb6a147`
  // );
  // const data = await response.json();
  // return { city: data.results[0].city, country: data.results[0].country };
  return [{ city: "city", country: "Denmark" }];
};
export { Encode, Decode };

//this commented out to save api usage
