import React from "react";
import { Heading4,BodyMedium14 } from "../molecules/moleculesFromPaper";
import { TextInput, Text } from "react-native-paper";
import { StyleSheet, View,Image } from "react-native";

export default function NotFoundComponent({ style, ...props }) {
  return (
    <View
      style={{
        flexDirection: "column",
        backgroundColor: "white",
        alignItems:"center",
        
        paddingBottom: 16,
        paddingLeft: 24,
      
        width: 380,
      }}
    >
      <Image
          style={{ marginBottom: 60, }}
          source={require("../../assets/NotFound.png")}
        />

        <Heading4>Not Found</Heading4>
        <BodyMedium14>
          Sorry, the keyword you entered cannot be found, please check again or
          search with another keyword.
        </BodyMedium14>
      
    </View>
  );
}
