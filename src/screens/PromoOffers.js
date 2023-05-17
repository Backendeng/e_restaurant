import React from "react";
import { View, ScrollView, Text, Image, StyleSheet } from "react-native";
import { BodyMedium14 } from "../molecules/moleculesFromPaper";
import { Avatar, Button } from "react-native-paper";
import { CPrimaryButtonSmall } from "../molecules/Button";
import { CPrimaryButton41by24 } from "../molecules/Button";
import { BodySemiBold10white } from "../molecules/moleculesFromPaper";
import { CchipNew } from "../molecules/Button";
import { Heading5 } from "../molecules/moleculesFromPaper";
import PromoOffer from "../components/PromoOffer";
/* this isnt working , as padding on left is not right  */

const PromoOffers = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        justifyContent: "center",
      }}
      style={{
        flexDirection: "column",

        paddingBottom: 16,
        paddingLeft: 24,

        width: 380,
      }}
    >
      <PromoOffer />
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default PromoOffers;
