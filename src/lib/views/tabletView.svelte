<script>
  import CurrentForecast from "../components/CurrentForecastDetails-C.svelte";
  import CurrentForecastMain from "../components/CurrentWeatherMain-C.svelte";
  import HourlyForecast from "../components/hourlyForcast-C.svelte";
  import DailyForecast from "../components/DailyForecast-C.svelte";
  import { searchGlass } from "../../../public/icons/searchGlass.js";
  import { LocationFinderModal } from "../data/stores/Modals.js";
  import LocationFinder from "../components/LocationFinder-C.svelte";
  import { x } from "../../../public/icons/x.js";
  import { fly, fade } from "svelte/transition";

  function toggleMenu() {
    LocationFinderModal.update((bool) => {
      return !bool;
    });
  }
  $: visible = $LocationFinderModal;
</script>

{#if visible}
  <div
    transition:fade
    class="backDrop"
    on:keypress={toggleMenu}
    on:click={toggleMenu}
  />
  <div class="locationFinder" transition:fly={{ x: -200, duration: 500 }}>
    <div class="close">
      <button class="closeBtn" on:click={toggleMenu}>
        {@html x}
      </button>
    </div>
    <LocationFinder />
  </div>
{/if}

<div class="grid">
  <div class="grid-element current-main">
    <button class="searchBtn" on:click={toggleMenu}>
      <div class="openSearchBtn">
        {@html searchGlass}
      </div>
    </button>
    <CurrentForecastMain />
  </div>
  <div class="grid-element daily bg-2">
    <h4>Denne uge</h4>
    <DailyForecast />
  </div>
  <div class="grid-element current-detail">
    <CurrentForecast />
  </div>
  <div class="grid-element hourly bg-2">
    <h4>Time oversigt</h4>

    <HourlyForecast />
  </div>
</div>

<style>
  .backDrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    z-index: 100;
  }
  .close {
    position: absolute;
    top: 0;
    right: -50px;
    width: 50px;
    height: 50px;
    border-radius: 25px;
  }
  .closeBtn {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    cursor: pointer;
  }

  .locationFinder {
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    max-height: calc(100% - 1rem);
    background: white;
    z-index: 100;
    border-radius: 25px;
  }
  button.searchBtn {
    position: absolute;
    top: 0px;
    right: 0px;
    width: 70px;
    height: 70px;
    cursor: pointer;
  }
  button {
    background: none;
    border: none;
  }
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
  .current-main {
    grid-column: 1/2;
    grid-row: 1/2;
    padding: 0.5rem;
    position: relative;
  }
  .daily {
    grid-column: 2/3;
    grid-row: 1/3;
    padding: 0 1rem;
  }
  .current-detail {
    grid-column: 1/2;
    grid-row: 2/3;
  }
  .hourly {
    grid-column: 1/3;
    grid-row: 3/4;
    padding: 0 1rem;
  }
</style>
