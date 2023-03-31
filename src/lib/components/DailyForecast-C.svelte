<script>
import { DailyWeatherData } from "../data/stores/WeatherDataStores.js";
import DailyForecast from "./DailyForecast-D.svelte";


$: DailyData = $DailyWeatherData;
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
            temp_max={hour.temp}
            temp_min={hour.temp}
        />
        {/each}
    {/if}
</div>