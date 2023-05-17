import React from "react";
import { TextInput, Text } from "react-native-paper";
import { StyleSheet, View,Image } from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";
export default function Testflexbox({ style, ...props }) {
  return (
    <View>
      <Grid>
        <Col>
        <Image
          style={{ marginBottom: 60 }}
          source={require("../../assets/NotFound.png")}
        />
        </Col>
        <Col>
        
        </Col>
        <Col>
        
        </Col>
        <Col>
        
        </Col>

    </Grid>

    </View>
  );
}