import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, View, Text, Button, Alert } from "react-native";
import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";

const generateRandomNumber = (min, max, exclude) => {
  const randomNumber = Math.floor(Math.random() * (max - min) + min);
  return randomNumber;
};

const GameScreen = props => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomNumber(0, 100, props.userNumber)
  );
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const [gameRound, setGameRound] = useState(0);

  const { userNumber, setRounds } = props;
  useEffect(() => {
    if (currentGuess === props.userNumber) {
      props.setRounds(gameRound + 1);
    }
  }, [currentGuess, userNumber, setRounds]);

  const nextGuess = direction => {
    if (
      (direction === "lower" && currentGuess < props.userNumber) ||
      (direction === "higher" && currentGuess > props.userNumber)
    ) {
      Alert.alert("Don't Cheat", "Hey! DOn't mis-guide the computer", [
        { text: "Cancel", style: "cancel" }
      ]);
    } else {
      if (direction === "lower") {
        currentHigh.current = currentGuess;
      } else {
        currentLow.current = currentGuess;
      }
      setCurrentGuess(
        generateRandomNumber(
          currentLow.current,
          currentHigh.current,
          props.userNumber
        )
      );
      setGameRound(gameRound + 1);
    }
  };

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
            <Button title="lower" onPress={() => nextGuess("lower")} />
          </View>
          <View style={{ width: 80 }}>
            <Button title="Higher" onPress={() => nextGuess("higher")} />
          </View>
        </View>
      </Card>
    </View>
  );
};

export default GameScreen;
