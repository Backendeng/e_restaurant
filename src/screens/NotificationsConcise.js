import React from "react";
import { View, ScrollView, Text, Image, StyleSheet } from "react-native";
import { BodyMedium14 } from "../molecules/moleculesFromPaper";
import { Avatar, Button } from "react-native-paper";
import { CPrimaryButtonSmall } from "../molecules/Button";
import { CPrimaryButton41by24 } from "../molecules/Button";
import { BodySemiBold10white } from "../molecules/moleculesFromPaper";
import { CchipNew } from "../molecules/Button";
import { Heading5 } from "../molecules/moleculesFromPaper";

/* this isnt working , as padding on left is not right  */
export const NotificationCard = () => {
  return (
    <View
      style={{
        flexDirection: "column",
      }}
    >
      <View
        style={{
          flexDirection: "row",

          justifyContent: "space-between",
        }}
      >
        <Avatar.Icon backgroundColor="pink" size={28} icon="folder" />
        <View style={{ flexDirection: "column" }}>
          <Heading5>Title of the notifications</Heading5>
          <Text>29th dec 2022, 5:23 pm</Text>
        </View>
        <CchipNew />
      </View>

      <View>
        <BodyMedium14>
          You have canceled an order at Burger Hut. We apologize for your
          inconvenience. We will try to improve our service next time 🥲
        </BodyMedium14>
      </View>
    </View>
  );
};
const NotificationsConcise = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        justifyContent: "center",
      }}
      style={{
        flexDirection: "column",
        backgroundColor: "white",

        paddingBottom: 16,
        paddingLeft: 24,

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
        <Heading5>Notifications</Heading5>
      </View>

      <NotificationCard />
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default NotificationsConcise;
