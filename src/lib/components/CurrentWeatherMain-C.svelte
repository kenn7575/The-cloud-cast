<script>
  import { currentLocation } from "../data/stores/LocationDataStores.js";
  $: currentData = $currentLocation;
</script>

{#if currentData}
  <h2>{currentData.city}</h2>
  <h3>{currentData.country}</h3>
{/if}
