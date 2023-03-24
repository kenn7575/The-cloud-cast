<script>
  import HourlyForecast from "../components/hourlyForcast-B.svelte";
</script>

<div class="first">
  <div class="grid-element one " />
  <div class="grid-element two " />
</div>
<div class="second bg-2">
  <div class="three">
    <h4>Time oversigt</h4>
    <HourlyForecast />
  </div>
  <div class="four" />
</div>

<style>
  .first {
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 55% 38%;
    grid-gap: 3% 7%;
    width: 100%;
    height: 50%;
    position: sticky;
    top: 2rem;
  }
  .second {
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    border-radius: 25px;
    gap: 2rem;
  }
  .three {
  }
  .four {
    min-height: 200px;
  }
</style>
