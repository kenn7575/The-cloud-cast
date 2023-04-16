<script>
  import CurrentLocationWidget from "./CurrentLocationWidget-C.svelte";

  import SearchBox from "./SearchBox-D.svelte";
</script>

<div class="content">
  <SearchBox />
  <CurrentLocationWidget />
</div>

<style>
  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    justify-content: flex-start;
    height: 100%;
  }
</style>
