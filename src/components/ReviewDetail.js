import React from "react";
import { TextInput, Text, Avatar } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import { BodyRegular14 } from "../molecules/moleculesFromPaper";
import { BodyBold16 } from "../molecules/moleculesFromPaper";
import { Rating } from "./Rating";
import { BodyMedium12 } from "../molecules/moleculesFromPaper";

export default function ReviewDetail({ style, ...props }) {
  return (
    <View
      style={{
        flexDirection: "column",
        paddingTop: 24,
        paddingLeft: 24,
        paddingRight: 24,
        flexWrap: "nowrap",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Avatar.Image size={48} source={require("../../assets/profile.jpg")} />

        <BodyBold16 style={{ paddingLeft: 12 }}>Liza</BodyBold16>
        <Rating rating={4} />
      </View>
      <BodyRegular14 style={{ paddingTop: 12 }}>
        Excellent food. Menu is extensive and seasonal to a particularly high
        standard. Definitely fine dining 😍😍
      </BodyRegular14>
      <View style={{ paddingTop: 12 }}>
        <BodyMedium12>6 days ago</BodyMedium12>
      </View>
    </View>
  );
}
