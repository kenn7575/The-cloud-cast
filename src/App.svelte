<script>
  import MediaQuery from "../node_modules/svelte-media-queries/components/MediaQuery.svelte";
  import DefaultView from "./lib/views/defaultView.svelte";
  import TabletView from "./lib/views/tabletView.svelte";
  import MobileView from "./lib/views/mobileView.svelte";

  import { hourlyWeatherData } from "./lib/data/WeatherDataStores.js";
  $: console.log($hourlyWeatherData);
</script>

<div class="content">
  <MediaQuery query="(min-width: 1281px)" let:matches>
    {#if matches}
      <!-- default -->
      <DefaultView />
    {/if}
  </MediaQuery>

  <MediaQuery query="(min-width: 701px) and (max-width: 1280px)" let:matches>
    {#if matches}
      <!-- tablet -->
      <TabletView />
    {/if}
  </MediaQuery>

  <MediaQuery query="(max-width: 700px)" let:matches>
    {#if matches}
      <!-- mobile -->
      <MobileView />
    {/if}
  </MediaQuery>
</div>

<style>
  .content {
    height: 800px;
    margin-bottom: calc(2rem + 4%);
  }
</style>
