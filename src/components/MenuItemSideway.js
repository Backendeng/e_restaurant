import React, { useState }  from "react";
import { TextInput, Text, Avatar } from "react-native-paper";
import { StyleSheet, View, Image, Button  } from "react-native";
import { Heading5 } from "../molecules/moleculesFromPaper";
import { BodyMedium12 } from "../molecules/moleculesFromPaper";
import { Heading5Primary } from "../molecules/moleculesFromPaper";
import { colors } from "../atoms/theme/colors";
export default function MenuItemSideway({ style, ...props }) {


  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          width: 212,
          height: 120,
          marginBottom: 20,
        }}
      >
        <Image
          style={{
            height: 120,
            width: 120,
            borderRadius: 20,
          }}
          source={require("../../assets/menuItemside1.jpg")}
        />
        <View
          style={{
            flexDirection: "column",
            justifyContent: "space-between",
            marginLeft: 12,
          }}
        >
          <Heading5>Vegetarian Noodles</Heading5>
          <View style={{ flexDirection: "row" }}>
            <BodyMedium12 style={{ marginRight: 6 }}>10 km</BodyMedium12>
            <BodyMedium12 style={{ marginRight: 6 }}>|</BodyMedium12>
            <BodyMedium12 style={{ marginRight: 6 }}>4.4</BodyMedium12>
            <BodyMedium12>(1.8k)</BodyMedium12>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Heading5Primary style={{ marginRight: 6 }}>$4.00</Heading5Primary>
            <BodyMedium12 style={{ marginRight: 6 }}>|</BodyMedium12>
            {/* <Avatar.Icon
              backgroundColor="white"
              size={48}
              icon="moped-outline"
              color={colors.brand.primary}
            />
            <BodyMedium12>$2.00</BodyMedium12> */}
            <Avatar.Icon
              backgroundColor="white"
              size={48}
              icon="heart-outline"
              color={colors.brand.primary}
            />
           
          </View>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          width: 212,
          height: 120,
          marginBottom: 20,
        }}
      >
        <Image
          style={{
            height: 120,
            width: 120,
            borderRadius: 20,
          }}
          source={require("../../assets/menuItemside2.jpg")}
        />
        <View
          style={{
            flexDirection: "column",
            justifyContent: "space-between",
            marginLeft: 12,
          }}
        >
          <Heading5>Italian Pizza</Heading5>
          <View style={{ flexDirection: "row" }}>
            <BodyMedium12 style={{ marginRight: 6 }}>7 km</BodyMedium12>
            <BodyMedium12 style={{ marginRight: 6 }}>|</BodyMedium12>
            <BodyMedium12 style={{ marginRight: 6 }}>4.1</BodyMedium12>
            <BodyMedium12>(1.3k)</BodyMedium12>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Heading5Primary style={{ marginRight: 6 }}>$9.00</Heading5Primary>
            <BodyMedium12 style={{ marginRight: 6 }}>|</BodyMedium12>
            {/* <Avatar.Icon
              backgroundColor="white"
              size={48}
              icon="moped-outline"
              color={colors.brand.primary}
            />
            <BodyMedium12>$2.00</BodyMedium12> */}
            <Avatar.Icon
              backgroundColor="white"
              size={48}
              icon="heart-outline"
              color={colors.brand.primary}
            />
          </View>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          width: 212,
          height: 120,
          marginBottom: 20,
        }}
      >
        <Image
          style={{
            height: 120,
            width: 120,
            borderRadius: 20,
          }}
          source={require("../../assets/menuItemside3.jpg")}
        />
        <View
          style={{
            flexDirection: "column",
            justifyContent: "space-between",
            marginLeft: 12,
          }}
        >
          <Heading5>Classic Burger</Heading5>
          <View style={{ flexDirection: "row" }}>
            <BodyMedium12 style={{ marginRight: 6 }}>18 km</BodyMedium12>
            <BodyMedium12 style={{ marginRight: 6 }}>|</BodyMedium12>
            <BodyMedium12 style={{ marginRight: 6 }}>4.6</BodyMedium12>
            <BodyMedium12>(1.8k)</BodyMedium12>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Heading5Primary style={{ marginRight: 6 }}>$13.00</Heading5Primary>
            <BodyMedium12 style={{ marginRight: 6 }}>|</BodyMedium12>
            {/* <Avatar.Icon
              backgroundColor="white"
              size={48}
              icon="moped-outline"
              color={colors.brand.primary}
            />
            <BodyMedium12>$2.00</BodyMedium12> */}
            <Avatar.Icon
              backgroundColor="white"
              size={48}
              icon="heart-outline"
              color={colors.brand.primary}
            />
          </View>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          width: 212,
          height: 120,
          marginBottom: 20,
        }}
      >
        <Image
          style={{
            height: 120,
            width: 120,
            borderRadius: 20,
          }}
          source={require("../../assets/menuItemside4.jpg")}
        />
        <View
          style={{
            flexDirection: "column",
            justifyContent: "space-between",
            marginLeft: 12,
          }}
        >
          <Heading5>Thai Chow chow</Heading5>
          <View style={{ flexDirection: "row" }}>
            <BodyMedium12 style={{ marginRight: 6 }}>10 km</BodyMedium12>
            <BodyMedium12 style={{ marginRight: 6 }}>|</BodyMedium12>
            <BodyMedium12 style={{ marginRight: 6 }}>4.4</BodyMedium12>
            <BodyMedium12>(1.8k)</BodyMedium12>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Heading5Primary style={{ marginRight: 6 }}>$14.00</Heading5Primary>
            <BodyMedium12 style={{ marginRight: 6 }}>|</BodyMedium12>
            {/* <Avatar.Icon
              backgroundColor="white"
              size={48}
              icon="moped-outline"
              color={colors.brand.primary}
            />
            <BodyMedium12>$2.00</BodyMedium12> */}
            <Avatar.Icon
              backgroundColor="white"
              size={48}
              icon="heart-outline"
              color={colors.brand.primary}
            />
          </View>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          width: 212,
          height: 120,
          marginBottom: 20,
        }}
      >
        <Image
          style={{
            height: 120,
            width: 120,
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
            <BodyMedium12 style={{ marginRight: 6 }}>10 km</BodyMedium12>
            <BodyMedium12 style={{ marginRight: 6 }}>|</BodyMedium12>
            <BodyMedium12 style={{ marginRight: 6 }}>4.4</BodyMedium12>
            <BodyMedium12>(1.8k)</BodyMedium12>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Heading5Primary style={{ marginRight: 6 }}>$4.00</Heading5Primary>
            <BodyMedium12 style={{ marginRight: 6 }}>|</BodyMedium12>
            {/* <Avatar.Icon
              backgroundColor="white"
              size={48}
              icon="moped-outline"
              color={colors.brand.primary}
            />
            <BodyMedium12>$2.00</BodyMedium12> */}
            <Avatar.Icon
              backgroundColor="white"
              size={48}
              icon="heart-outline"
              color={colors.brand.primary}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
