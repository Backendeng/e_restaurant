import React from "react";
import { TextInput, Text } from "react-native-paper";
import { StyleSheet, View, Image } from "react-native";
import { Avatar } from "react-native-paper";
import { Heading5 } from "../molecules/moleculesFromPaper";
import { Heading4 } from "../molecules/moleculesFromPaper";
import { BodyMedium14 } from "../molecules/moleculesFromPaper";
export default function MyCartEmpty({ style, ...props }) {
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
      <View
        style={{
          marginBottom: 24,
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Avatar.Icon
          color="grey"
          backgroundColor="transparent"
          size={48}
          icon="arrow-left"
          style={{ marginRight: 12 }}
        />
        <Heading5>My Cart</Heading5>
      </View>
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
