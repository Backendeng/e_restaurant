import React from "react";
import { View, ScrollView, Text, Image, StyleSheet } from "react-native";
import { BodyMedium14 } from "../molecules/moleculesFromPaper";
import { Avatar, Button } from "react-native-paper";
import { CPrimaryButtonSmall } from "../molecules/Button";
import { CPrimaryButton41by24 } from "../molecules/Button";
import { BodySemiBold10white } from "../molecules/moleculesFromPaper";
import { CchipNew } from "../molecules/Button";
import { Heading5 } from "../molecules/moleculesFromPaper";
import { colors } from "../atoms/theme/colors";
/* this isnt working , as padding on left is not right  */
export const PromoOffer = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
        padding: 16,
        marginBottom: 12,
        justifyContent: "space-between",
      }}
    >
      <Avatar.Icon
        backgroundColor={colors.brand.primary}
        size={28}
        icon="account"
      />
      <View style={{ flexDirection: "column" }}>
        <Heading5>Promo new offer</Heading5>
        <Text>Valid for new users</Text>
      </View>
      <CchipNew />
    </View>
  );
};

const styles = StyleSheet.create({});

export default PromoOffer;
