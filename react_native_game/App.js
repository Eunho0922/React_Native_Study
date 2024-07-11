import { React, useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from "expo-linear-gradient"

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import Colors from './components/colors';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGamsIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  function pickedNuberHandler(pickNumber) {
    setUserNumber(pickNumber);
    setGamsIsOver(false)
  }

  function gameOverHandler() {
    setGamsIsOver(true)
  }

  function onStartNewGameHandler() {
    setUserNumber(null);
    setGuessRounds(0);
  }

  let screen = <StartGameScreen onPickNumber={pickedNuberHandler}/>

  if (userNumber) {
    screen = (
    <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    )
  }

  if (gameIsOver && userNumber) {
    screen = (
      <GameOverScreen 
        roundNumber={guessRounds}
        userNumber={userNumber}
        onStartNewGame={onStartNewGameHandler}
      />
    );
  }
  return (
    <LinearGradient colors={[Colors.primary700, Colors.accent500]}
    style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/background.png")}
        resizeMode='cover'
        style={styles.rootScreen}
        imageStyle={styles.backgoundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgoundImage: {
    opacity: 0.15
  }
});
