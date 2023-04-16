import { writable } from "svelte/store";
const lastSearchedCitys = writable(); //this is the last searched citys from the local storage
/* format:
[
    {
        country: "Denmark",
        city: "Copenhagen",
        lat: 55.6759,
        lon: 12.5655
    },
    {
        country: "Denmark",
        city: "Odense",
        lat: 55.4,
        lon: 10.4
    }
]
*/
const currentLocation = writable(); //this is the location of wich the weather is displayed in the app
/* format:
{
    country: "Denmark",
    city: "Copenhagen",
    lat: 55.6759,
    lon: 12.5655
}
*/
const userLocation = writable(); //this is the location of the user
/* format:
{
    country: "Denmark",
    city: "Copenhagen",
    lat: 55.6759,
    lon: 12.5655
}
*/

export { lastSearchedCitys, currentLocation, userLocation };
