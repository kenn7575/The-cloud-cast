<script>
  import MediaQuery from "../node_modules/svelte-media-queries/components/MediaQuery.svelte";
  import DefaultView from "./lib/views/defaultView.svelte";
  import TabletView from "./lib/views/tabletView.svelte";
  import MobileView from "./lib/views/mobileView.svelte";
  import LoadingSpinner from "./lib/components/loadingSpinner.svelte";

  import { initBackend } from "./lib/services/BackendManager.js";
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
{:catch error}
  <h2>error</h2>
{/await}

<style>
  .content {
    height: 800px;
    padding-bottom: calc(2rem + 4%);
  }
  .loading-screen {
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    z-index: 100;
    background: #fff;
    padding: 3rem;
    border-radius: 10px;
  }
  .deafult {
    padding: 2rem;
    height: 100%;
  }
</style>
