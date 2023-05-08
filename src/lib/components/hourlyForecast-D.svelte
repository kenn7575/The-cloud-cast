<script>
  export let time;
  export let icon;
  export let temp;
  export let sunset;
  export let sunrise;
  export let timeData;

  import { GetWeatherSympol } from "../services/IconTranslationService.js";
  $: svg = GetWeatherSympol(icon, sunrise, sunset, timeData);
  console.log(
    "🚀 ~ file: hourlyForecast-D.svelte:11 ~ icon, sunrise, sunset, timeData:",
    icon,
    sunrise,
    sunset,
    timeData
  );
</script>

<div class="flex">
  <div class="hour bg-4">
    <p class="time t-1">{time}</p>
    <div class="svg">
      {@html svg}
    </div>
    <p class="temp t-2">{temp + "°"}</p>
  </div>
</div>

<style>
  .hour {
    min-width: 110px;
    height: 140px;
    border-radius: 15px;
    position: relative;
  }
  .hour::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 30%;
    border-radius: 15px 15px 0 0;

    background: var(--background-3);
  }
  .svg {
    width: 50%;
    height: 50%;
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .time {
    font-size: 1rem;
    font-weight: 400;
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 1.2rem;
    color: var(--text-1);
    z-index: 1;
  }
  .temp {
    font-size: 1.2rem;
    font-weight: 400;
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 1.2rem;
    font-size: 1.375rem;
    font-weight: 700;
    z-index: 1;
  }
</style>
