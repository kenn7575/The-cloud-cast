<script>
  import { filterPlaces } from "../services/FilterPlaceAutocompletions.js";
  import { PlaceAutoComplete } from "../data/apis/PlaceAutoComplete.js";
  import { GetAndUpdateWeather } from "../services/BackendManager.js";
  import { addLocationToHistory } from "../services/updateLocalStorage.js";
  import { loadingModal } from "../data/stores/Modals.js";

  let searchRequest = "";
  let listOfCompletions = [];

  async function handleSerchReqest() {
    if (searchRequest.length > 2) {
      const results = await PlaceAutoComplete(searchRequest);
      listOfCompletions = filterPlaces(results);
    }
  }
  function updateWeather(place) {
    loadingModal.update(() => {
      return true;
    });
    addLocationToHistory(place);
    searchRequest = "";
    listOfCompletions = [];
    GetAndUpdateWeather({
      lat: place.lat,
      lon: place.lon,
      city: place.city,
      country: place.country,
    });
  }
</script>

<div class="search-box">
  <div class="row">
    <input
      bind:value={searchRequest}
      on:input={handleSerchReqest}
      type="text"
      placeholder="Søg efter by"
      id="input-box"
      autocomplete="off"
    />
    <button>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        width="45px"
        height="45px"
      >
        <path
          d="M 27 9 C 17.075 9 9 17.075 9 27 C 9 36.925 17.075 45 27 45 C 31.129213 45 34.9263 43.587367 37.966797 41.240234 L 51.048828 54.322266 C 51.952828 55.226266 53.418266 55.226266 54.322266 54.322266 C 55.226266 53.418266 55.226266 51.952828 54.322266 51.048828 L 41.240234 37.966797 C 43.587367 34.9263 45 31.129213 45 27 C 45 17.075 36.925 9 27 9 z M 27 13 C 34.719 13 41 19.281 41 27 C 41 34.719 34.719 41 27 41 C 19.281 41 13 34.719 13 27 C 13 19.281 19.281 13 27 13 z"
        />
      </svg>
    </button>
  </div>
  <div class="autocomplete">
    <ul>
      {#each listOfCompletions as place (place.id)}
        <li>
          <button
            on:click={() => {
              updateWeather(place);
            }}>{place.city}, {place.country}</button
          >
        </li>
      {/each}
    </ul>
  </div>
</div>

<style>
  .search-box {
    width: 100%;
    background: #fff;
    height: min-content;
    border-radius: 25px;
  }
  .row {
    display: flex;
    align-items: center;
    padding: 10px 20px;
  }
  path {
    fill: #555;
  }
  input {
    flex: 1;
    height: 40px;
    background: transparent;
    border: 0;
    outline: 0;
    font-size: 1rem;
    color: #333;
  }

  button {
    border: none;
    background: transparent;
    cursor: pointer;
    width: max-content;
  }
  .autocomplete ul {
    margin-top: 0;
    border-top: 1px solid #999;
    padding: 15px 10px;
  }
  .autocomplete ul li {
    list-style: none;
    border-radius: 3px;
    padding: 15px;
    cursor: pointer;
  }
  .autocomplete ul li:hover {
    background: #ddd;
  }
</style>
