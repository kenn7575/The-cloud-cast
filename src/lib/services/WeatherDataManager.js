import { weatherData } from "../data/WeatherDataStores.js";
import { RetreiveWeatherData } from "../data/RetreiveWeatherData.js";

//get cookies

let location = { lat: "55.3454", lon: "11.4231" };
//if cookies are not set, get current location

//if location is not found, get weather data for default location

//if cookies are set, get weather data for that location

//when weather data is fetched, update the store
const RetreiveWeatherData = await RetreiveWeatherData(
  location.lat,
  location.lon
).then((result) => {
  weatherData.update(() => {
    return result;
  });
});
