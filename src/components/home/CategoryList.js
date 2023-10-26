import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  TouchableHighlight,
  TouchableHighlightBase,
  TouchableHighlightComponent,
} from "react-native";
import React, { useState } from "react";
import CategoryItem from "./CategoryItem";

const CategoryList = ({ setSelectedCategory }) => {
  const categoryList = [
    {
      id: 1,
      name: "Gas Station",
      value: "gas_station",
      icon: require("./../../../assets/gas.png"),
    },
    {
      id: 2,
      name: "Restaurants",
      value: "restaurant",
      icon: require("./../../../assets/food.png"),
    },
    {
      id: 3,
      name: "Cafe",
      value: "cafe",
      icon: require("./../../../assets/cafe.png"),
    },
  ];
  return (
    <View style={{ marginTop: 15 }}>
      <Text style={{ fontSize: 20, fontWeight: "600" }}>
        Select Top Category
      </Text>
      <FlatList
        data={categoryList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => setSelectedCategory(item.value)}>
            <CategoryItem category={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default CategoryList;

const styles = StyleSheet.create({});
