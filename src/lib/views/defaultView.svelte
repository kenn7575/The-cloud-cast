<script>
  import HourlyForecast from "../components/hourlyForcast-C.svelte";
  import DailyForecast from "../components/DailyForecast-C.svelte";
  import CurrentForecast from "../components/CurrentForecastDetails-C.svelte";
  import LocationFinder from "../components/LocationFinder-C.svelte";
  import CurrentForecastMain from "../components/CurrentWeatherMain-C.svelte";
</script>

<div class="grid bg-1">
  <div class="grid-element srearch bg-4">
    <LocationFinder />
  </div>

  <div class="grid-element current-main">
    <CurrentForecastMain />
  </div>

  <div class="grid-element daily bg-2">
    <h4>Denne uge</h4>
    <DailyForecast />
  </div>
  <div class="grid-element current-detail">
    <CurrentForecast />
  </div>

  <div class="grid-element hourly bg-2">
    <h4>Time oversigt</h4>
    <HourlyForecast />
  </div>
</div>

<style>
  .grid {
    display: grid;
    grid-template-columns: 29% 37% 30%;
    grid-template-rows: 29% 43% 28%;
    grid-gap: 3% 2%;
    width: 100%;
    height: 800px;
    padding-bottom: calc(2rem + 4%);
  }
  .srearch {
    grid-column: 1/1;
    grid-row: 1/4;
    display: flex;
    outline: solid var(--text-1) 5px;
    outline-offset: -5px;
  }
  .current-main {
    grid-column: 2/3;
    grid-row: 1/2;
  }
  .daily {
    grid-column: 3/4;
    grid-row: 1/3;
    padding: 0 1rem;
  }
  .current-detail {
    grid-column: 2/3;
    grid-row: 2/3;
  }
  .hourly {
    grid-column: 2/4;
    grid-row: 3/4;
    padding: 0 1rem;
  }
</style>
