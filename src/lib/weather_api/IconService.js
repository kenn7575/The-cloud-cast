export function GetWeatherSympol(weather) {
  switch (weather) {
    case 0:
      //clear sky
      return `<svg x="0" y="0" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <symbol id="sun">
        <path class="sun-glow" fill="url(#sun-glow-grad)" d="M66.64,47.86,82,41,66.64,34.12l9.84-13.66L59.76,22.22,61.46,5.47l-13.6,9.89L41,0,34.12,15.36,20.46,5.52l1.76,16.72L5.47,20.54l9.89,13.6L0,41l15.36,6.83L5.52,61.54l16.72-1.76L20.54,76.53l13.6-9.89L41,82l6.83-15.36,13.66,9.84L59.78,59.76l16.75,1.69Z"></path>
        <path class="sun-outer" fill="#ffd348" d="M19.28,53.5a25,25,0,1,0,9.15-34.16A25,25,0,0,0,19.28,53.5Z"></path>
        <path class="sun-inner" fill="url(#sun-inner-grad)" d="M22.74,51.5a21,21,0,1,0,7.69-28.69A21,21,0,0,0,22.74,51.5Z"></path>
      </symbol>
    
      <defs>
        <radialGradient id="sun-glow-grad" cx="41" cy="41" r="41" gradientUnits="userSpaceOnUse">
          <stop offset="54%" stop-color="#d6b849"/>
          <stop offset="67%" stop-color="#ffce47"/>
          <stop offset="100%" stop-color="#ffdb73"/>
        </radialGradient>
        <linearGradient id="sun-inner-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ffaf22" />
          <stop offset="100%" stop-color="#f09900" />
        </linearGradient>
      </defs>
      <symbol id="s01d">
        <use xlink:href="#sun"  x="0" y="0" width="100" height="100" transform="translate(9,9) scale(1,1)"></use>
      </symbol>
      <use xlink:href="#s01d" x="0" y="0" width="100" height="100"></use>
    </svg>`;
    case 1:
      //few clouds
      return "🌤️";
    case 2:
      //partly cloudy
      return "⛅️";
    case 3:
      //overcast
      return "🌥️";
    case 45:
      //fog
      return "🌫️";
    case 48:
      //freezing fog
      return "🌫️";
    case 51:
      //drizzle light - støvregn
      return "🌧️";
    case 53:
      //drizzle moderate - støvregn
      return "🌧️";
    case 55:
      //drizzle intense - støvregn
      return "🌧️";
    case 56:
      //freezing drizzle light - støvregn
      return "🌧️";
    case 57:
      //freezing drizzle moderate - støvregn
      return "🌧️";
    case 61:
      //rain light
      return "🌧️";
    case 63:
      //rain moderate
      return "🌧️";
    case 65:
      //rain intense
      return "🌧️";
    case 66:
      //freezing rain light
      return "🌧️";
    case 67:
      //freezing rain moderate
      return "🌧️";
    case 71:
      //show light
      return "❄️";
    case 73:
      //show moderate
      return "❄️";
    case 75:
      //show intense
      return "❄️";
    case 77:
      //snow grains - snefnug
      return "❄️";
    case 80:
      //rain light
      return "🌧️";
    case 81:
      //rain moderate
      return "🌧️";
    case 82:
      //rain intense
      return "🌧️";
    case 85:
      //snow showers light
      return "❄️";
    case 86:
      //snow showers heavy
      return "❄️";
    case 95:
      //thunderstorm
      return "⛈️";
    case 96:
      //thunderstorm hail light
      return "⛈️";
    case 97:
      //thunderstorm hail heavy
      return "⛈️";
    default:
      return "🌫";
  }
}
