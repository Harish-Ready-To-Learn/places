import axios from "axios";
export const BASEURL = "https://maps.googleapis.com/maps/api/place";
export const APIKEY = "AIzaSyBNf7s_6n4-eTfrtTLRdeVZ5V64bTC37-M";
// AIzaSyBkiAenLgOdVP9s-1YAhDPtVSNg26JMpCE
const nearByPlace = (lat, lng, type) =>
  axios.get(
    BASEURL +
      "/nearbysearch/json?" +
      "&location=" +
      lat +
      "," +
      lng +
      "&radius=1500&type=" +
      type +
      "&key=" +
      APIKEY
  );
const searchByText = (searchText) =>
  axios.get(
    BASEURL + "/textsearch/json?query=" + searchText + "&key=" + APIKEY
  );
export default {
  nearByPlace,
  searchByText,
};
