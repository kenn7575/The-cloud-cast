<script>
  import { dailyWeatherData } from "../data/stores/WeatherDataStores.js";
  import DailyForecast from "./DailyForecast-D.svelte";

  $: DailyData = $dailyWeatherData;
</script>

<div class="rows">
  {#if DailyData != null}
    {#if DailyData.length === 0}
      <p>Loading...</p>
    {/if}
    {#each DailyData as hour}
      <DailyForecast
        time={hour.time}
        icon={hour.weathercode}
        temp_max={hour.temperature_max}
        temp_min={hour.temperature_min}
      />
    {/each}
  {/if}
</div>

<style>
  .rows {
    height: 93%;
    overflow-y: auto;
  }
</style>
