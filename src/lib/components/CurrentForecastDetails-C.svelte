<script>
    import { sunSet } from "../../../public/icons/sunSet.js";
    import CurrentForecastDetails from "./CurrentForecastDetails-D.svelte";
    import { currentWeatherData } from "../data/stores/WeatherDataStores";
     // import CurrentForecast from "./CurrentForecast-D.svelte";

    $: CurrentForecast = $currentWeatherData;
</script>

<div class="flex">
    <div class="grid-template">
        <CurrentForecastDetails
            Title="Solnedgang"
            iconSvg="{sunSet}"
            text1="Feels Like"
            text2="Feels Like"
        />
    </div>
    <div class="grid-template"></div>
    <div class="grid-template"></div>
    <div class="grid-template"></div>
    <div class="grid-template"></div>
    <div class="grid-template"></div>
    <div class="grid-template"></div>
    <div class="grid-template"></div>
</div>

<style>
    .flex {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        width: 100%;
        height: 100%;  
        gap: 1rem;; 
        overflow-x: auto;
    }
    .grid-template {
        background-color: var(--background-3);
        border: 3px solid #fff;
        height: calc(50% - 1rem - 3px);
        border-radius: 20px;
        min-width: 180px;
    }
</style>