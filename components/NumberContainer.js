import React from "react";
import { StyleSheet, View, Text } from "react-native";

const NumberContainer = props => {
  return (
    <View
      style={{
        marginTop: 10,
        width: 50,
        borderWidth: 2,
        borderColor: "purple",
        borderRadius: 10,
        paddingVertical: 12,
        paddingHorizontal: 4
      }}
    >
      <Text
        style={{
          fontSize: 24,
          textAlign: "center",
          fontWeight: "bold",
          color: "purple"
        }}
      >
        {props.selectedNumber}
      </Text>
    </View>
  );
};

export default NumberContainer;
