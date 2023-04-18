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
    console.log(data);

    if (data === undefined || data === null) {
      data = [location];
    } else {
      const isunique = isUnique(data, location);

      if (data.length < 6) {
        if (isunique) {
          data.unshift(location);
        } else {
          //swap the location to the top of the list based on location.city + location.country
          const index = data.findIndex((element) => {
            return (
              element.city + element.country ===
              location.city + location.country
            );
          });
          data.splice(index, 1);
          data.unshift(location);
        }
      } else {
        if (isunique) {
          data.slice(0, 4);
          data.unshift(location);
        } else {
          //swap the location to the top of the list based on location.city + location.country
          const index = data.findIndex((element) => {
            return (
              element.city + element.country ===
              location.city + location.country
            );
          });
          data.splice(index, 1);
          data.unshift(location);
        }
      }
    }
    setCitys(data);
    if (data.length > 6) {
      data = data.slice(0, 6);
    }
    return data;
  });
};

export { addLocationToHistory };
