<script>
  import svelteLogo from "./assets/svelte.svg";
  import viteLogo from "/vite.svg";
  import { GetWeatherSympol } from "./lib/weather_api/IconService.js";
  const icon = GetWeatherSympol(0);
  console.log(icon);
</script>

<main>
  {@html icon}
  <!-- <div class="grid">
    <div class="grid-element one" />
    <div class="grid-element two" />
    <div class="grid-element three" />
    <div class="grid-element four " />
    <div class="grid-element five " />
  </div> -->
</main>

<style>
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
    width: 100%;
    height: 100%;
  }
  .grid-element {
    min-height: 230px;
    background-color: #eee;
    border: 1px solid #ccc;
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
  .four {
    grid-column: 2/4;
    grid-row: 3/4;
  }
</style>
