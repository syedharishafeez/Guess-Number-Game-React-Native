import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import Header from "./components/Header";
import StartGame from "./screens/StartGame";
import GameScreen from "./screens/GameScreen";
import GameOver from "./screens/GameOver";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [rounds, setRounds] = useState(0);

  const checkUserNumber = selectedNumber => {
    setUserNumber(selectedNumber);
  };

  let content = <StartGame onGameScreen={checkUserNumber} />;
  if (userNumber && rounds <= 0) {
    content = <GameScreen userNumber={userNumber} setRounds={setRounds} />;
  } else if (rounds > 0) {
    content = (
      <GameOver
        userNumber={userNumber}
        totalRounds={rounds}
        setUserNumber={setUserNumber}
        setRounds={setRounds}
      />
    );
  }

  return (
    <View>
      <Header />
      {content}
    </View>
  );
}
