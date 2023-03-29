import { currentWeatherData } from "../data/WeatherDataStores";
export const setColorTheme = async (data) => {
  let weatherCode = {};
  const unsub = currentWeatherData.subscribe((data) => {
    weatherCode = data.weathercode;
  });
  switch (weatherCode) {
    case 0:
    case 1:
    case 2:
      document.querySelector("body").className = "orange";
      break;
    case 3:
    case 45:
    case 48:
      document.querySelector("body").className = "gray";
      break;
    case 51:
    case 53:
    case 55:
    case 61:
    case 63:
    case 65:
    case 80:
    case 81:
    case 82:
      document.querySelector("body").className = "blue";
      break;
    case 56:
    case 57:
    case 66:
    case 67:
    case 71:
    case 73:
    case 75:
    case 77:
    case 85:
    case 86:
      document.querySelector("body").className = "lightblue";
      break;
    case 95:
    case 96:
    case 99:
      document.querySelector("body").className = "purple";
      break;
    default:
      document.querySelector("body").className = "blue";
  }
  unsub();
};
