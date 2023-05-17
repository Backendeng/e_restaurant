import React from "react";
import { TextInput, Text } from "react-native-paper";
import { StyleSheet, View, Image } from "react-native";
import { Heading2Primary } from "../molecules/moleculesFromPaper";
import { BodyMedium18 } from "../molecules/moleculesFromPaper";
export default function LightWalkthrough1({ style, ...props }) {
  return (
    <View style={{ flex: 1, alignItems: "center", backgroundColor: "white" }}>
      <Image source={require("../../assets/dish.png")} />
      <Heading2Primary>Top Ingredients</Heading2Primary>
      <BodyMedium18>Ashirwad Atta</BodyMedium18>
      <BodyMedium18>Soyabean Refined Oil</BodyMedium18>
      <BodyMedium18>Basmati Rice</BodyMedium18>
      <BodyMedium18>Pure Spices</BodyMedium18>
      <BodyMedium18>Cooked and served at same rate</BodyMedium18>
      <BodyMedium18>Cooked in RO water</BodyMedium18>
      <BodyMedium18>Fresh Vegetables-hand picked</BodyMedium18>
      <BodyMedium18>Food Grade Packaging</BodyMedium18>
      <BodyMedium18>Hygenic kitchen</BodyMedium18>
      <BodyMedium18>Pure and Fresh Dairy Product</BodyMedium18>
    </View>
  );
}
