const getCities = () => {
  try {
    const lastSearchedCitys = localStorage.getItem("lastSearchedCity");
    //format of storage: "Copenhagen+55.6759+12.5655,Odense+55.4+10.4"
    let listOfcityObjects = [];

    //split string into objects substrings
    const dataSplit = lastSearchedCitys.split(",");

    //split each object substring into object
    dataSplit.forEach((element) => {
      const parts = element.split("+");
      //check if the object is valid before adding it to the list

      const city = {
        city: parts[0],
        country: parts[1],
        lat: parts[2],
        lon: parts[3],
      };
      if (validateCity(city)) {
        listOfcityObjects.push(city);
      }
    });
    if (listOfcityObjects.length > 6) {
      return listOfcityObjects.slice(0, 6);
    }
    return listOfcityObjects;
  } catch (error) {
    return null;
  }
};
const setCitys = (cities) => {
  try {
    if (cities.length > 6) {
      cities = cities.slice(0, 6);
    }
    let data = "";
    let index = 0;
    cities.forEach((element) => {
      if (validateCity(element)) {
        data += `${element.city}+${element.country}+${element.lat}+${element.lon}`;
        if (index !== cities.length - 1) {
          data += ",";
        }
      }
    });
    localStorage.setItem("lastSearchedCity", data);
  } catch {}
};
const validateCity = (city) => {
  if (city.city === undefined || city.city === null) {
    return false;
  }
  if (city.country === undefined || city.country === null) {
    return false;
  }
  if (city.lat === undefined || city.lat === null) {
    return false;
  }
  if (city.lon === undefined || city.lon === null) {
    return false;
  }
  return true;
};
export { getCities, setCitys };
