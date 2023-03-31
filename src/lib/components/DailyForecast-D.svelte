<script>
  export let time;
  export let icon;
  export let temp_max;
  export let temp_min;

  import { GetWeatherSympol } from "../services/IconTranslationService.js";
  const svg = GetWeatherSympol(icon);
</script>

<div class="row">
  <h5>{time}</h5>
  <div class="svg">
    {@html svg}
  </div>
  <div class="temperatures">
    <p class="min">{temp_min + "°"}</p>
    <p>{temp_max + "°"}</p>
  </div>
</div>

<style>
  .row {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 75px;
    gap: 0.5rem;
  }
  .row::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 1.5px;
    top: 0px;
    left: 0px;
    background: var(--background-1);
  }
  .svg {
    width: 60px;
    height: 60px;
  }
  .temperatures {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;
  }
  .min {
    color: var(--text-4);
  }
  h5 {
    font-weight: 400;
    font-size: 0.85rem;
  }
</style>
