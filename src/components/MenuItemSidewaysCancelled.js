import React from "react";
import { TextInput, Text, Avatar } from "react-native-paper";
import { StyleSheet, View, Image } from "react-native";
import { Heading5 } from "../molecules/moleculesFromPaper";
import { BodyMedium12 } from "../molecules/moleculesFromPaper";
import { Heading5Primary } from "../molecules/moleculesFromPaper";
import { colors } from "../atoms/theme/colors";
import { CchipNew } from "../molecules/Button";
import { CMutedButtonHalf } from "../molecules/Button";
import { CPrimaryButtonHalf } from "../molecules/Button";
export default function MenuItemSidewaysCancelled({ style, ...props }) {
  return (
    <View
      style={{
        flexDirection: "column",
        backgroundColor: "white",
        shadowColor: "#000000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        marginLeft: 24,
        marginRight: 24,
        marginTop: 24,
        shadowOpacity: 0.17,
        shadowRadius: 3.05,
        elevation: 4,
        borderRadius: 28,
        paddingLeft: 24,
        paddingRight: 24,
        paddingBottom: 12,
        paddingTop: 12,
        alignItems: "center",
      }}
    >
      <View
        style={{
          borderRadius: 28,
          backgroundColor: "white",
          flexDirection: "row",

          width: "100%",

          paddingBottom: 12,
          marginBottom: 20,
        }}
      >
        <Image
          style={{
            height: 100,
            width: 100,
            borderRadius: 20,
          }}
          source={require("../../assets/menuItemside5.jpg")}
        />
        <View
          style={{
            flexDirection: "column",
            justifyContent: "space-between",
            marginLeft: 12,
          }}
        >
          <Heading5> Veggie Malta</Heading5>
          <View style={{ flexDirection: "row" }}>
            <BodyMedium12 style={{ marginRight: 6 }}>3 Items</BodyMedium12>
            <BodyMedium12 style={{ marginRight: 6 }}>|</BodyMedium12>
            <BodyMedium12 style={{ marginRight: 6 }}>Paid</BodyMedium12>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Heading5Primary style={{ marginRight: 6 }}>$4.00</Heading5Primary>
            <CchipNew label="Cancelled" />
          </View>
        </View>
      </View>
    </View>
  );
}
