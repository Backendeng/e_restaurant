import React from "react";
import { TextInput, Text } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import { Avatar } from "react-native-paper";
import { colors } from "../atoms/theme/colors";
import { Heading5 } from "../molecules/moleculesFromPaper";
import { BodyMedium16 } from "../molecules/moleculesFromPaper";
import { BodySemiBold18 } from "../molecules/moleculesFromPaper";

const ProfileMenuItems = ({ style, ...props }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        marginTop: 12,
        backgroundColor: "white",
        justifyContent: "space-between",
      }}
    >
      <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
        <Avatar.Icon
          backgroundColor="white"
          size={28}
          icon={props.firstIcon}
          style={{ marginRight: 12 }}
          color={colors.greyscale.ninehundred}
        />
        <BodySemiBold18>{props.label}</BodySemiBold18>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
        {props.label === "Language" ? (
          <BodySemiBold18>English (US)</BodySemiBold18>
        ) : null}
        {props.label !== "Log Out" ? (
          <Avatar.Icon
            backgroundColor="white"
            size={28}
            icon="chevron-right"
            color={colors.greyscale.ninehundred}
          />
        ) : null}
      </View>
    </View>
  );
};

export default function ProfileAndOtherOptions({ style, ...props }) {
  return (
    <View
      style={{
        flex: 1,
        paddingTop: 24,
        backgroundColor: "white",
        paddingLeft: 24,
        paddingRight: 24,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          paddingBottom: 12,
          borderBottomWidth: 1,
          borderColor: colors.greyscale.twohundred,
        }}
      >
        <Avatar.Image size={80} source={require("../../assets/profile.jpg")} />
        <View>
          <View
            style={{
              marginLeft: 24,
              justifyContent: "center",
              alignItems: "center",
              flex: 1,
            }}
          >
            <Heading5 style={{ marginBottom: 12 }}>Andrew Hansen</Heading5>
            <BodyMedium16>0091-982727287</BodyMedium16>
          </View>
        </View>
        <Avatar.Icon
          backgroundColor="white"
          size={48}
          icon="pencil"
          color={colors.brand.primary}
        />
      </View>
      <ProfileMenuItems firstIcon="percent" label="special offers and promos" />
      <ProfileMenuItems firstIcon="wallet" label="Payment Methods" />
      <ProfileMenuItems firstIcon="account" label="Profile" />
      <ProfileMenuItems firstIcon="map-marker" label="Address" />
      <ProfileMenuItems firstIcon="bell" label="Notification" />
      <ProfileMenuItems firstIcon="account-group" label="Invite Friends" />
      <ProfileMenuItems firstIcon="help" label="Help Center" />
      <ProfileMenuItems firstIcon="google-translate" label="Language" />
      <ProfileMenuItems firstIcon="logout" label="Log Out" />
    </View>
  );
}
