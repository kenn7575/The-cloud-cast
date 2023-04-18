<script>
  import CurrentLocationWidget from "./CurrentLocationWidget-C.svelte";
  import SearchHistoryWidget from "./SearchHistoryWidget-C.svelte";

  import SearchBox from "./SearchBox-D.svelte";
</script>

<div class="content">
  <div class="search">
    <SearchBox />
  </div>

  <CurrentLocationWidget />
  <!-- This will only show if the user has allowed location -->

  <SearchHistoryWidget />
</div>

<style>
  .search {
    position: sticky;
    top: 0;
    width: 100%;
  }
  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 25px;
    justify-content: flex-start;
    height: 100%;
    max-height: 100%;
    overflow: auto;
  }
</style>
