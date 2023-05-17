import { IconButton } from "react-native-paper";
import { StyleSheet, View } from "react-native";
export const Rating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i < 6; i++) {
    stars.push(
      <IconButton
        size={24}
        style={{ margin: 0, padding: 0 }}
        icon="star"
        iconColor={i < rating ? "#ff9f00" : "#ffe5b4"}
        key={i}
      />
    );
  }
  return <View style={styles.container}>{stars}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});
