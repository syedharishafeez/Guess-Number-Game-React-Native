import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

const GameOver = props => (
  <View style={styles.gameOverContainer}>
    <Text>The Game is Over!</Text>
    <Text>Number of rounds: {props.totalRounds}</Text>
    <Text>Number was: {props.userNumber}</Text>
    <View style={{ marginTop: 20 }}>
      <Button
        title="New Game"
        onPress={() => {
          props.setUserNumber(null);
          props.setRounds(0);
        }}
      />
    </View>
  </View>
);

export default GameOver;

const styles = StyleSheet.create({
  gameOverContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: "80%"
  }
});
