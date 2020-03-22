import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Color from "../constrants/DefaultColors";

const header = props => (
  <View style={styles.headerContainer}>
    <Text style={styles.headerTitle}>Guess a Number</Text>
  </View>
);

export default header;

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    fontSize: 48,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.primary
  },
  headerTitle: {
    color: "black",
    fontSize: 16
  }
});
