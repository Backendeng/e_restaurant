import MapView, { Marker } from "react-native-maps";
import { useEffect, useRef } from "react";
import React from "react";
import { StyleSheet } from "react-native";
export default function LocationRider() {
  const origin = { latitude: 37.3318456, longitude: -122.0296002 };
  const destination = { latitude: 37.771707, longitude: -122.4053769 };
  const GOOGLE_MAPS_APIKEY = "AIzaSyBc7xMERPyJZWGacsCWQbxE2L59_M5vSNk";

  return (
    <MapView
      initialRegion={{
        latitude: origin.latitude,
        longitude: origin.longitude,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      <MapViewDirections
        origin={origin}
        destination={destination}
        apikey={GOOGLE_MAPS_APIKEY}
      />
    </MapView>
  );
}
