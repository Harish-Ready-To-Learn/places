import { Dimensions, StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { UserLocationContext } from "../../context/UserLocationContext";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import PlaceMarker from "../home/PlaceMarker";

const GoogleMapViewFull = ({ placeList }) => {
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
    </View>
  );
};

export default GoogleMapViewFull;

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 10,
    borderRadius: 20,
  },
  map: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
    borderRadius: 10,
  },
});
