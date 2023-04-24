import { clearSkySun } from "../../../public/icons/clearSkySun.js";
import { clearSkyMoon } from "../../../public/icons/clearSkyMoon.js";
import { fewCloudsSun } from "../../../public/icons/fewCloudsSun.js";
import { fewCloudsMoon } from "../../../public/icons/fewCloudsMoon.js";
import { overcast } from "../../../public/icons/overcast.js";
import { fog } from "../../../public/icons/fog.js";
import { slightRain } from "../../../public/icons/slightRain.js";
import { moderateRain } from "../../../public/icons/moderateRain.js";
import { heavyRain } from "../../../public/icons/heavyRain.js";
import { snowShower } from "../../../public/icons/snowShower.js";
import { snowGrains } from "../../../public/icons/snowGrains.js";
import { snowFall } from "../../../public/icons/snowFall.js";
import { thunder } from "../../../public/icons/thunder.js";
import { freezingRain } from "../../../public/icons/freezingRain.js";
import { iconNotFound } from "../../../public/icons/iconNotFound.js";

import isNight from "../services/nightTimeCalculator.js";

function validate(time, sunset, sunrise) {
  if (time == null || sunset == null || sunrise == null) {
    return false;
  } else if (
    time === undefined ||
    sunset === undefined ||
    sunrise === undefined
  ) {
    return false;
  } else {
    return true;
  }
}
export function GetWeatherSympol(weather, sunset, sunrise, time) {
  switch (weather) {
    case 0:
      //clear sky
      if (validate(time, sunset, sunrise)) {
        if (isNight(sunset, sunrise, time)) {
          return clearSkyMoon;
        } else {
          return clearSkySun;
        }
      } else {
        return clearSkySun;
      }

    case 1:
      //few clouds
      if (validate(time, sunset, sunrise)) {
        if (isNight(sunset, sunrise, time)) {
          return fewCloudsMoon;
        } else {
          return fewCloudsSun;
        }
      } else {
        return fewCloudsSun;
      }

    case 2:
      //partly cloudy
      if (validate(time, sunset, sunrise)) {
        if (isNight(sunset, sunrise, time)) {
          return fewCloudsMoon;
        } else {
          return fewCloudsSun;
        }
      } else {
        return fewCloudsSun;
      }

    case 3:
      //overcast
      return overcast;
    case 45:
      //fog
      return fog;
    case 48:
      //freezing fog
      return fog;
    case 51:
      //drizzle light - støvregn
      return slightRain;
    case 53:
      //drizzle moderate - støvregn
      return moderateRain;
    case 55:
      //drizzle intense - støvregn
      return heavyRain;
    case 56:
      //freezing drizzle light - støvregn
      return freezingRain;
    case 57:
      //freezing drizzle moderate - støvregn
      return freezingRain;
    case 61:
      //rain light
      return slightRain;
    case 63:
      //rain moderate
      return moderateRain;
    case 65:
      //rain intense
      return heavyRain;
    case 66:
      //freezing rain light
      return freezingRain;
    case 67:
      //freezing rain moderate
      return freezingRain;
    case 71:
      //show light
      return snowFall;
    case 73:
      //show moderate
      return snowFall;
    case 75:
      //show intense
      return snowFall;
    case 77:
      //snow grains - snefnug
      return snowGrains;
    case 80:
      //rain light
      return slightRain;
    case 81:
      //rain moderate
      return moderateRain;
    case 82:
      //rain intense
      return heavyRain;
    case 85:
      //snow showers light
      return snowShower;
    case 86:
      //snow showers heavy
      return snowShower;
    case 95:
      //thunderstorm
      return thunder;
    case 96:
      //thunderstorm hail light
      return thunder;
    case 97:
      //thunderstorm hail heavy
      return thunder;
    default:
      return iconNotFound;
  }
}
