import React from "react";
import { TextInput, Text } from "react-native-paper";
import { StyleSheet, View, Image } from "react-native";
import { Heading2Primary } from "../molecules/moleculesFromPaper";
import { BodyMedium18 } from "../molecules/moleculesFromPaper";

export default function LightWalkthrough3({ style, ...props }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: "white",
        justifyContent: "space-evenly",
      }}
    >
      <Image source={require("../../assets/girlBikeSmall.png")} />
      <Heading2Primary>Free Delivery</Heading2Primary>
      <BodyMedium18>
        Our mission is to save Indians from spending time in kitchen and spend
        that time in doing things they love. Thats why our food rates are so
        affordable.
      </BodyMedium18>
    </View>
  );
}
