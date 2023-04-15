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
      if (
        parts[0] !== undefined &&
        parts[1] !== undefined &&
        parts[2] !== undefined &&
        parts[3] !== undefined
      ) {
        listOfcityObjects.push({
          city: parts[0],
          country: parts[1],
          lat: parts[2],
          lon: parts[3],
        });
      }
    });

    return listOfcityObjects;
  } catch (error) {
    return null;
  }
};
const setCitys = (cities) => {
  let data = "";
  let index = 0;
  cities.forEach((element) => {
    data += `${element.city}+${element.country}+${element.lat}+${element.lon}`;
    if (index !== cities.length - 1) {
      data += ",";
    }
  });
  localStorage.setItem("lastSearchedCity", data);
};
export { getCities, setCitys };
