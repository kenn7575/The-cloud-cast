<script>
  export let time;
  export let icon;
  export let temp_max;
  export let temp_min;
</script>

<div class="row">
  <h5>{time}</h5>
  <div class="svg">
    {@html icon}
  </div>
  <div class="temperatures">
    <p class="min">{temp_min + "°"}</p>
    <p>{temp_max + "°"}</p>
  </div>
</div>

<style>
  .row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    gap: 0.5rem;
  }
  .svg {
    width: 50%;
    height: 50%;
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .temperatures {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }
  .min {
    opacity: 0.75;
  }
</style>
