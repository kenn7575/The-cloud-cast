<script>
  import LoadingSpinner from "./loadingSpinner.svelte";
</script>

<div class="loading-screen">
  <div class="loading-spinner">
    <LoadingSpinner />
  </div>
</div>

<style>
  .loading-spinner {
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    z-index: 100;
    background: #fff;
    padding: 3rem;
    border-radius: 10px;
  }
  .loading-screen {
    z-index: 1;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #0008;
  }
</style>
