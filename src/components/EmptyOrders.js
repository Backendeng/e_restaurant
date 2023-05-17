import React from "react";
import { TextInput, Text } from "react-native-paper";
import { StyleSheet, View } from "react-native";

export default function EmptyOrders({ style, ...props }) {
  return (
    <View
      style={{
        flexDirection: "column",
        backgroundColor: "white",

        paddingBottom: 16,
        paddingLeft: 24,
        flex: 1,
        width: 380,
      }}
    >
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Image
          style={{ marginBottom: 60 }}
          source={require("../../assets/emptycart.png")}
        />

        <Heading4>Empty</Heading4>
        <BodyMedium14>
          You don't have any foods in cart at this time
        </BodyMedium14>
      </View>
    </View>
  );
}
