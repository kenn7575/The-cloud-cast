export { filterData };

const filterData = (data) => {
  const d = new Date();
  const hour = d.getHours();

  let formatedData = [];
  let index = 0;
  for (index; index < 24; index++) {
    let weatherCode = data.hourly.weathercode[index + hour];
    let temperature = data.hourly.temperature_2m[index + hour];
    let time = data.hourly.time[index + hour];
    let formatedTime = time.slice(11, 16);
    formatedData.push({
      time: formatedTime,
      weathercode: weatherCode,
      temp: temperature,
    });
  }
  return formatedData;
};
