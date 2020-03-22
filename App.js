import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import Header from "./components/Header";
import StartGame from "./screens/StartGame";
import GameScreen from "./screens/GameScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();

  const checkUserNumber = selectedNumber => {
    console.log("selectedNumber = ", selectedNumber);
    setUserNumber(selectedNumber);
  };

  console.log("userNumber = ", userNumber);

  let content = <StartGame onGameScreen={checkUserNumber} />;
  if (userNumber) {
    content = <GameScreen userNumber={userNumber} />;
  }

  return (
    <View>
      <Header />
      {content}
    </View>
  );
}
