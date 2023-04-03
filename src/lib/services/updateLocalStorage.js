import { lastSearchedCitys } from "../data/stores/LocationDataStores";
import { setCitys } from "../data/local/LocalStorageManager.js";

const isUnique = (data, item) => {
  let ids = [];
  data.forEach((element) => {
    ids.push(element.city + element.country);
  });
  const id = item.city + item.country;
  const index = ids.indexOf(id);
  if (index === -1) {
    return true;
  } else {
    return false;
  }
};

const addLocationToHistory = (location) => {
  lastSearchedCitys.update((data) => {
    if (data === undefined) {
      data = [location];
    } else {
      const isunique = isUnique(data, location);

      if (data.length < 6) {
        if (isunique) {
          data.push(location);
        }
      } else {
        if (isunique) {
          data.slice(0, 4);
          data.push(location);
        }
      }
    }
    setCitys(data);

    return data;
  });
};

export { addLocationToHistory };
