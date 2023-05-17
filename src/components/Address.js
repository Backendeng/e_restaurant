import React from "react";
import { TextInput, Text, Avatar, RadioButton } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import { CchipNew } from "../molecules/Button";
import { colors } from "../atoms/theme/colors";
import { Heading5 } from "../molecules/moleculesFromPaper";
import { Heading6 } from "../molecules/moleculesFromPaper";
export default function Address({ style, ...props }) {
  const [checked, setChecked] = React.useState("first");
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
        padding: 16,
        marginBottom: 12,
        justifyContent: "space-between",
      }}
    >
      <Avatar.Icon
        backgroundColor={colors.brand.primary}
        size={28}
        icon="map-marker"
      />
      <View style={{ flexDirection: "column", alignItems: "flex-start" }}>
        <Heading6>Home</Heading6>
        <Text>h.no 66 , </Text>
      </View>
      <RadioButton
        color={colors.brand.primary}
        value="first"
        status={checked === "first" ? "checked" : "unchecked"}
        onPress={() => setChecked("first")}
      />
    </View>
  );
}
