import React from "react";
import { TextInput, Text } from "react-native-paper";
import { StyleSheet, ScrollView, Image, View } from "react-native";
import { Heading5 } from "../molecules/moleculesFromPaper";
import { BodyMedium12 } from "../molecules/moleculesFromPaper";
import { Heading5Primary } from "../molecules/moleculesFromPaper";
import { Avatar } from "react-native-paper";
import { colors } from "../atoms/theme/colors";

export default function MenuItemDown({ style, ...props }) {
  return (
    <View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
        <View style={{ marginRight: 12 }}>
          <Image
            style={{
              marginBottom: 12,
              height: 198,
              width: 198,
              borderRadius: 20,
            }}
            source={require("../../assets/menuItem2.jpg")}
          />
          <Heading5 style={{ marginBottom: 12 }}>Salad Chow Chow</Heading5>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
            }}
          >
            <BodyMedium12 style={{ marginRight: 6 }}>10 km</BodyMedium12>
            <BodyMedium12 style={{ marginRight: 6 }}>|</BodyMedium12>
            <BodyMedium12 style={{ marginRight: 6 }}>4.4</BodyMedium12>
            <BodyMedium12>(1.8k)</BodyMedium12>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Heading5Primary style={{ marginRight: 6 }}>$4.00</Heading5Primary>
            <BodyMedium12 style={{ marginRight: 6 }}>|</BodyMedium12>
            <Avatar.Icon
              backgroundColor="white"
              size={48}
              icon="moped-outline"
              color={colors.brand.primary}
            />
            <BodyMedium12>$2.00</BodyMedium12>
            <Avatar.Icon
              backgroundColor="white"
              size={48}
              icon="heart-outline"
              color={colors.brand.primary}
            />
          </View>
        </View>

        <View style={{ marginRight: 12 }}>
          <Image
            style={{
              marginBottom: 12,
              height: 198,
              width: 198,
              borderRadius: 20,
            }}
            source={require("../../assets/menuItem.jpg")}
          />
          <Heading5 style={{ marginBottom: 12 }}>Salad Chow Chow</Heading5>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
            }}
          >
            <BodyMedium12 style={{ marginRight: 6 }}>10 km</BodyMedium12>
            <BodyMedium12 style={{ marginRight: 6 }}>|</BodyMedium12>
            <BodyMedium12 style={{ marginRight: 6 }}>4.4</BodyMedium12>
            <BodyMedium12>(1.8k)</BodyMedium12>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Heading5Primary style={{ marginRight: 6 }}>$4.00</Heading5Primary>
            <BodyMedium12 style={{ marginRight: 6 }}>|</BodyMedium12>
            <Avatar.Icon
              backgroundColor="white"
              size={48}
              icon="moped-outline"
              color={colors.brand.primary}
            />
            <BodyMedium12>$2.00</BodyMedium12>
            <Avatar.Icon
              backgroundColor="white"
              size={48}
              icon="heart-outline"
              color={colors.brand.primary}
            />
          </View>
        </View>

        <View style={{ marginRight: 12 }}>
          <Image
            style={{
              marginBottom: 12,
              height: 198,
              width: 198,
              borderRadius: 20,
            }}
            source={require("../../assets/menuItem2.jpg")}
          />
          <Heading5 style={{ marginBottom: 12 }}>Russian feast in</Heading5>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
            }}
          >
            <BodyMedium12 style={{ marginRight: 6 }}>10 km</BodyMedium12>
            <BodyMedium12 style={{ marginRight: 6 }}>|</BodyMedium12>
            <BodyMedium12 style={{ marginRight: 6 }}>4.4</BodyMedium12>
            <BodyMedium12>(1.8k)</BodyMedium12>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Heading5Primary style={{ marginRight: 6 }}>$4.00</Heading5Primary>
            <BodyMedium12 style={{ marginRight: 6 }}>|</BodyMedium12>
            <Avatar.Icon
              backgroundColor="white"
              size={48}
              icon="moped-outline"
              color={colors.brand.primary}
            />
            <BodyMedium12>$2.00</BodyMedium12>
            <Avatar.Icon
              backgroundColor="white"
              size={48}
              icon="heart-outline"
              color={colors.brand.primary}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
