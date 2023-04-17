<script>
  import CurrentForecast from "../components/CurrentForecastDetails-C.svelte";
  import CurrentForecastMain from "../components/CurrentWeatherMain-C.svelte";
  import LocationFinder from "../components/LocationFinder-C.svelte";
  import HourlyForecast from "../components/hourlyForcast-C.svelte";
  import DailyForecast from "../components/DailyForecast-C.svelte";
  import { x } from "../../../public/icons/x.js";
  import { searchGlass } from "../../../public/icons/searchGlass.js";
  import { fly } from "svelte/transition";
  import { LocationFinderModal } from "../data/stores/Modals.js";
  $: visible = $LocationFinderModal;
</script>

<div class="back">
  <div class="grid-element current-main">
    <button
      on:click={() => {
        LocationFinderModal.update(() => {
          return true;
        });
      }}
    >
      <div class="openSearchBtn">
        {@html searchGlass}
      </div>
    </button>

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
{#if visible}
  <div transition:fly={{ x: -200, duration: 500 }} class="searchbox bg-3">
    <button
      on:click={() => {
        visible = false;
      }}
    >
      <div class="closeSearchBtn">
        {@html x}
      </div>
    </button>
    <LocationFinder />
  </div>
{/if}

<style>
  button {
    background: none;
    border: none;
  }
  .searchbox {
    display: flex;
    flex-direction: column;
    align-items: self-start;
    justify-content: flex-start;
    position: fixed;
    height: 100vh;
    width: 100%;
    padding: 0.5rem;
    box-sizing: border-box;
    padding-top: 1rem;
    top: 50%;
    left: 50%;
    z-index: 2;
    transform: translate(-50%, -50%);
  }
  .closeSearchBtn {
    margin: 1rem 0 1rem 1rem;
    scale: 2.5;
  }
  .openSearchBtn {
    position: fixed;
    top: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
  }

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
