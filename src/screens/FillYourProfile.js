import React, { useState } from "react";
import { TextInput, Text, Avatar } from "react-native-paper";
import { StyleSheet, ScrollView, Image, View } from "react-native";
import { Heading1 } from "../molecules/moleculesFromPaper";
import { BodyMedium14 } from "../molecules/moleculesFromPaper";
import { Heading4 } from "../molecules/moleculesFromPaper";
import CtextInput from "../molecules/CtextInput";
import { CPrimaryButtonSmall } from "../molecules/Button";
import { CPrimaryButtonRegular } from "../molecules/Button";
import DatePicker from "@react-native-community/datetimepicker";

export default function FillYourProfile({ style, ...props }) {
  const [date, setDate] = useState(new Date());

  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        alignItems: "center",
        backgroundColor: "white",

        justifyContent: "space-around",
      }}
    >
      <Avatar.Image size={160} source={require("../../assets/profile.jpg")} />
      <Heading4>Fill Your Profile</Heading4>
      <CtextInput label="Mobile Nooo." />
      <CtextInput label="Full Name" />
      <CtextInput label="Email" />
      {/* date picker isnt working*/}
      <View>
        <BodyMedium14>Pick Date of Birth</BodyMedium14>
        <DatePicker
          style={{ width: 200 }}
          value={date}
          mode="date"
          placeholder="select date"
          format="YYYY-MM-DD"
          minDate="2016-05-01"
          maxDate="2016-06-01"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: "absolute",
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
            },
          }}
          onDateChange={(date) => {
            setDate(date);
          }}
        />
      </View>

      <CPrimaryButtonRegular>Save</CPrimaryButtonRegular>
    </ScrollView>
  );
}
