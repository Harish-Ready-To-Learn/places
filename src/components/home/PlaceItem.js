import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../../Shared/Colors";

const PlaceItem = ({ placeItem }) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        display: "flex",
        alignItems: "center",
        gap: 15,
        marginBottom: 20,
      }}
    >
      {placeItem?.photos ? (
        <Image
          source={{
            uri:
              "https://maps.googleapis.com/maps/api/place/photo" +
              "?maxwidth=400" +
              "&photo_reference=" +
              placeItem?.photos[0]?.photo_reference +
              "&key=AIzaSyBNf7s_6n4-eTfrtTLRdeVZ5V64bTC37-M",
          }}
          style={{ width: 110, height: 110, borderRadius: 15 }}
        />
      ) : (
        <Image
          source={require("./../../../assets/placeholder.jpg")}
          style={{ width: 110, height: 110, borderRadius: 15 }}
        />
      )}
      <View style={{ flex: 1 }}>
        <Text numberOfLines={2} style={{ fontSize: 18, marginBottom: 5 }}>
          {placeItem.name}
        </Text>
        <Text
          style={{ fontSize: 16, marginBottom: 5, color: Colors.DARK_GRAY }}
          numberOfLines={2}
        >
          {placeItem.vicinity}
        </Text>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            gap: 5,
            flexDirection: "row",
          }}
        >
          <AntDesign name="star" size={20} color={Colors.YELLOW} />
          <Text>{placeItem.rating}</Text>
        </View>
      </View>
    </View>
  );
};

export default PlaceItem;

const styles = StyleSheet.create({});
