import "react-native-gesture-handler";
import Home from "../umaskitchen/src/components/Home";
import React, { useRef, useEffect, useState } from "react";
import { useBearStore } from "./src/globalState/zustand";
import LoadingAnimation from "./src/components/LoadingAnimation";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SplashScreen from "./src/screens/SplashScreen";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "./src/atoms/theme/colors";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { SplashNavigation } from "./src/atoms/navigation/SplashNavigation";
import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import lightwalkthrough1 from "./src/screens/LightWalkthrough1";
import * as Font from "expo-font";
import { ScrollView } from "react-native";
import FillYourProfile from "./src/screens/FillYourProfile";
import MenuItemRating from "./src/screens/MenuItemRating";
import PromoOffers from "./src/screens/PromoOffers";
import MenuItemDetail from "./src/screens/MenuItemDetail";
import MyCart from "./src/screens/MyCart";
import Addresses from "./src/screens/Adresses";
import OrdersTab from "./src/screens/OrdersTabs";
import ProfileAndOtherOptions from "./src/screens/ProfileAndOtherOptions";
import ProfileEdit from "./src/screens/ProfileEdit";
import Signup from "./src/screens/Signup";
import login from "./src/screens/Login";
import InviteFriends from "./src/screens/InviteFriends";
import LocationRider from "./src/screens/LocationRider";
import RouteMap from "./src/screens/RouteMap";
import Navigation from "./src/screens/Navigation";
import HomeShowMenuItems from "./src/screens/HomeShowMenuItems";
import LightWalkthrough2 from "./src/screens/LightWalkthrough2";
const Tab = createBottomTabNavigator();

export default function App() {
  const checkFonts = useBearStore((state) => state.fontLoaded);
  console.log("checkfonts", checkFonts);
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: "blue",
      secondary: "yellow",
    },
  };
  const SplashStack = createStackNavigator();
  const Tab = createBottomTabNavigator();
  return checkFonts ? (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <PaperProvider>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              headerShown: false,
              tabBarIcon: ({ color, size }) => {
                let iconName;

                if (route.name === "Home") {
                  iconName = "md-home";
                } else if (route.name === "Orders") {
                  iconName = "md-reader-outline";
                } else if (route.name === "Message") {
                  iconName = "md-chatbubble-ellipses-outline";
                }

                return <Ionicons name={iconName} size={size} color={color} />;
              },
            })}
            tabBarOptions={{
              activeTintColor: colors.brand.primary,
              inactiveTintColor: colors.greyscale.fivehundred,
            }}
          >
            <Tab.Screen name="Home" component={HomeShowMenuItems} />
            <Tab.Screen name="Orders" component={OrdersTab} />
            <Tab.Screen name="Message" component={SplashScreen} />
          </Tab.Navigator>
        </PaperProvider>
      </NavigationContainer>
    </SafeAreaView>
  ) : (
    <>
      <LoadingAnimation />
    </>
  );
}
