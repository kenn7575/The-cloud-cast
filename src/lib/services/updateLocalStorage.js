import { lastSearchedCitys } from "../data/stores/LocationDataStores";
import { setCitys } from "../data/local/LocalStorageManager.js";
const addLocationToHistory = (location) => {
  lastSearchedCitys.update((data) => {
    console.log(data);
    if (data === null || data === undefined) {
      data = [location];
    } else {
      if (data.length < 6) {
        data.push(location);
      } else {
        data = data.slice(0, 4);
        data.push(location);
      }
    }
    setCitys(data);
    console.log(data);
    return data;
  });
};
export { addLocationToHistory };
