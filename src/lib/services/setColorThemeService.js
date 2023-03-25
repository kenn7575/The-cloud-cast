export const setColorTheme = async (lat, lon) => {
  var response = await fetch(
    "https://api.open-meteo.com/v1/dwd-icon?latitude=52.52&longitude=13.41&current_weather=true&timezone=Europe%2FBerlin&start_date=2023-03-23&end_date=2023-03-30"
  );
  const data = await response.json();
  switch (data.current_weather.weathercode) {
    case 0:
    case 1:
      document.querySelector("#app").className = "orange";
      break;
    case 2:
    case 3:
    case 45:
    case 48:
      document.querySelector("#app").className = "gray";
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
      document.querySelector("#app").className = "blue";
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
      document.querySelector("#app").className = "lightblue";
      break;
    case 95:
    case 96:
    case 99:
      document.querySelector("#app").className = "purple";
      break;
    default:
      document.querySelector("#app").className = "blue";
  }
};
