const PlaceAutoComplete = async (place) => {
  var response = await fetch(
    "https://api.geoapify.com/v1/geocode/autocomplete?text=" +
      place +
      "&apiKey=15addd394224470e81489b234bb6a147"
  );
  const data = await response.json();

  return data;
};
export { PlaceAutoComplete };
