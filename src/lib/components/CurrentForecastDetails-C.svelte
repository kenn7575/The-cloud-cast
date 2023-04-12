<script>
  import { sunSet } from "../../../public/icons/sunSet.js";
  import { sunRise } from "../../../public/icons/sunRise.js";
  import { windDirection } from "../../../public/icons/windDirection.js";
  import { windSpeed } from "../../../public/icons/windSpeed.js";
  import { humidity } from "../../../public/icons/humidity.js";
  import { rainSum } from "../../../public/icons/rainSum.js";
  import { precipitationProbability } from "../../../public/icons/precipitationProbability.js";
  import { uvIndex } from "../../../public/icons/uvIndex.js";
  import CurrentForecastDetails from "./CurrentForecastDetails-D.svelte";
  import { currentWeatherData } from "../data/stores/WeatherDataStores";
  // import CurrentForecast from "./CurrentForecast-D.svelte";

  $: CurrentForecast = $currentWeatherData;
</script>

<div class="flex">
  <div class="grid-template">
    <CurrentForecastDetails
      Title="Solnedgang"
      iconSvg={sunSet}
      value={CurrentForecast.sunset}
      explanation="I dag"
    />
  </div>
  <div class="grid-template">
    <CurrentForecastDetails
      Title="Soloppgang"
      iconSvg={sunRise}
      value={CurrentForecast.sunrise}
      explanation="I dag"
    />
  </div>
  <div class="grid-template">
    <CurrentForecastDetails
      windDirection={CurrentForecast.detailedWindDirection}
      Title="Vind"
      iconSvg={windDirection}
      value={CurrentForecast.windSpeed + " m/s"}
      explanation={"Fra " + CurrentForecast.windDirection}
    />
  </div>

  <div class="grid-template" />
  <div class="grid-template" />
  <div class="grid-template" />
  <div class="grid-template" />
  <div class="grid-template" />
</div>

<style>
  .flex {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    width: 100%;
    height: 100%;
    gap: 1rem;
    overflow-x: auto;
  }
  .grid-template {
    box-sizing: border-box;
    background-color: var(--background-3);
    border: 3px solid #fff;
    height: calc(50% - 1rem);
    border-radius: 20px;
    min-width: 200px;
    color: var(--text-1);
  }
</style>
