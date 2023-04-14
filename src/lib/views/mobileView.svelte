<script>
  import CurrentForecast from "../components/CurrentForecastDetails-C.svelte";
  import CurrentForecastMain from "../components/CurrentWeatherMain-C.svelte";

  import HourlyForecast from "../components/hourlyForcast-C.svelte";
  import DailyForecast from "../components/DailyForecast-C.svelte";
</script>

<div class="back">
  <div class="grid-element current-main">
    <CurrentForecastMain />
  </div>
  <div class="grid-element current-detail">
    <CurrentForecast mobileMode={true} />
  </div>
</div>
<div class="overlay bg-2">
  <div class="hourly">
    <h4>Time oversigt</h4>
    <HourlyForecast />
  </div>
  <div class="daily">
    <h4>Denne uge</h4>
    <DailyForecast />
  </div>
</div>

<style>
  .back {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 55% 38%;
    grid-gap: 3% 7%;
    width: 100%;
    height: 50%;
    position: sticky;
    top: 2rem;
  }
  .overlay {
    position: relative;
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    border-radius: 25px;
    gap: 2rem;
    z-index: 1;
    margin-bottom: 1rem;
  }

  .daily {
    min-height: 200px;
  }
  .current-main {
    padding: 0.5rem;
  }
</style>
