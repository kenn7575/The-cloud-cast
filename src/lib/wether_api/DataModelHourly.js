import WeatherData from "./WeatherDataAccess.js";

class DataModelHourly {
  async getData(lat, lon) {
    let data = new WeatherData().getWetherData(lat, lon);

    console.log(data);
  }
}
/*var features = [];
    var data = await new WeatherData()
      .getWetherData(lat, lon)
      .then((result) => {
        result.properties.timeseries.forEach((element) => {
          const condition = element.data.next_1_hour.summary.symbol_code;
          const temperature = element.data.instant.details.air_temperature;
          const time = element.time;
          features.push({ time, condition, temperature });
        });
      });

    return features.slice(0, 8);*/
