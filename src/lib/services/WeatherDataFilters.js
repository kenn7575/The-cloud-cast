export { filterHourlyData, filterCurrentData };

const filterHourlyData = (data) => {
  const d = new Date();
  const hour = d.getHours();

  let formatedData = [];
  let index = 0;
  for (index; index < 24; index++) {
    let weatherCode = data.hourly.weathercode[index + hour];
    let temperature = data.hourly.temperature_2m[index + hour];
    let time = data.hourly.time[index + hour];
    let formatedTime = time.slice(11, 16);
    formatedData.push({
      time: formatedTime,
      weathercode: weatherCode,
      temp: Math.round(temperature),
    });
  }
  return formatedData;
};
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
