const getCities = () => {
  const lastSearchedCitys = localStorage.getItem("lastSearchedCity");
  if (!lastSearchedCitys) {
    return [{ city: "Copenhagen", lat: "55.6759", lon: "12.5655" }];
  }
  //format of storage: "Copenhagen+55.6759+12.5655,Odense+55.4+10.4"
  let listOfcityObjects = [];

  //split string into objects substrings
  const dataSplit = lastSearchedCitys.split(",");

  //split each object substring into object
  dataSplit.forEach((element) => {
    const parts = element.split("+");
    listOfcityObjects.push({ city: parts[0], lat: parts[1], lon: parts[2] });
  });

  return listOfcityObjects;
};
const setCitys = (cities) => {
  let data = "";
  let index = 0;
  cities.forEach((element) => {
    data += `${element.city}+${element.lat}+${element.lon}`;
    if (index !== cities.length - 1) {
      data += ",";
    }
  });
  localStorage.setItem("lastSearchedCity", data);
};
export { getCities, setCitys };
