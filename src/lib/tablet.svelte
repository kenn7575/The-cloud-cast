<script>
</script>

<div class="container">
  <div class="default-grid">
    <div class="grid-element one " />
    <div class="grid-element two" />
    <div class="grid-element three" />
    <div class="grid-element four " />
  </div>
</div>

<style>
  .container {
    height: 800px;
  }
  .default-grid {
    display: grid;
    grid-template-columns: 53% 44%;
    grid-template-rows: calc(29 * 8px) calc(43 * 8px) calc(28 * 8px);
    grid-gap: 3% 2%;
    width: 100%;
    height: 100%;
  }
  .grid-element {
    border-radius: 25px;
    background-color: #eee;
    border: 1px solid #ccc;
  }
  .one {
    grid-column: 1/2;
    grid-row: 1/2;
  }
  .two {
    grid-column: 2/3;
    grid-row: 1/3;
  }
  .three {
    grid-column: 1/2;
    grid-row: 2/3;
  }
  .four {
    grid-column: 1/3;
    grid-row: 3/4;
  }
</style>
