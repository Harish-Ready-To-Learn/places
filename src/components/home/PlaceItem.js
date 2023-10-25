import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const PlaceItem = ({ placeItem }) => {
  console.log("PLACEITEM", placeItem);
  return (
    <View style={{}}>
      <Image
        source={require("./../../../assets/placeholder.jpg")}
        style={{ height: 120, width: 120 }}
      />
    </View>
  );
};

export default PlaceItem;

const styles = StyleSheet.create({});
