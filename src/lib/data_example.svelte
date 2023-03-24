<script>
  import { GetWeatherSympol } from "./services/IconTranslationService.js";
  import { getWetherData } from "./services/WeatherDataAccess";
</script>

{#await getWetherData()}
  <!-- promise is pending -->
  <p>Loading...</p>
{:then value}
  <!-- promise was fulfilled -->

  {#each value.daily.weathercode as code}
    <div class="svg">
      {@html GetWeatherSympol(code)}
    </div>
  {/each}
{:catch error}
  <!-- promise was rejected -->
  <p>Something went wrong: {error.message}</p>
{/await}

<style>
  .svg {
    width: 100px;
    height: 100px;
  }
</style>
