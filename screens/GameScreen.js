import React, { useState } from "react";
import { StyleSheet, View, Text, Button, Alert } from "react-native";
import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";

const generateRandomNumber = (min, max, exclude) => {
  const randomNumber = Math.floor(Math.random() * (max - min) + min);
  console.log("randomNumber = ", randomNumber);
  if (randomNumber === exclude) {
    return "Game Over";
  }
  return randomNumber;
};

const GameScreen = props => {
  const [lowerValue, setLowerValue] = useState(0);
  const [UpperValue, setUpperValue] = useState(100);
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomNumber(0, 100, props.userNumber)
  );

  console.log("currentGuess = ", currentGuess);
  return (
    <View
      style={{ justifyContent: "center", alignItems: "center", marginTop: 20 }}
    >
      <Text>Opponent's Guess</Text>
      <NumberContainer selectedNumber={currentGuess} />
      <Card style={{ width: 300 }}>
        <View
          style={{
            flexDirection: "row",
            width: 200,
            justifyContent: "space-between"
          }}
        >
          <View style={{ width: 80 }}>
            <Button
              title="lower"
              onPress={() => {
                if (currentGuess < props.userNumber) {
                  Alert.alert("Don't Cheat", "Don't misguide the computer", [
                    { text: "Cancel", style: "cancel" }
                  ]);
                } else {
                  let rndNum = generateRandomNumber(
                    lowerValue,
                    currentGuess,
                    props.userNumber
                  );
                  setCurrentGuess(rndNum);
                  if (rndNum > lowerValue && rndNum < props.userNumber) {
                    setLowerValue(rndNum);
                  } else if (rndNum < UpperValue && rndNum > props.userNumber) {
                    setUpperValue(rndNum);
                  }
                }
              }}
            />
          </View>
          <View style={{ width: 80 }}>
            <Button
              title="Higher"
              onPress={() => {
                if (currentGuess > props.userNumber) {
                  Alert.alert("Don't Cheat", "Don't misguide the computer", [
                    { text: "Cancel", style: "cancel" }
                  ]);
                } else {
                  let rndNum = generateRandomNumber(
                    currentGuess,
                    UpperValue,
                    props.userNumber
                  );
                  setCurrentGuess(rndNum);
                  if (rndNum > lowerValue && rndNum < props.userNumber) {
                    setLowerValue(rndNum);
                  } else if (rndNum < UpperValue && rndNum > props.userNumber) {
                    setUpperValue(rndNum);
                  }
                }
              }}
            />
          </View>
        </View>
      </Card>
    </View>
  );
};

export default GameScreen;
