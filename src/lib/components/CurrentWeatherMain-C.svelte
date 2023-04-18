<script>
  import { currentLocation } from "../data/stores/LocationDataStores";
  import { currentWeatherData } from "../data/stores/WeatherDataStores";
  import { GetWeatherSympol } from "../services/IconTranslationService";
  $: currentData = $currentLocation;
  $: currentWeather = $currentWeatherData;
  $: icon = GetWeatherSympol(currentWeather.weathercode);
</script>

{#if currentData}
  <div class="content">
    <div class="text">
      <div class="location">
        <p>{currentData.country}</p>
        <h2>{currentData.city}</h2>
      </div>
      <h1>{currentWeather.temp}°</h1>
    </div>
    <div class="icon">
      {@html icon}
    </div>
  </div>
{/if}

<style>
  .content {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-between;
  }
  .text {
    justify-content: space-around;
    height: 100%;
    display: flex;
    flex-direction: column;
    color: var(--text-1);
  }
  .text * {
    margin: 0;
  }
  .icon {
    width: 14rem;
  }
  h2 {
    font-size: 1.5rem;
    font-weight: 500;
  }
  p {
    font-size: 0.9rem;
    font-weight: 400;
  }
  h1 {
    font-size: 6rem;
    font-weight: 600;
  }
</style>
