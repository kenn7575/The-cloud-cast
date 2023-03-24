<script>
  import MediaQuery from "../node_modules/svelte-media-queries/components/MediaQuery.svelte";
  import Default from "./lib/default.svelte";
  import Tablet from "./lib/tablet.svelte";
  import DataExample from "./lib/data_example.svelte";
</script>

<MediaQuery query="(min-width: 1281px)" let:matches>
  {#if matches}
    <!-- default -->
    <Default />
  {/if}
</MediaQuery>

<MediaQuery query="(min-width: 481px) and (max-width: 1280px)" let:matches>
  {#if matches}
    <!-- tablet -->
    <Tablet />
  {/if}
</MediaQuery>

<MediaQuery query="(max-width: 480px)" let:matches>
  {#if matches}
    <!-- mobile -->
  {/if}
</MediaQuery>
<!-- <DataExample /> -->
