<script>
  import { RetreiveCurrentWeatherData } from "../data/apis/RetreiveWeatherData.js";
  import { userLocation } from "../data/stores/LocationDataStores";
  import { GetAndUpdateWeather } from "../services/BackendManager.js";
  import { addLocationToHistory } from "../services/LocationLocalStorageManager.js";
  import { loadingModal } from "../data/stores/Modals.js";
  import { GetWeatherSympol } from "../services/IconTranslationService.js";

  function updateWeather(place) {
    loadingModal.update(() => {
      return true;
    });
    addLocationToHistory(place);
    GetAndUpdateWeather({
      lat: place.lat,
      lon: place.lon,
      city: place.city,
      country: place.country,
    });
  }

  $: location = $userLocation;
</script>

{#if location}
  <div class="container">
    <h4>Min lokalitet</h4>
    <button
      on:click={() => {
        updateWeather({
          city: location.city,
          country: location.country,
          lat: location.lat,
          lon: location.lon,
        });
      }}
    >
      <div class="content">
        {#if location !== undefined}
          {#await RetreiveCurrentWeatherData(location.lat, location.lon)}
            <p>Loading...</p>
          {:then weather}
            <div class="text">
              <h2>{location.city}</h2>
              <h1>{Math.round(weather.current_weather["temperature"])}°</h1>
            </div>
            <div class="svg">
              {@html GetWeatherSympol(weather.current_weather["weathercode"])}
            </div>
          {/await}
        {/if}
      </div>
    </button>
  </div>
{/if}

<style>
  .svg {
    min-width: 6rem;
    min-height: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .content {
    color: var(--text-1);
    box-sizing: border-box;
    background-color: var(--background-1);
    display: flex;
    width: 100%;

    text-align: center;
    border-radius: 25px;
    height: 8rem;
    padding: 1rem;
    margin: 0;
    justify-content: space-between;
    border: var(--text-1) solid 5px;
  }
  .text {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
  }
  .container {
    box-sizing: border-box;
    background: var(--background-2);
    width: 100%;
    margin-top: 2rem;
    border-radius: 25px;
  }
  button {
    width: 100%;
    background: transparent;
    border: none;
    outline: none;
    padding: 0;
    cursor: pointer;
  }

  h2,
  h1 {
    margin: 0;
  }
  h4 {
    margin: 0.5rem;
    margin-top: 0.8rem;
  }
</style>
