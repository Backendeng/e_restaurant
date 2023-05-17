import React from "react";
import { TextInput, Text } from "react-native-paper";
import { StyleSheet, View, ScrollView } from "react-native";
import Address from "../components/Address";
import { CPrimaryButtonRegular } from "../molecules/Button";
import { CMutedButtonRegular } from "../molecules/Button";

export default function Addresses({ style, ...props }) {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <Address />
        <Address />
        <Address />
      </ScrollView>
      <View style={{ marginBottom: 24 }}>
        <CMutedButtonRegular>Add New Address</CMutedButtonRegular>
      </View>

      <CPrimaryButtonRegular>Apply </CPrimaryButtonRegular>
    </View>
  );
}
