export const getWetherData = async (lat, lon) => {
  var response = await fetch(
    "https://api.open-meteo.com/v1/dwd-icon?latitude=55.06&longitude=10.61&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,rain_sum,windspeed_10m_max,windgusts_10m_max,winddirection_10m_dominant&timezone=Europe%2FBerlin"
  );
  const data = await response.json();
  console.log(data);
  return data;
  // .then((response) => {
  //   response.json().then((result) => {
  //     //console.log(result);
  //     data = result;
  //     console.log(data);
  //   });
  // })
  // .catch((error) => {
  //   console.log(error);
  // });

  return data;
};
