import React from "react";
import { View, StyleSheet, Platform } from "react-native";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Platform.OS === 'web' ? '#E5D7B3' : 'tan' // Set your own custom Color
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 5
  }
});

export const ScreenContainer = ({ children  }) => (
  <View style={styles.container}>{children}</View>
);

