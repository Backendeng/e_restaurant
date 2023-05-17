import React from "react";
import { TextInput, Text } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Chip } from "react-native-paper";
import { colors } from "../atoms/theme/colors";
export default function Cchip({ style, ...props }) {
  return (
    <View style={{ flexWrap: "wrap" }}>
      <Chip
        mode="flat"
        icon={() => (
          <Icon name={props.iconName} size={16} color={colors.brand.primary} />
        )}
        textStyle={{ color: colors.brand.primary }}
        style={{
          borderRadius: 100,
          backgroundColor: "white",
          borderWidth: 2,

          borderColor: colors.brand.primary,
        }}
        onPress={() => console.log("Pressed")}
      >
        {props.label}
      </Chip>
    </View>
  );
}
