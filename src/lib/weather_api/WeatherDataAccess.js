export const getWetherData = async (lat, lon) => {
  var data;

  fetch(
    "https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=" +
      lat +
      "&lon=" +
      lon +
      "&altitude=1"
  )
    .then((response) => {
      response.json().then((result) => {
        //console.log(result);
        data = result;
        console.log(data, 3);
        return data;
      });
    })
    .catch((error) => {
      //console.log(error);
    });
};
