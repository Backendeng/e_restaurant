import React from "react";
import { TextInput, Text } from "react-native-paper";
import { StyleSheet, View, Image } from "react-native";
import { Heading5 } from "../molecules/moleculesFromPaper";
import { BodyMedium12 } from "../molecules/moleculesFromPaper";
import { Heading5Primary } from "../molecules/moleculesFromPaper";
import { Avatar } from "react-native-paper";
import { colors } from "../atoms/theme/colors";
import { Button } from "react-native-paper";

export default function MyCartItemComponent({ style, ...props }) {
  return (
    <View
      style={{
        flexDirection: "row",
        width: 212,
        height: 120,
        marginBottom: 20,
      }}
    >
      <Image
        style={{
          height: 120,
          width: 120,
          borderRadius: 20,
        }}
        source={require("../../assets/menuItemside1.jpg")}
      />
      <View
        style={{
          flexDirection: "column",
          justifyContent: "space-between",
          marginLeft: 12,
        }}
      >
        <Heading5>Vegetarian Noodles</Heading5>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Heading5Primary style={{ marginRight: 6 }}>$4.00</Heading5Primary>
          <BodyMedium12 style={{ marginRight: 6 }}>|</BodyMedium12>

          <BodyMedium12 style={{ marginRight: 6 }}>4.4</BodyMedium12>
          <BodyMedium12>(1.8k)</BodyMedium12>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Button buttonColor="#D90368" mode="contained">
            +
          </Button>
          <Heading5Primary>3</Heading5Primary>
          <Button buttonColor="#D90368" mode="contained">
            -
          </Button>
        </View>
      </View>
    </View>
  );
}
