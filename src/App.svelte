<script>
  import MediaQuery from "../node_modules/svelte-media-queries/components/MediaQuery.svelte";
  import DefaultView from "./lib/views/defaultView.svelte";
  import TabletView from "./lib/views/tabletView.svelte";
  import MobileView from "./lib/views/mobileView.svelte";
  import LoadingSpinner from "./lib/components/loadingSpinner.svelte";
  import ErrorScreen from "./lib/components/ErrorScreen.svelte";
  import LoadingModal from "./lib/components/loadingModal.svelte";
  import { initBackend } from "./lib/services/BackendManager.js";
  import { loadingModal } from "./lib/data/stores/Modals.js";
  import { lastSearchedCitys } from "./lib/data/stores/LocationDataStores.js";
  $: console.log($lastSearchedCitys);
  $: show = $loadingModal;
</script>

{#await initBackend()}
  <div class="loading-screen">
    <LoadingSpinner />
  </div>
{:then}
  <div class="content">
    <MediaQuery query="(min-width: 1281px)" let:matches>
      {#if matches}
        <!-- default -->
        <div class="deafult">
          <DefaultView />
        </div>
      {/if}
    </MediaQuery>

    <MediaQuery query="(min-width: 701px) and (max-width: 1280px)" let:matches>
      {#if matches}
        <!-- tablet -->
        <div class="tablet">
          <TabletView />
        </div>
      {/if}
    </MediaQuery>

    <MediaQuery query="(max-width: 700px)" let:matches>
      {#if matches}
        <!-- mobile -->

        <div class="mobile">
          <MobileView />
        </div>
      {/if}
    </MediaQuery>
  </div>
{:catch error}
  <ErrorScreen />
  <p>{error}</p>
{/await}
{#if show}
  <LoadingModal />
{/if}

<style>
  .content {
    position: relative;
    height: 800px;
    padding-bottom: calc(2rem + 4%);
  }
  .deafult {
    margin: 2rem;
    height: 100%;
  }
  .tablet {
    margin: 1rem;
    height: 100%;
  }
  .mobile {
    margin: 1rem;
    height: 100%;
  }
</style>
