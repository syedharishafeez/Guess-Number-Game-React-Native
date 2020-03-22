import React from "react";
import { StyleSheet, View } from "react-native";

export default function App(props) {
  return (
    <View style={{ ...styles.inputContainer, ...props.style }}>
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 10,
    paddingVertical: 20,
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 2,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white"
  }
});
