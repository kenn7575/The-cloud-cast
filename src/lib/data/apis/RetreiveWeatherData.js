const RetreiveWeatherData = async (lat, lon) => {
  var response = await fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=" +
      lat +
      "&longitude=" +
      lon +
      "&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation_probability,weathercode,uv_index&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum&current_weather=true&windspeed_unit=ms&forecast_days=14&timezone=Europe%2FBerlin"
  );
  const data = await response.json();

  return data;
};
export { RetreiveWeatherData };
