import { RetreiveCurrentWeatherData } from "../data/apis/RetreiveWeatherData.js";
const lookupWeatherService = async (lat, lon) => {
  const result = await RetreiveCurrentWeatherData(lat, lon);
  console.log(result, "this is the result");
  return result;
};
export { lookupWeatherService };
