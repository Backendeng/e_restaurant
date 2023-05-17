import React, { useState } from "react";
import { TextInput, Text, Avatar, Menu } from "react-native-paper";
import { StyleSheet, ScrollView, Image, View } from "react-native";
import { Heading5 } from "../molecules/moleculesFromPaper";
import { BodyRegular16 } from "../molecules/moleculesFromPaper";
import CtextInput from "../molecules/CtextInput";
import { colors } from "../atoms/theme/colors";
import { BodyBold16Primary } from "../molecules/moleculesFromPaper";
import MenuItemDown from "../components/MenuItemDown";
import MenuItemSideway from "../components/MenuItemSideway";
import RecommendedForYouChips from "../components/RecommendedForYouChips";

export default function HomeShowMenuItems({ style, ...props }) {
  const [date, setDate] = useState(new Date());
  return (
    <ScrollView
      contentContainerStyle={{
        backgroundColor: "white",
        paddingLeft: 24,
        paddingRight: 24,
        paddingTop: 16,

        justifyContent: "flex-start",
      }}
    >
      <View
        style={{
          height: 48,
          marginBottom: 24,
          paddingRight: 16,
          flexDirection: "row",
        }}
      >
        <Avatar.Image size={48} source={require("../../assets/profile.jpg")} />
        <View
          style={{
            flex: 1,

            flexDirection: "column",
            paddingLeft: 16,
          }}
        >
          <BodyRegular16>Deliver to</BodyRegular16>

          <Heading5>Times Square</Heading5>
        </View>
        <View
          style={{
            flex: 1,
            height: 48,
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Avatar.Icon
            color="grey"
            backgroundColor="white"
            size={48}
            icon="bell"
          />
          <Avatar.Icon
            color="grey"
            backgroundColor="white"
            size={48}
            icon="cart"
          />
        </View>
      </View>
      <View style={{ marginBottom: 24 }}>
        <CtextInput
          left={
            <TextInput.Icon
              icon="cloud-search-outline"
              color={() => colors.greyscale.fivehundred}
            />
          }
        ></CtextInput>
      </View>
      <View
        style={{
          marginBottom: 24,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Heading5>Special OFFERS</Heading5>
        <BodyBold16Primary>See all</BodyBold16Primary>
      </View>
      <View style={{}}>
        <Image
          style={{ maxHeight: "100%", maxWidth: "100%" }}
          source={require("../../assets/thirtypercentdiscount.png")}
        />
      </View>
      <View
        style={{
          marginBottom: 24,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Heading5>Discount Guaranteed</Heading5>
        <BodyBold16Primary>See all</BodyBold16Primary>
      </View>
      <MenuItemDown />
      <Heading5>Recommended for you 😍</Heading5>

      <RecommendedForYouChips />
      <MenuItemSideway />
    </ScrollView>
  );
}
