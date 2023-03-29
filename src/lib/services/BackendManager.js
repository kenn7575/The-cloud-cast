//gets the weather data from the api
import { RetreiveWeatherData } from "../data/RetreiveWeatherData.js";
import { setColorTheme } from "./setColorThemeService.js";
//gets cityes in the local storage
import { getCities } from "../data/LocalStorageManager.js";

//updates the store with the local storage data
import { lastSearchedCitys } from "../data/LocalDataStore.js";

//updates the store with the weather data
import {
  weatherData,
  hourlyWeatherData,
  currentWeatherData,
} from "../data/WeatherDataStores.js";

import { filterHourlyData } from "../data/HourlyWeatherData.js";
import { filterCurrentData } from "../data/CurrentWeatherData.js";
const initBackend = async () => {
  //get local storage data and update the store
  let cities = getCities();
  lastSearchedCitys.update(() => {
    return cities;
  });
  console.log(cities);
  //get weather data
  await RetreiveWeatherData(cities[0]).then((result) => {
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
