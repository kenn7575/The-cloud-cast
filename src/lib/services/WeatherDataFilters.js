import { formatDailyDate } from "./DateFormatter.js";
import { formatDirection } from "./WindDirectionTranslationService.js";
export { filterHourlyData, filterCurrentData, filterDailyData };

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
      timeData: formatedTime,
      time: formatedTime,
      weathercode: weatherCode,
      temp: Math.round(temperature),
    });
  }
  formatedData[0].time = "Now";
  return formatedData;
};
const filterDailyData = (data) => {
  let formatedData = [];
  let index = 0;
  for (index; index < 7; index++) {
    let weatherCode = data.daily.weathercode[index];
    let temperature_max = data.daily.temperature_2m_max[index];
    let temperature_min = data.daily.temperature_2m_min[index];
    let time = formatDailyDate(data.daily.time[index]);

    formatedData.push({
      time: time,
      weathercode: weatherCode,
      temperature_max: Math.round(temperature_max),
      temperature_min: Math.round(temperature_min),
    });
  }
  formatedData[0].time = "Today";
  return formatedData;
};

const filterCurrentData = (data) => {
  const d = new Date();
  const hour = d.getHours();
  //format: {temp: float, weathercode: int, time: string, sunset: string, sunrise: string, windSpeed: float, windDirection: int, rainSum: float}
  const temp = Math.round(data.current_weather.temperature);
  const weathercode = data.current_weather.weathercode;
  const time = data.current_weather.time;

  const sunset = data.daily.sunset[0];
  const sunsetFormat = sunset.split("T")[1];
  const sunrise = data.daily.sunrise[0];
  const sunriseFormat = sunrise.split("T")[1];
  const windSpeed = Math.round(data.current_weather.windspeed);
  const detailedWindDirection = data.current_weather.winddirection;
  const windDirection = formatDirection(detailedWindDirection);
  const precipitation_sum = Math.round(data.daily.precipitation_sum[0]);
  const apparent_temperature = Math.round(
    data.hourly.apparent_temperature[hour]
  );
  const precipitation_probability =
    data.daily.precipitation_probability_mean[0];
  const uv = Math.round(data.hourly.uv_index[hour]);
  const uv_clear_sky = Math.round(data.hourly.uv_index_clear_sky[hour]);
  const humidity = data.hourly.relativehumidity_2m[hour];
  const filteredData = {
    temp: temp,
    weathercode: weathercode,
    time: time,
    sunset: sunsetFormat,
    sunrise: sunriseFormat,
    windSpeed: windSpeed,
    detailedWindDirection: detailedWindDirection,
    windDirection: windDirection,
    rainSum: precipitation_sum,
    apparent_temperature: apparent_temperature,
    precipitation_probability: precipitation_probability,
    uv: uv,
    uv_clear_sky: uv_clear_sky,
    humidity: humidity,
  };
  return filteredData;
};
