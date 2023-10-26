import { View, Text } from "react-native";
import React from "react";
import {
  TransitionPresets,
  createStackNavigator,
} from "@react-navigation/stack";
import Home from "../screens/Home";
import PlaceDetail from "../components/home/PlaceDetail";

const HomeNavigation = () => {
  const isAndroid = true;
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,

        ...(isAndroid && TransitionPresets.ModalPresentationIOS),
      }}
    >
      <Stack.Screen
        options={{ headerShown: false }}
        name="HomeScreen"
        component={Home}
      />
      <Stack.Screen
        name="PlaceDetail"
        options={{ title: "" }}
        component={PlaceDetail}
        screenOptions={{
          presentation: "modal",
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
