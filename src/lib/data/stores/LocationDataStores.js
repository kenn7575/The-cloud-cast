import { writable } from "svelte/store";
const lastSearchedCitys = writable();
const currentLocation = writable();

export { lastSearchedCitys, currentLocation };
