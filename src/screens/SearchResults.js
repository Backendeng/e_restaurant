import React from "react";
import { TextInput, Text, Avatar } from "react-native-paper";
import { StyleSheet, View, ScrollView, Image } from "react-native";
import { Heading5, Heading5Primary } from "../molecules/moleculesFromPaper";
import { BodyRegular16 } from "../molecules/moleculesFromPaper";
import CtextInput from "../molecules/CtextInput";
import MenuItemDown from "../components/MenuItemDown";
import RecommendedForYouChips from "../components/RecommendedForYouChips";
import { BodyBold16Primary } from "../molecules/moleculesFromPaper";
import MenuItemSideway from "../components/MenuItemSideway";
import { colors } from "../atoms/theme/colors";
import { Chip } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Cchip from "../molecules/Cchip";

export default function SearchResults({ style, ...props }) {
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
      <Cchip label="new" iconName="information" />

      <Heading5Primary style={{ marginBottom: 12 }}>Results</Heading5Primary>
      <MenuItemSideway />
    </ScrollView>
  );
}
