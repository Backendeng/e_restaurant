import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { Button, TextInput } from "react-native-paper";
import { NhostClient, NhostProvider } from "@nhost/react";
import { useSignUpEmailPassword } from "@nhost/react";
import React, { useRef, useEffect } from "react";
import { CtextInput } from "../molecules/CtextInput";
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  BodyBold18,
  BodySemiBold18,
  BodyMedium18,
  BodyRegular18,
  BodyBold16,
  BodySemiBold16,
  BodyMedium16,
  BodyRegular16,
  BodyBold14,
  BodySemiBold14,
  BodyMedium14,
  BodyRegular14,
  BodyBold12,
  BodySemiBold12,
  BodyMedium12,
  BodyRegular12,
  BodyBold10,
  BodySemiBold10,
  BodyMedium10,
  BodyRegular10,
  NewInput,
} from "../molecules/moleculesFromPaper";

import { useBearStore } from "../globalState/zustand";
import LoadingAnimation from "./LoadingAnimation";
import { useFonts } from "expo-font";
import * as Font from "expo-font";
export default function Home() {
  const [password, setPassword] = React.useState("");
  const [text, setText] = React.useState("");
  const [implementBorder, setBorder] = React.useState(false);
  const borderInputText = useBearStore((state) => state.changeBorderInputText);
  const animation = useRef(null);
  const changestate = useBearStore((state) => state.increasePopulation);
  const changeFontstate = useBearStore((state) => state.changeFontLoaded);
  const changeBorderState = useBearStore(
    (state) => state.changeBorderInputText
  );
  const register = (e) => {
    changestate();
    console.log(text, password);
  };
  const ifFontLoadedorNot = useBearStore((state) => state.fontsLoaded);
  const bears = useBearStore((state) => state.bears);

  const loadFonts = async () => {
    await Promise.all([
      Font.loadAsync({
        "Urbanist-Bold": require("../../assets/fonts/static/Urbanist-Bold.ttf"),
      }),
      Font.loadAsync({
        "Urbanist-Medium": require("../../assets/fonts/static/Urbanist-Medium.ttf"),
      }),
      Font.loadAsync({
        "Urbanist-Regular": require("../../assets/fonts/static/Urbanist-Regular.ttf"),
      }),
      Font.loadAsync({
        "Urbanist-SemiBold": require("../../assets/fonts/static/Urbanist-SemiBold.ttf"),
      }),
    ]);
  };

  useEffect(() => {
    loadFonts().then((fonts) => changeFontstate());
  }, []);

  return (
    <>
      <ScrollView>
        <Text>get kal ho na ho</Text>
        <Text>hello</Text>
        <Text>hello</Text>
        <Text>hello</Text>

        <View className="flex-1 items-center justify-center bg-red">
          <Text>Open up App.js to start working on your app!</Text>
        </View>

        <CtextInput label="Email" />
        <Button icon="login" mode="Contained" onPress={() => register()}>
          Press me
        </Button>
        <BodyRegular10>Bodyregular10</BodyRegular10>
        <BodyMedium10>Bodymedium10</BodyMedium10>
        <BodySemiBold10>Bodysemibold10</BodySemiBold10>
        <BodyBold10>BodyBold10</BodyBold10>
        <BodyRegular12>Bodyregular12</BodyRegular12>
        <BodyMedium12>Bodymedium12</BodyMedium12>
        <BodySemiBold12>bodysemibold12</BodySemiBold12>
        <BodyBold12>Bodybold12</BodyBold12>
        <BodyRegular14>Bodyregular14</BodyRegular14>

        <Heading1>Heading 1</Heading1>
        <Heading2>Heading 2</Heading2>
        <Heading3>Heading3</Heading3>
        <Heading4>Heading 4</Heading4>
        <Heading5>Heading 5</Heading5>
        <Heading6>Heading 6</Heading6>
        <BodyBold18>bodybold18</BodyBold18>
        <BodySemiBold18>BodySemiBold18</BodySemiBold18>
        <BodyMedium18>Bodymedium18</BodyMedium18>
        <BodyRegular18>Bodyregular18</BodyRegular18>
        <BodyBold16>Bodybold 16</BodyBold16>
        <BodySemiBold16>Bodysemibold16</BodySemiBold16>
        <BodyMedium16>BodyMedium16</BodyMedium16>
        <BodyRegular16>BodyRegular16</BodyRegular16>
        <BodyBold14>BodyBold14</BodyBold14>
        <BodySemiBold14>BodySemiBold14</BodySemiBold14>
        <BodyMedium14>BodyMedium14</BodyMedium14>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
  },
});
