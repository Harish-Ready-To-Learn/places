import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../Shared/Colors";

const CategoryItem = ({ category }) => {
  return (
    <View
      style={{
        alignItems: "center",
        justofyContent: "center",
        padding: 5,
        margin: 5,
        width: 100,
        height: 100,
        borderRadius: 15,
        backgroundColor: Colors.WHITE,
      }}
    >
      <Image source={category.icon} style={{ height: 50, width: 50 }} />
      <Text>{category.name}</Text>
    </View>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({});
