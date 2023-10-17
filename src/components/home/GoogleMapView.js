import { Dimensions, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

const GoogleMapView = () => {
  return (
    <View style={styles.mainContainer}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
      ></MapView>
    </View>
  );
};

export default GoogleMapView;

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 10,
    borderRadius: 20,
    alignItems: "center",
    overflow: "hidden",
  },
  map: {
    width: Dimensions.get("screen").width * 0.9,
    height: Dimensions.get("screen").height * 0.23,
    borderRadius: 10,
  },
});
