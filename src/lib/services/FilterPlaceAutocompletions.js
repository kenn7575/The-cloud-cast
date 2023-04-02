const filterPlaces = (data) => {
  let cities = [];
  let countries = [];
  let latitudes = [];
  let londitudes = [];

  let filters = [];
  let includesIndexes = [];
  let sortedList = [];
  let places = data.features;
  places.forEach((element) => {
    const path = element.properties;
    cities.push(path.city);
    countries.push(path.country);
    latitudes.push(path.lat);
    londitudes.push(path.lon);
    filters.push(path.city + path.country);
  });
  includesIndexes = getIndexes(filters);
  includesIndexes.forEach((element) => {
    let place = {
      city: cities[element],
      country: countries[element],
      lat: latitudes[element],
      lon: londitudes[element],
      id: element,
    };
    sortedList.push(place);
  });

  return sortedList;
};
export { filterPlaces };

function getIndexes(strList) {
  let nonDuplicateIndexes = [];
  let duplicates = {};

  for (let i = 0; i < strList.length; i++) {
    let currentString = strList[i];

    if (duplicates[currentString]) {
      // This string is a duplicate, so skip it
      continue;
    }

    // Check if there is another occurrence of the current string
    let index = strList.indexOf(currentString, i + 1);

    if (index === -1) {
      // This string is not a duplicate, so add its index to the list
      nonDuplicateIndexes.push(i);
    } else {
      // This string is a duplicate, so mark it as such
      duplicates[currentString] = true;
    }
  }
  return nonDuplicateIndexes;
}
