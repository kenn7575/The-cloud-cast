import { Decode } from "../data/apis/GeoCoding.js";
const decodeLocation = async (lat, lon) => {
  console.log("decoding current location...");
  let locationObject = await Decode(lat, lon)
    .catch(() => {
      //if the decode api fails

      return null;
    })
    .then((result) => {
      if (result === null) {
        return null;
      }

      return result;
    });
};
export { decodeLocation };
