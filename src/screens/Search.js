import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import GoogleMapViewFull from "../components/search/GoogleMapViewFull";
import SearchBar from "../components/search/SearchBar";
import { UserLocationContext } from "../context/UserLocationContext";
import GlobalSearch from "../Services/GlobalSearch";
import BusinessList from "../components/search/BusinessList";

const Search = () => {
  const [placeList, setPlaceList] = useState([]);
  const { location, setLocation } = useContext(UserLocationContext);

  useEffect(() => {
    GetNearBySearchPlace("restaurant");
  }, []);
  const GetNearBySearchPlace = (value) => {
    GlobalSearch.searchByText(value).then((resp) => {
      setPlaceList(resp.data.results);
    });
  };
  return (
    <View style={{}}>
      <View style={{ position: "absolute", zIndex: 1 }}>
        <SearchBar setSearchText={(value) => GetNearBySearchPlace(value)} />
      </View>
      <GoogleMapViewFull placeList={placeList} />
      <View style={{ position: "absolute", zIndex: 20, bottom: 0 }}>
        <BusinessList placeList={placeList} />
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({});
