<script>
  import HourlyForecast from "./hourlyForecast-C.svelte";
  import { HourlyDataService } from "../services/getHourlyDataService";
  import { filterHourlyData } from "../services/filterHourlyDataService";

  //get data asynchronusly
  $: hourlyData = [];
  HourlyDataService().then((data) => {
    hourlyData = filterHourlyData(data);
  });
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
