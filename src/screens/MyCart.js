import React from "react";
import { TextInput, Text } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import MyCartItemComponent from "../components/MyCartItemComponent";
import { Avatar } from "react-native-paper";
import { Heading5 } from "../molecules/moleculesFromPaper";
import { ScrollView } from "react-native-gesture-handler";
import { CPrimaryButtonRegular } from "../molecules/Button";
import { Heading6 } from "../molecules/moleculesFromPaper";
import { BodyMedium14 } from "../molecules/moleculesFromPaper";
import { BodySemiBold16 } from "../molecules/moleculesFromPaper";
import { colors } from "../atoms/theme/colors";
export default function MyCart({ style, ...props }) {
  return (
    <View
      style={{
        flexDirection: "column",
        backgroundColor: "white",

        paddingBottom: 24,
        paddingLeft: 24,
        flex: 1,
        width: 380,
      }}
    >
      <View
        style={{
          marginBottom: 24,
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Avatar.Icon
          color="grey"
          backgroundColor="transparent"
          size={48}
          icon="arrow-left"
          style={{ marginRight: 12 }}
        />
        <Heading5>My Cart</Heading5>
      </View>
      <ScrollView>
        <View style={{ flexDirection: "column", paddingBottom: 24 }}>
          <View style={{ paddingBottom: 12 }}>
            <Heading5>Deliver To</Heading5>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Avatar.Icon
              color={colors.brand.primary}
              backgroundColor="transparent"
              size={48}
              icon="map-marker"
              style={{ marginRight: 12 }}
            />
            <View>
              <Heading6>Home</Heading6>
              <BodyMedium14>Times square NYC, Manhattan</BodyMedium14>
            </View>
            <Avatar.Icon
              color={colors.brand.primary}
              backgroundColor="transparent"
              size={48}
              icon="chevron-right"
              style={{ marginRight: 12 }}
            />
          </View>
        </View>
        <MyCartItemComponent />
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
            paddingTop: 12,
          }}
        >
          <Avatar.Icon
            color={colors.brand.primary}
            backgroundColor="transparent"
            size={48}
            icon="wallet"
            style={{ marginRight: 12 }}
          />

          <BodyMedium14>Payment Methods</BodyMedium14>

          <View style={{ justifyContent: "flex-end", flexGrow: 1 }}>
            <Avatar.Icon
              color={colors.brand.primary}
              backgroundColor="transparent"
              size={48}
              icon="chevron-right"
              style={{ marginRight: 12 }}
            />
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            paddingTop: 12,
            marginBottom: 24,
          }}
        >
          <Avatar.Icon
            color={colors.brand.primary}
            backgroundColor="transparent"
            size={48}
            icon="cart-plus"
            style={{ marginRight: 12 }}
          />

          <BodyMedium14>Get Discounts</BodyMedium14>

          <Avatar.Icon
            color={colors.brand.primary}
            backgroundColor="transparent"
            size={48}
            icon="chevron-right"
            style={{ marginRight: 12 }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            marginBottom: 24,

            justifyContent: "space-between",
          }}
        >
          <BodyMedium14>SubTotal</BodyMedium14>
          <BodySemiBold16>240.00</BodySemiBold16>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginBottom: 24,
            justifyContent: "space-between",
          }}
        >
          <BodyMedium14>Delivery Fee</BodyMedium14>
          <BodySemiBold16>40.00</BodySemiBold16>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginBottom: 24,
            justifyContent: "space-between",
          }}
        >
          <BodyMedium14>Total</BodyMedium14>
          <BodySemiBold16>280.00</BodySemiBold16>
        </View>
      </ScrollView>
      <CPrimaryButtonRegular>Buy </CPrimaryButtonRegular>
    </View>
  );
}
