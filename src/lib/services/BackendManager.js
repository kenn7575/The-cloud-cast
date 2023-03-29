//gets the weather data from the api
import { RetreiveWeatherData } from "../data/apis/RetreiveWeatherData.js";
//sets the color theme
import { setColorTheme } from "./setColorThemeService.js";
//gets cityes in the local storage
import { getCities } from "../data/local/LocalStorageManager.js";
//updates the store that relate to locations
import {
  lastSearchedCitys,
  Location,
  currentLocation,
} from "../data/stores/LocationDataStores.js";
//gets the current location from the device
import { getCoordinates } from "../data/local/CurrentLocationManager.js";
//updates the store that relate to weather data
import {
  weatherData,
  hourlyWeatherData,
  currentWeatherData,
} from "../data/stores/WeatherDataStores.js";
//filters the weather data
import { filterHourlyData, filterCurrentData } from "./WeatherDataFilters.js";
//decodes the location to a city name
import { Decode } from "../data/apis/GeoCoding.js";

const initBackend = async () => {
  //get local storage data and update the store
  let location = {};

  await getCoordinates()
    .then((cords) => {
      //use current location to lookup the correct city
      let cityName = Decode(cords.latitude, cords.longitude).then((data) => {});
      console.log(cityName);
      location = {
        lat: cords.latitude,
        lon: cords.longitude,
        city: cityName,
      };
      currentLocation.update(() => {
        return location;
      });
    })
    .catch(() => {
      let cities = getCities();
      lastSearchedCitys.update(() => {
        return cities;
      });
      location = cities[0];
    });

  //get weather data
  await RetreiveWeatherData(location.lat, location.lon).then((result) => {
    //update the store with the weather data
    weatherData.update(() => {
      return result;
    });
    //update child stores
    weatherData.subscribe((data) => {
      const filteredHourlyData = filterHourlyData(data);
      const filteredDailyData = filterCurrentData(data);
      hourlyWeatherData.update((dara) => {
        console.log(data);
        return filteredHourlyData;
      });
      currentWeatherData.update((dara) => {
        return filteredDailyData;
      });
    });
  });

  setColorTheme();

  console.log("done loading");
  return true;
};
export { initBackend };
