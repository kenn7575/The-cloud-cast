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
import { decodeLocation } from "../services/decodeLocation.js";

const initBackend = async () => {
  console.clear();
  const location = await getEntryLocation();
  console.log("getting weather for", location.city + "...");
  await GetAndUpdateWeather(location);
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
  let lastSearchedCityLocation; //this has a value if the user has not allowed the app to use the location and the local storage is not empty
  let currentLocation; //this has a value if the user has allowed the app to use the location

  console.log("getting last searched cities...");
  let cityHistory = getCities(); //get the last searched cities from the local storage

  if (cityHistory) {
    lastSearchedCityLocation = {
      country: cityHistory[0].country,
      city: cityHistory[0].city,
      lat: cityHistory[0].lat,
      lon: cityHistory[0].lon,
    };
  } else {
    console.log("no last searched cities found");
  }
  //update the store with the last searched cities to be used thoughout the app
  lastSearchedCitys.update(() => {
    return cityHistory;
  });
  console.log("getting current location...");
  let currentCordinates = await getCoordinates().catch(() => {
    console.log("location blocked by the user");
    //the user has not allowed the app to use the location
  });

  if (currentCordinates) {
    await decodeLocation(
      currentCordinates.latitude,
      currentCordinates.longitude
    ).then((result) => {
      if (result !== null && result !== undefined) {
        console.log("decoded current location successfully");
        currentLocation = {
          // @ts-ignore
          country: result.country,
          // @ts-ignore
          city: result.city,
          lat: currentCordinates.latitude,
          lon: currentCordinates.longitude,
        };
      } else {
        console.log("failed to decode current location");
      }
    });
  }

  if (currentLocation) return currentLocation; //if the user has allowed the app to use the location
  if (lastSearchedCityLocation) return lastSearchedCityLocation; //if the user has not allowed the app to use the location and the local storage is not empty
  return {
    country: "Danmark",
    city: "Copenhagen",
    lat: "55.6759",
    lon: "12.5655",
  }; //if the user has not allowed the app to use the location and the local storage is empty
};

export { initBackend, GetAndUpdateWeather };
