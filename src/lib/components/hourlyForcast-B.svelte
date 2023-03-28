<script>
  import HourlyForecast from "./hourlyForecast-C.svelte";
  import { hourlyWeatherData } from "../data/WeatherDataStores.js";

  $: hourlyData = [];
  hourlyData = $hourlyWeatherData;
  console.log(hourlyData, 1);
</script>

<div class="flex">
  {#if hourlyData.length === 0}
    <p>Loading...</p>
  {/if}
  {#each hourlyData as hour}
    <HourlyForecast time={hour.time} icon={hour.weathercode} temp={hour.temp} />
  {/each}
</div>

<style>
  .flex {
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    height: 140px;
    overflow-x: scroll;
    gap: 5px;
    padding-bottom: 1rem;
  }
</style>
