import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/home/Header";
import GoogleMapView from "../components/home/GoogleMapView";

const Home = () => {
  return (
    <View>
      <Header />
      <GoogleMapView />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
