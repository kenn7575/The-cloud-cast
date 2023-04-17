import { writable } from "svelte/store";
const loadingModal = writable(false); //this is used to toggle the loading modal from anywhere in the app
const LocationFinderModal = writable(false); //this is used to toggle the location finder modal from anywhere in the app
export { loadingModal, LocationFinderModal };
