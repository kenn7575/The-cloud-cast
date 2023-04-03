//gets the weather data from the api
import { RetreiveWeatherData } from "../data/apis/RetreiveWeatherData.js";
//sets the color theme
import { setColorTheme } from "./setColorThemeService.js";
//gets cityes in the local storage
import { getCities } from "../data/local/LocalStorageManager.js";
import { loadingModal } from "../data/stores/Modals.js";
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
  console.log(location, "location");
  //get weather data

  await GetAndUpdateWeather(location);

  return true;
};
const GetAndUpdateWeather = async (location) => {
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

      const colorTheme = filteredCurrentData.weathercode;
      setColorTheme(colorTheme);
      hourlyWeatherData.update(() => {
        return filteredHourlyData;
      });
      currentLocation.update(() => {
        return location;
      });
      dailyWeatherData.update(() => {
        return filteredDailyData;
      });
      currentWeatherData.update(() => {
        return filteredCurrentData;
      });
      loadingModal.update(() => {
        return false;
      });
    });
  });
};

const getEntryLocation = async () => {
  //get weather data
  let locationData;
  let isConplete = false;

  //get last searched citys from logal storage
  const cityHistory = getCities();
  lastSearchedCitys.update(() => {
    return cityHistory;
  });
  let currentCordinates = await getCoordinates().catch(() => {
    //the user has not allowed the app to use the location
    //use the last searched city from the local storage
    if (cityHistory) {
      locationData = {
        lat: cityHistory[0].lat,
        lon: cityHistory[0].lon,
        city: cityHistory[0].city,
        country: cityHistory[0].country,
      };
      isConplete = true;
    }
  });

  if (!isConplete) {
    let locationObject = await Decode(
      currentCordinates.latitude,
      currentCordinates.longitude
    ).catch(() => {
      //if the decode api fails

      console.log("something went worng");
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
      locationData = {
        lat: currentCordinates.latitude,
        lon: currentCordinates.longitude,
        city: locationObject[0].city,
        country: locationObject[0].country,
      };
    }
  }
  return locationData;
};
export { initBackend, GetAndUpdateWeather };
