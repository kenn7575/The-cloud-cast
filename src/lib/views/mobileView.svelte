<script>
  import CurrentForecast from "../components/CurrentForecastDetails-C.svelte";

  import HourlyForecast from "../components/hourlyForcast-C.svelte";
  import DailyForecast from "../components/DailyForecast-C.svelte";
</script>

<div class="first">
  <div class="grid-element one" />
  <div class="grid-element two">
    <CurrentForecast mobileMode={true} />
  </div>
</div>
<div class="second bg-2">
  <div class="three">
    <h4>Time oversigt</h4>
    <HourlyForecast />
  </div>
  <div class="four">
    <h4>Denne uge</h4>
    <DailyForecast />
  </div>
</div>

<style>
  .first {
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
  .second {
    position: relative;
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    border-radius: 25px;
    gap: 2rem;
    z-index: 1;
  }

  .four {
    min-height: 200px;
  }
</style>
