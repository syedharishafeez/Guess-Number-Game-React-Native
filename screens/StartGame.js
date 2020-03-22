import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button, Alert } from "react-native";
import Color from "../constrants/DefaultColors";
import Card from "../components/Card";
import NumberContainer from "../components/NumberContainer";

const startGame = props => {
  const [enteredNumber, setEnteredNumber] = useState("");
  const [selectedNumber, setSelectedNumber] = useState(null);

  const checkInput = inputText => {
    setEnteredNumber(inputText.replace(/[^0-9]/g, ""));
  };

  const onConfirm = () => {
    const chosenNumber = parseInt(enteredNumber);
    if (
      isNaN(chosenNumber) ||
      parseInt(chosenNumber) < 1 ||
      parseInt(chosenNumber) > 99
    ) {
      Alert.alert("Invalid Number", "Please enter a number from 1 - 99", [
        { text: "Okay", style: "destructive" }
      ]);
      return;
    } else {
      setSelectedNumber(chosenNumber);
      setEnteredNumber("");
    }
  };
  return (
    <View
      style={{
        marginTop: 20,
        height: "60%",
        justifyContent: "center"
      }}
    >
      <View style={styles.container}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>
          Start a New Game !
        </Text>

        <Card style={{ width: 300 }}>
          <Text>Select a Number</Text>
          <TextInput
            style={styles.input}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={checkInput}
            value={enteredNumber}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="Reset"
                color={Color.secondary}
                onPress={() => setEnteredNumber("")}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Confirm"
                color={Color.primary}
                onPress={onConfirm}
              />
            </View>
          </View>
        </Card>

        {selectedNumber ? (
          <Card style={{ width: 150 }}>
            <Text>You Selected</Text>
            <NumberContainer selectedNumber={selectedNumber}></NumberContainer>
            <View style={{ marginTop: 10 }}>
              <Button
                title="Start Game"
                onPress={() => props.onGameScreen(selectedNumber)}
              />
            </View>
          </Card>
        ) : null}
      </View>
    </View>
  );
};

export default startGame;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1
  },

  input: {
    width: 50,
    borderBottomWidth: 1,
    borderBottomColor: "black",
    textAlign: "center"
  },
  buttonContainer: {
    marginTop: 10,
    width: 200,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  button: {
    width: 80
  }
});
