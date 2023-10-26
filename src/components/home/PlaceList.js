import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import PlaceItem from "./PlaceItem";
import PlaceItemBig from "./PlaceItemBig";
import { useNavigation } from "@react-navigation/native";

const PlaceList = ({ placeList }) => {
  const navigation = useNavigation();
  const onPlaceClick = (item) => {
    navigation.navigate("PlaceDetail", { place: item });
  };
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
          <TouchableOpacity
            onPress={() => {
              onPlaceClick(item);
            }}
          >
            {index % 4 == 0 ? (
              <PlaceItemBig place={item} />
            ) : (
              <PlaceItem placeItem={item} />
            )}
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default PlaceList;

const styles = StyleSheet.create({});
