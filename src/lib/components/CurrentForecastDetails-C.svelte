<script>
  import { sunSet } from "../../../public/icons/sunSet.js";
  import { sunRise } from "../../../public/icons/sunRise.js";
  import { windDirection } from "../../../public/icons/windDirection.js";
  import { windSpeed } from "../../../public/icons/windSpeed.js";
  import { apparent } from "../../../public/icons/apparent.js";
  import { rainSum } from "../../../public/icons/rainSum.js";
  import { precipitationProbability } from "../../../public/icons/precipitationProbability.js";
  import { uvIndex } from "../../../public/icons/uvIndex.js";
  import CurrentForecastDetails from "./CurrentForecastDetails-D.svelte";
  import { currentWeatherData } from "../data/stores/WeatherDataStores";
  // import CurrentForecast from "./CurrentForecast-D.svelte";
  export let mobileMode = false;
  let size;
  if (mobileMode) {
    size = "small";
  }
  $: CurrentForecast = $currentWeatherData;
</script>

<div class="flex {size}">
  <div class="grid-template">
    <CurrentForecastDetails
      Title="Vind"
      iconSvg={windSpeed}
      value={CurrentForecast.windSpeed + " m/s"}
      explanation={"Fra " + CurrentForecast.windDirection}
    />
  </div>

  <div class="grid-template">
    <CurrentForecastDetails
      Title="Regn"
      iconSvg={rainSum}
      value={CurrentForecast.rainSum + " mm"}
      explanation="I dag"
    />
  </div>
  <div class="grid-template">
    <CurrentForecastDetails
      Title="Regn"
      iconSvg={precipitationProbability}
      value={CurrentForecast.rainSum + "%"}
      explanation="Chance for regn i dag"
    />
  </div>
  <div class="grid-template">
    <CurrentForecastDetails
      Title="Føles som"
      iconSvg={apparent}
      value={CurrentForecast.apparent_temperature + "°"}
      explanation="På grund af vind"
    />
  </div>
  <div class="grid-template">
    <CurrentForecastDetails
      Title="UV indeks"
      iconSvg={uvIndex}
      value={CurrentForecast.uv}
      explanation={CurrentForecast.uv_clear_sky + " ved klar himmel"}
    />
  </div>
  <div class="grid-template">
    <CurrentForecastDetails
      Title="Luftfugtighed"
      iconSvg={precipitationProbability}
      value={CurrentForecast.humidity + "%"}
      explanation="Lige nu"
    />
  </div>
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
    height: calc(50% - 0.5rem);
    border-radius: 20px;
    min-width: 200px;
    color: var(--text-1);
  }
  .small .grid-template {
    height: 100%;
  }
</style>
