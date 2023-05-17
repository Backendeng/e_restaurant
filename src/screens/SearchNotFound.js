import React from "react";
import { TextInput, Text } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import NotFoundComponent from "../components/NotFoundComponent";
export default function SearchNotFound({ style, ...props }) {
  return (
    <View>
      <NotFoundComponent/>
    </View>
  );
}
