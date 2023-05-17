import React, { useRef, useEffect } from "react";
import { Button, StyleSheet, View } from "react-native";
import LottieView from "lottie-react-native";

export default function DeliveryAnimation() {
  const animation = useRef(null);
  useEffect(() => {}, []);

  return (
    <View style={styles.animationContainer}>
      <LottieView
        autoPlay
        ref={animation}
        style={{
          width: 300,
          height: 300,
          backgroundColor: "white",
        }}
        source={require("../../assets/deliveryAnimation.json")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: "#fff",
  },
});
