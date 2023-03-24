<div class="container">
  <div class="default-grid">
    <div class="grid-element one" />
    <div class="grid-element two" />
    <div class="grid-element three" />
    <div class="grid-element four " />
    <div class="grid-element five ">
      <h2>hello world</h2>
    </div>
  </div>
</div>

<style>
  .container {
    grid-template-rows: calc(29 * 8px) calc(43 * 8px) calc(28 * 8px);
    grid-gap: 3% 2%;
  }
  .default-grid {
    display: grid;
    grid-template-columns: 29% 37% 30%;
    grid-template-rows: 29% 43% 28%;
    grid-gap: 5% 2%;
    width: 100%;
    height: 800px;
  }
  .grid-element {
    border-radius: 25px;
    /* min-height: 230px; */
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
  .five {
    grid-column: 2/4;
    grid-row: 3/4;
  }
</style>
