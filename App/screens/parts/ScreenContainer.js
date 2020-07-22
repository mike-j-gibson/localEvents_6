import React from "react";
import { View, StyleSheet } from "react-native";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 5
  }
});

export const ScreenContainer = ({ props }) => (
  <View style={styles.container}>{props.children}</View>
);

