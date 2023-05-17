import React from "react";
import { TextInput } from "react-native-paper";
import { StyleSheet } from "react-native";

export const CtextInput = ({ style, ...props }) => {
  return (
    <TextInput
      activeOutlineColor="#f50057"
      mode="outlined"
      outlineStyle={{ borderRadius: 16 }}
      style={[styles.input, style]}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    paddingLeft: 20,
    paddingRight: 20,
    gap: 12,
    backgroundColor: "#f5f5f5",
    width: "100%",
    height: 60,
  },
});

export default CtextInput;
