import React from "react";
import { TextInput, Text } from "react-native-paper";
import { StyleSheet, View, Image } from "react-native";
import { Heading1 } from "../molecules/moleculesFromPaper";
import { BodyMedium14 } from "../molecules/moleculesFromPaper";
import { BodySemiBold14Primary } from "../molecules/moleculesFromPaper";
import CtextInput from "../molecules/CtextInput";
import { CPrimaryButtonSmall } from "../molecules/Button";
import { CPrimaryButtonRegular } from "../molecules/Button";
export default function login({ style, ...props }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: "white",
        justifyContent: "space-around",
      }}
    >
      <Image source={require("../../assets/login.png")} />
      <Heading1>Login</Heading1>
      <CtextInput label="Mobile No." />
      <CPrimaryButtonSmall>Get OTP</CPrimaryButtonSmall>
      <CtextInput label="OTP" />
      <CPrimaryButtonRegular>Login</CPrimaryButtonRegular>
    </View>
  );
}
