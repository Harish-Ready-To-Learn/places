import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../../Shared/Colors";
import { Ionicons } from "@expo/vector-icons";

const SearchBar = ({ setSearchText }) => {
  const [searchInput, setSearchInput] = useState();
  return (
    <View>
      <LinearGradient
        // Background Linear Gradient
        colors={[Colors.WHITE, "transparent"]}
        style={{ padding: 20, width: Dimensions.get("screen").width }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontFamily: "raleway-bold", fontSize: 35 }}>
            Discover
          </Text>
          <Image
            source={require("./../../../assets/placeholder.jpg")}
            style={{ width: 50, height: 50, borderRadius: 100 }}
          />
        </View>
        <View
          style={{
            display: "flex",
            marginTop: 5,
            flexDirection: "row",
            padding: 10,
            gap: 5,
            elevation: 0.7,
            alignItems: "center",
            backgroundColor: Colors.WHITE,
            borderRadius: 5,
          }}
        >
          <Ionicons name="search" size={24} color={Colors.DARK_GRAY} />
          <TextInput
            placeholder="Search"
            style={{ backgroundColor: Colors.WHITE, width: "80%" }}
            onChangeText={(value) => setSearchInput(value)}
            onSubmitEditing={() => setSearchText(searchInput)}
          />
        </View>
      </LinearGradient>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({});
