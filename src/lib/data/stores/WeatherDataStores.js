import { writable } from "svelte/store";
const weatherData = writable(); //this is all the weather data from the api
const hourlyWeatherData = writable(); //this is the hourly weather data from the api
const dailyWeatherData = writable(); //this is the daily weather data from the api
const currentWeatherData = writable(); //this is the current weather data from the api

export { weatherData, hourlyWeatherData, dailyWeatherData, currentWeatherData };
