import { writable } from "svelte/store";
const weatherData = writable();
const hourlyWeatherData = writable();
const dailyWeatherData = writable();
const currentWeatherData = writable();

export default weatherData;
export { hourlyWeatherData, dailyWeatherData, currentWeatherData };
