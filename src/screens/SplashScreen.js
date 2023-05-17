import React from "react";
import { TextInput, Text } from "react-native-paper";
import { View, StyleSheet, ScrollView, Dimensions } from "react-native";
import { Heading1Primary } from "../molecules/moleculesFromPaper";
import DeliveryAnimation from "../components/DeliveryAnimation";
import { SwiperFlatList } from "react-native-swiper-flatlist";
import LightWalkthrough1 from "./LightWalkthrough1";
import LightWalkthrough2 from "./LightWalkthrough2";
import LightWalkthrough3 from "./LightWalkthrough3";
import Login from "./Login";
import FillYourProfile from "./FillYourProfile";
export default function SplashScreen({ style, ...props }) {
  return (
    <View style={styles.container}>
      <SwiperFlatList index={2} showPagination>
        <View style={[styles.child]}>
          <ScrollView
            contentContainerStyle={{
              justifyContent: "center",
              alignItems: "center",
              flex: 1,
            }}
            style={{
              backgroundColor: "white",
            }}
          >
            <DeliveryAnimation />
            <Heading1Primary>UMA'S KITCHEN</Heading1Primary>
          </ScrollView>
        </View>
        <View style={[styles.child]}>
          <LightWalkthrough1 />
        </View>
        <View style={[styles.child]}>
          <LightWalkthrough2 />
        </View>
        <View style={[styles.child]}>
          <LightWalkthrough3 />
        </View>
        <View style={[styles.child]}>
          <Login />
        </View>
      </SwiperFlatList>
    </View>
  );
}

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: { flex: 1 },
  child: { width, justifyContent: "center" },
});
