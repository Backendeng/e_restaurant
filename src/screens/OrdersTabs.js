import React from "react";
import { TextInput, Text } from "react-native-paper";
import { StyleSheet, View, useWindowDimensions } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import MenuItemSidewaysActive from "../components/MenuItemsSidewaysActive";
import MenuItemSidewaysCancelled from "../components/MenuItemSidewaysCancelled";
import MenuItemSidewaysCompleted from "../components/MenuItemSidewaysCompleted";
import { colors } from "../atoms/theme/colors";
import { BodySemiBold18 } from "../molecules/moleculesFromPaper";

const MyTabBar = (props) => {
  return (
    <TabBar
      {...props}
      style={{
        backgroundColor: "white",

        borderTopColor: "#ccc",
      }}
      activeColor={colors.brand.primary}
      labelStyle={{
        color: colors.greyscale.fivehundred,
        fontSize: 18,
        fontStyle: "normal",
        fontFamily: "Urbanist-SemiBold",
      }}
      indicatorStyle={{ backgroundColor: colors.brand.primary }}
    />
  );
};

const renderScene = SceneMap({
  Active: MenuItemSidewaysActive,
  Completed: MenuItemSidewaysCompleted,
  Cancelled: MenuItemSidewaysCancelled,
});
export default function OrdersTab({ style, ...props }) {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "Active", title: "Active" },
    { key: "Completed", title: "Completed" },
    { key: "Cancelled", title: "Cancelled" },
  ]);
  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      renderTabBar={(props) => <MyTabBar {...props} />}
      style={{ backgroundColor: "white" }}
      initialLayout={{ width: layout.width }}
    />
  );
}
