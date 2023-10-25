import axios from "axios";
export const BASEURL = "https://maps.googleapis.com/maps/api/place";
export const APIKEY = "AIzaSyCXD_WanQUCTdnucj4Cnb2Uze0JCjCIKfA";

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
