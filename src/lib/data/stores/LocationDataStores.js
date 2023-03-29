import { writable } from "svelte/store";
const lastSearchedCitys = writable();
const currentLocation = writable();
const Location = writable();

export { lastSearchedCitys, currentLocation, Location };
