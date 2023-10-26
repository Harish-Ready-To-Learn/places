import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import PlaceItem from "./PlaceItem";
import PlaceItemBig from "./PlaceItemBig";

const PlaceList = ({ placeList }) => {
  return (
    <View style={{ marginBottom: 10 }}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "600",
          marginTop: 5,
          marginBottom: 10,
        }}
      >
        Found {placeList.length} places
      </Text>
      <FlatList
        data={placeList}
        renderItem={({ item, index }) => (
          <>
            {index % 4 == 0 ? (
              <PlaceItemBig place={item} />
            ) : (
              <PlaceItem placeItem={item} />
            )}
          </>
        )}
      />
    </View>
  );
};

export default PlaceList;

const styles = StyleSheet.create({});
