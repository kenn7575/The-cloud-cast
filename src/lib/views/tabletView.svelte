<script>
  import CurrentForecast from "../components/CurrentForecastDetails-C.svelte";

  import HourlyForecast from "../components/hourlyForcast-C.svelte";
  import DailyForecast from "../components/DailyForecast-C.svelte";
</script>

<div class="grid">
  <div class="grid-element one" />
  <div class="grid-element two bg-2">
    <h4>Denne uge</h4>
    <DailyForecast />
  </div>
  <div class="grid-element three">
    <CurrentForecast />
  </div>
  <div class="grid-element four bg-2">
    <h4>Time oversigt</h4>

    <HourlyForecast />
  </div>
</div>

<style>
  .grid {
    display: grid;
    grid-template-columns: 53% 44%;
    grid-template-rows: 29% 43% 28%;
    grid-gap: 3% 2%;
    width: 100%;
    height: 800px;
  }
  .grid-element {
    border-radius: 25px;
  }
  .one {
    grid-column: 1/2;
    grid-row: 1/2;
  }
  .two {
    grid-column: 2/3;
    grid-row: 1/3;
    padding: 0 1rem;
  }
  .three {
    grid-column: 1/2;
    grid-row: 2/3;
  }
  .four {
    grid-column: 1/3;
    grid-row: 3/4;
    padding: 0 1rem;
  }
</style>
