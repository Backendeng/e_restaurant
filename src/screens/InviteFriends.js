import React from "react";
import { TextInput, Text, Avatar } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import { Heading6 } from "../molecules/moleculesFromPaper";
import { BodyMedium14 } from "../molecules/moleculesFromPaper";
import { CchipNew } from "../molecules/Button";
export default function InviteFriends({ style, ...props }) {
  return (
    <View
      style={{
        flexDirection: "row",
        paddingLeft: 24,
        paddingRight: 24,
        paddingTop: 24,
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <Avatar.Image size={60} source={require("../../assets/profile.jpg")} />
        <View style={{ paddingLeft: 12, justifyContent: "center" }}>
          <Heading6>Laurale Quintero</Heading6>
          <BodyMedium14>90182778272</BodyMedium14>
        </View>
      </View>

      <CchipNew label="Invite" />
    </View>
  );
}
