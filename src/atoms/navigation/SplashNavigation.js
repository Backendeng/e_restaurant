import React from "react";
import LightWalkthrough1 from "../../screens/LightWalkthrough1";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "../../screens/SplashScreen";
import LightWalkthrough2 from "../../screens/LightWalkthrough2";
import HomeShowMenuItems from "../../screens/HomeShowMenuItems";

const SplashStack = createStackNavigator();

export const SplashNavigation = () => {
  return (
    <SplashStack.Navigator headerMode="none">
      <SplashStack.Screen
        name="homeshowmenuitems"
        component={HomeShowMenuItems}
      />
      <SplashStack.Screen
        name="lightwalkthrough1"
        component={LightWalkthrough1}
      />
      <SplashStack.Screen
        name="lightwalkthrough2"
        component={LightWalkthrough2}
      />
    </SplashStack.Navigator>
  );
};
