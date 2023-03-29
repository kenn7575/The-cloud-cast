const filterCurrentData = (data) => {
  //format: {temp: float, weathercode: int, time: string, sunset: string, sunrise: string, windSpeed: float, windDirection: int, rainSum: float}
  const temp = data.current_weather.temperature;
  const weathercode = data.current_weather.weathercode;
  const time = data.current_weather.time;
  const sunset = data.daily.sunset[0];
  const sunrise = data.daily.sunrise[0];
  const windSpeed = data.current_weather.windspeed;
  const windDirection = data.current_weather.winddirection;
  const rainSum = data.daily.rain_sum[0];
  return {
    temp: temp,
    weathercode: weathercode,
    time: time,
    sunset: sunset,
    sunrise: sunrise,
    windSpeed: windSpeed,
    windDirection: windDirection,
    rainSum: rainSum,
  };
};
export { filterCurrentData };
