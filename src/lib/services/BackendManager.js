//gets the weather data from the api
import { RetreiveWeatherData } from "../data/apis/RetreiveWeatherData.js";
//sets the color theme
import { setColorTheme } from "./setColorThemeService.js";
//gets cityes in the local storage
import { getCities } from "../data/local/LocalStorageManager.js";
//updates the store with the local storage data
import { lastSearchedCitys } from "../data/stores/LocationDataStores.js";
import { getCoordinates } from "../data/local/CurrentLocationManager.js";

//updates the store with the weather data
import {
  weatherData,
  hourlyWeatherData,
  currentWeatherData,
} from "../data/stores/WeatherDataStores.js";

//filters the weather data
import { filterHourlyData } from "./HourlyWeatherFilter.js";
import { filterCurrentData } from "./CurrentWeatherFilter.js";

const initBackend = async () => {
  //get local storage data and update the store
  let location = {};

  await getCoordinates()
    .then((cords) => {
      console.log(cords);
      //use current location to lookup the correct city
      let cityName = "københavn"; //TODO use geocode to get city name
      location = {
        lat: cords.latitude,
        lon: cords.longitude,
        city: cityName,
      };
      console.log(location);
    })
    .catch(() => {
      let cities = getCities();
      lastSearchedCitys.update(() => {
        return cities;
      });
      location = cities[0];
      console.log(location);
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
