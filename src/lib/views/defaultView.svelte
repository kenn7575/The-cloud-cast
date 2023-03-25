<script>
  import HourlyForecast from "../components/hourlyForcast-B.svelte";
</script>

<div class="grid bg-1">
  <div class="grid-element one bg-2" />
  <div class="grid-element two" />
  <div class="grid-element three bg-2" />
  <div class="grid-element four " />
  <div class="grid-element five bg-2">
    <h4>Time oversigt</h4>

    <HourlyForecast />
  </div>
</div>

<style>
  .grid {
    display: grid;
    grid-template-columns: 29% 37% 30%;
    grid-template-rows: 29% 43% 28%;
    grid-gap: 3% 2%;
    width: 100%;
    height: 100%;
    padding-bottom: calc(2rem + 4%);
  }
  .one {
    grid-column: 1/1;
    grid-row: 1/4;
  }
  .two {
    grid-column: 2/3;
    grid-row: 1/2;
  }
  .three {
    grid-column: 3/4;
    grid-row: 1/3;
  }
  .five {
    grid-column: 2/4;
    grid-row: 3/4;
    padding: 0 1rem;
  }
</style>
