//gets the weather data from the api
import { RetreiveWeatherData } from "../data/apis/RetreiveWeatherData.js";
//sets the color theme
import { setColorTheme } from "./setColorThemeService.js";
//gets cityes in the local storage
import { getCities } from "../data/local/LocalStorageManager.js";
//updates the store that relate to locations
import {
  lastSearchedCitys,
  currentLocation,
} from "../data/stores/LocationDataStores.js";
//gets the current location from the device
import { getCoordinates } from "../data/local/CurrentLocationManager.js";
//updates the store that relate to weather data
import {
  weatherData,
  hourlyWeatherData,
  currentWeatherData,
  dailyWeatherData,
} from "../data/stores/WeatherDataStores.js";
//filters the weather data
import {
  filterHourlyData,
  filterCurrentData,
  filterDailyData,
} from "./WeatherDataFilters.js";
//decodes the location to a city name
import { Decode } from "../data/apis/GeoCoding.js";

const initBackend = async () => {
  //get local storage data and update the store
  const location = await getEntryLocation();
  console.log(location);
  //get weather data
  let colorTheme;
  await RetreiveWeatherData(location.lat, location.lon).then((result) => {
    //update the store with the weather data
    weatherData.update(() => {
      return result;
    });
    //update child stores
    weatherData.subscribe((data) => {
      const filteredHourlyData = filterHourlyData(data);
      const filteredCurrentData = filterCurrentData(data);
      const filteredDailyData = filterDailyData(data);
      colorTheme = filteredCurrentData.weathercode;
      hourlyWeatherData.update(() => {
        console.log(data);
        return filteredHourlyData;
      });
      dailyWeatherData.update(() => {
        return filteredDailyData;
      });
      currentWeatherData.update(() => {
        return filteredCurrentData;
      });
    });
  });

  setColorTheme(colorTheme);

  console.log("done loading");
  return true;
};
const getEntryLocation = async () => {
  //get weather data
  let locationData;
  let isConplete = false;
  let currentCordinates = await getCoordinates().catch(() => {
    //the user has not allowed the app to use the location
    //use the last searched city from the local storage
    const cityHistory = getCities();
    locationData = {
      lat: cityHistory[0].lat,
      lon: cityHistory[0].lon,
      city: cityHistory[0].city,
      country: cityHistory[0].country,
    };
    isConplete = true;
  });
  if (!isConplete) {
    let locationObject = await Decode(
      currentCordinates.latitude,
      currentCordinates.longitude
    ).catch(() => {
      const cityHistory = getCities();
      locationData = {
        lat: cityHistory[0].lat,
        lon: cityHistory[0].lon,
        city: cityHistory[0].city,
        country: cityHistory[0].country,
      };
    });
    locationData = {
      lat: currentCordinates.latitude,
      lon: currentCordinates.longitude,
      city: locationObject[0].city,
      country: locationObject[0].country,
    };
  }
  return locationData;
};
export { initBackend };
