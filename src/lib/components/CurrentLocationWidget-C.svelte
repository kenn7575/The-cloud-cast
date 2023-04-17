<script>
  import { RetreiveCurrentWeatherData } from "../data/apis/RetreiveWeatherData.js";
  import { userLocation } from "../data/stores/LocationDataStores";
  import { GetAndUpdateWeather } from "../services/BackendManager.js";
  import { addLocationToHistory } from "../services/LocationLocalStorageManager.js";
  import { loadingModal } from "../data/stores/Modals.js";

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
      <h2>{location.city}</h2>
      {#if location !== undefined}
        {#await RetreiveCurrentWeatherData(location.lat, location.lon)}
          <p>Loading...</p>
        {:then weather}
          <h2>{Math.round(weather.current_weather["temperature"])}°</h2>
        {/await}
      {/if}
    </div>
  </button>
{/if}

<style>
  .content {
    box-sizing: border-box;
    background-color: var(--background-2);
    display: flex;
    width: 100%;
    flex-direction: column;
    text-align: start;
    border-radius: 25px;
    height: 8rem;
    padding: 0.5rem;
  }
  button {
    width: 100%;
    background: transparent;
    border: none;
    outline: none;
    padding: 0;
    cursor: pointer;
    margin-top: 2rem;
  }
</style>
