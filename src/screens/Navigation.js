import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { useEffect, useRef } from "react";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import MapViewDirections from "react-native-maps-directions";
export default function Navigation() {
  const [state, setState] = useState({
    pickupCords: {
      latitude: 30.38333428484752,
      longitude: 76.48830773359103,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    dropLocationCords: {
      latitude: 30.341565241433617,
      longitude: 76.43947007203766,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  });

  const GOOGLE_MAPS_APIKEY = "AIzaSyBc7xMERPyJZWGacsCWQbxE2L59_M5vSNk";
  const { pickupCords, dropLocationCords } = state;
  return (
    <View style={styles.container}>
      <MapView style={StyleSheet.absoluteFill} region={pickupCords}>
        <MapViewDirections
          origin={pickupCords}
          destination={dropLocationCords}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={3}
          strokeColor="hotpink"
          onStart={(params) => {
            console.log(
              `Started routing between "${params.origin}" and "${params.destination}"`
            );
          }}
          onReady={(result) => console.log("result", result)}
          onError={(err) => console.log("err", err)}
        />
      </MapView>
      <Text>ank</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
