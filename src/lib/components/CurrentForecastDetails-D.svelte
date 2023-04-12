<script>
  export let Title;
  export let iconSvg;
  export let value;
  export let explanation;
  export let windDirection = 0;
</script>

<div class="card">
  <div class="icon" style="transform: rotate({windDirection}deg)">
    {@html iconSvg}
  </div>
  <div class="content">
    <h1>{Title}</h1>

    <div class="text">
      <h2>{value}</h2>
      <p>{explanation}</p>
    </div>
  </div>
</div>

<style>
  .card {
    box-sizing: border-box;
    height: 100%;
    padding: 0.5rem;
    position: relative;
  }
  .icon {
    width: 90px;
    height: 90px;
    position: absolute;
    top: 25px;
    right: 10px;
    opacity: 0.8;
  }
  h1 {
    margin: 0;
    font-size: 1rem;
    font-weight: 400;
  }
  h2 {
    margin: 0;
    font-size: 1.6rem;
    font-weight: 600;
  }
  p {
    margin: 0;
    font-size: 1rem;
    font-weight: 500;
  }

  .content {
    height: 100%;
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    align-items: flex-start;
    padding-left: 0.5rem;
  }
</style>
