import React from "react";
import { TextInput, Button } from "react-native-paper";
import { StyleSheet, View, Text } from "react-native";
import { Chip } from "react-native-paper";
import { colors } from "../atoms/theme/colors";
export const CchipNew = ({ style, ...props }) => {
  return (
    <View
      style={{
        alignItems: "center",
        paddingTop: 4,
        backgroundColor: colors.brand.primary,
        height: 24,
        paddingLeft: 5,
        paddingRight: 5,
        width: "auto",
        borderRadius: 6,
      }}
    >
      <Text
        style={{
          fontSize: 12,
          color: "white",
        }}
      >
        {props.label}
      </Text>
    </View>
  );
};

export const CPrimaryButton41by24 = ({ style, ...props }) => {
  return (
    <Button
      style={{
        borderRadius: 100,
        width: 41,
        height: 24,
      }}
      buttonColor="#f50057"
      mode="contained"
      {...props}
    />
  );
};

export const CPrimaryButtonSmall = ({ style, ...props }) => {
  return <Button buttonColor="#f50057" mode="contained" {...props} />;
};

/* width 380 height 58  */
export const CPrimaryButtonRegular = ({ style, ...props }) => {
  return (
    <Button
      style={{
        borderRadius: 100,
        width: "auto",
        height: 58,
        color: "#f50057",
        alignItems: "center",
        justifyContent: "center",
      }}
      buttonColor="#f50057"
      textColor="white"
      mode="contained"
      {...props}
    />
  );
};
export const CPrimaryButtonHalf = ({ style, ...props }) => {
  return (
    <Button
      style={{
        borderRadius: 100,
        width: "auto",
        height: "auto",

        alignItems: "center",
        justifyContent: "center",
      }}
      buttonColor="#f50057"
      textColor="white"
      mode="contained"
      {...props}
    />
  );
};
export const CMutedButtonHalf = ({ style, ...props }) => {
  return (
    <Button
      style={{
        borderRadius: 100,
        width: "auto",
        height: "auto",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 2,
        borderColor: colors.brand.primary,
      }}
      buttonColor="white"
      textColor={colors.brand.primary}
      mode="contained"
      {...props}
    />
  );
};

export const CMutedButtonRegular = ({ style, ...props }) => {
  return (
    <Button
      style={{
        borderRadius: 100,
        width: "auto",
        height: 58,
        alignItems: "center",
        justifyContent: "center",
      }}
      buttonColor={colors.brand.muted}
      textColor={colors.brand.primary}
      mode="contained"
      {...props}
    />
  );
};
