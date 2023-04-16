const RetreiveWeatherData = async (lat, lon) => {
  var response = await fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=" +
      lat +
      "&longitude=" +
      lon +
      "&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,weathercode,uv_index,uv_index_clear_sky&daily=precipitation_probability_mean,weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum&current_weather=true&windspeed_unit=ms&forecast_days=14&timezone=Europe%2FBerlin"
  );
  const data = await response.json();

  return data;
};
const RetreiveCurrentWeatherData = async (lat, lon) => {
  var response = await fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=" +
      lat +
      "&longitude=" +
      lon +
      "&longitude=13.41&current_weather=true&timezone=Europe%2FBerlin"
  );
  const data = await response.json();
  console.log(data, "this is the data");
  return data;
};
export { RetreiveWeatherData, RetreiveCurrentWeatherData };
