import React from "react";
import { TextInput, Text } from "react-native-paper";
import { StyleSheet, View, Image } from "react-native";
import SpecialOfferImage from "../components/SpecialOfferImage";
import { Heading5 } from "../molecules/moleculesFromPaper";
import { BodyBold16Primary } from "../molecules/moleculesFromPaper";
export default function SpecialOffers({ style, ...props }) {
  return (
    <View>
      <View
        style={{
          marginBottom: 24,
          paddingTop: 24,
          width: 380,
          paddingLeft: 24,
          paddingRight: 24,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Heading5>Special OFFERS</Heading5>
      </View>
      <View style={{}}>
        <Image
          style={{ maxHeight: "100%", maxWidth: "100%" }}
          source={require("../../assets/thirtypercentdiscount.png")}
        />
      </View>
    </View>
  );
}
