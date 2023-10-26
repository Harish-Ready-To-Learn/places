import { Platform, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import Header from "../components/home/Header";
import GoogleMapView from "../components/home/GoogleMapView";
import CategoryList from "../components/home/CategoryList";
import GlobalSearch from "../Services/GlobalSearch";
import { UserLocationContext } from "../context/UserLocationContext";
import PlaceList from "../components/home/PlaceList";

const Home = () => {
  const [placeList, setPlaceList] = useState([]);
  const { location, setLocation } = useContext(UserLocationContext);
  useEffect(() => {
    if (location) {
      GetNearBySearchPlace("restaurant");
    }
  }, [location]);
  const GetNearBySearchPlace = (value) => {
    GlobalSearch.nearByPlace(
      location.coords.latitude,
      location.coords.longitude,
      value
    ).then((res) => {
      console.log("NEARBY PLACES", res.data.results, "\n", value);
      setPlaceList(res.data.results);
    });
  };

  return (
    <ScrollView style={{ padding: 20 }}>
      <Header />
      <GoogleMapView placeList={placeList} />
      <CategoryList
        setSelectedCategory={(value) => GetNearBySearchPlace(value)}
      />
      {placeList ? <PlaceList placeList={placeList} /> : null}
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});
