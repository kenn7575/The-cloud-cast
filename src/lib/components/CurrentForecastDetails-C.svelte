<script>
    import { currentWeatherData } from "../data/stores/WeatherDataStores";
     // import CurrentForecast from "./CurrentForecast-D.svelte";

    $: CurrentForecast = $currentWeatherData;
</script>

<div class="flex">
    <div class="grid-template"></div>
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
        gap: 0.5rem;; 
        overflow-x: auto;
    }
    .grid-template {
        background-color: #fff;
        border: 1px solid #ccc;
        height: calc(50% - 0.5rem);
        border-radius: 20px;
        min-width: 150px;
    }
</style>