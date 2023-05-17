import React from "react";
import { TextInput, Text, Button, Avatar } from "react-native-paper";
import { StyleSheet, View, Image } from "react-native";
import { Heading3 } from "../molecules/moleculesFromPaper";
import { BodyMedium16 } from "../molecules/moleculesFromPaper";
import { Heading5Primary } from "../molecules/moleculesFromPaper";
import { colors } from "../atoms/theme/colors";
import { Heading5 } from "../molecules/moleculesFromPaper";
export default function MenuItemDetail({ style, ...props }) {
  return (
    <View
      style={{
        backgroundColor: "white",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Image
        style={{ maxHeight: 380, maxWidth: 428 }}
        source={require("../../assets/menuItem.jpg")}
      />
      <Heading3 style={{ marginTop: 24 }}>Mixed Vegetable Salad</Heading3>
      <BodyMedium16
        style={{
          marginTop: 12,
          marginLeft: 24,
          marginRight: 24,
        }}
      >
        This vegetable salad is a healthy and delicious summer salad made with
        fresh raw veggies, avocado, nuts, seeds, herbs and feta in a light ...
      </BodyMedium16>
      <View
        style={{
          marginTop: 12,

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
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
          marginTop: 12,
        }}
      >
        <Avatar.Icon
          backgroundColor="white"
          size={24}
          icon="star"
          color="orange"
        />
        <Heading5>4.8</Heading5>
        <BodyMedium16>(4.8k reviews)</BodyMedium16>
      </View>
    </View>
  );
}
