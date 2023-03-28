const RetreiveWeatherData = async (geocode) => {
  var response = await fetch(
    "https://api.open-meteo.com/v1/dwd-icon?latitude=" +
      geocode.lat +
      "&longitude=" +
      geocode.lon +
      "&hourly=temperature_2m,rain,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,rain_sum,windspeed_10m_max,winddirection_10m_dominant&current_weather=true&timezone=Europe%2FBerlin"
  );
  const data = await response.json();

  return data;
};
export { RetreiveWeatherData };
