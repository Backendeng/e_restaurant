import React from "react";
import { TextInput, Text } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import { Avatar } from "react-native-paper";
import CtextInput from "../molecules/CtextInput";
import { CPrimaryButtonRegular } from "../molecules/Button";
export default function ProfileEdit({ style, ...props }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        paddingTop: 24,
        paddingLeft: 24,
        paddingRight: 24,
        backgroundColor: "white",
      }}
    >
      <Avatar.Image size={80} source={require("../../assets/profile.jpg")} />
      <CtextInput label="Full Name" style={{ marginBottom: 12 }} />
      <CtextInput label="Mobile Number" style={{ marginBottom: 12 }} />
      <CtextInput label="Email Id" style={{ marginBottom: 12 }} />
      <CPrimaryButtonRegular>Update</CPrimaryButtonRegular>
    </View>
  );
}
