export const RetreiveWeatherData = async (lat, lon) => {
  var response = await fetch(
    "https://api.open-meteo.com/v1/dwd-icon?latitude=55.06&longitude=10.61&hourly=temperature_2m,weathercode&timezone=Europe%2FBerlin"
  );
  const data = await response.json();
  return data;
};
