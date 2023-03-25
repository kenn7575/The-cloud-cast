import "./app.css";
import App from "./App.svelte";

const app = new App({
  target: document.getElementById("app"),
});

export default app;

//this function is getting the current weather data from the API and setting the color theme
import { setColorTheme } from "./lib/services/setColorThemeService.js";
setColorTheme();
