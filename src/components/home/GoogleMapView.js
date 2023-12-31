import { Dimensions, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { UserLocationContext } from "../../context/UserLocationContext";
import PlaceMarker from "./PlaceMarker";

const GoogleMapView = ({ placeList }) => {
  const [mapRegion, setMapRegion] = useState();
  const { location, setLocation } = useContext(UserLocationContext);
  useEffect(() => {
    if (location) {
      setMapRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.02,
        longitudeDelta: 0.0421,
      });
    }
  }, [location]);
  return (
    <View style={styles.mainContainer}>
      <Text
        style={{
          fontSize: 20,
          marginBottom: 10,
          fontWeight: "600",
        }}
      >
        Top Nearby Places
      </Text>
      <>
        {location ? (
          <MapView
            style={styles.map}
            provider={PROVIDER_GOOGLE}
            showsUserLocation={true}
            region={mapRegion}
          >
            <Marker title="you" coordinate={mapRegion} />
            {placeList.map(
              (item, index) =>
                index <= 4 && <PlaceMarker item={item} key={index} />
            )}
          </MapView>
        ) : null}
      </>
    </View>
  );
};

export default GoogleMapView;

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 10,
    borderRadius: 20,
  },
  map: {
    width: Dimensions.get("screen").width * 0.9,
    height: Dimensions.get("screen").height * 0.23,
    borderRadius: 10,
  },
});
