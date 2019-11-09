import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';


export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessNumber] = useState(0);

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setGuessNumber(0);
  };

  const gameOverHandler = numberOfRounds => {
    setGuessNumber(numberOfRounds);
  };

  const configureNewGameHandler = () => {
    setGuessNumber(0);
    setUserNumber(0);
  };

  let content = <StartGameScreen onStartGame={startGameHandler}/>;

  if (userNumber && guessRounds <= 0) {
    content = <GameScreen 
                userChoice={userNumber} 
                onGameOver={gameOverHandler} 
                roundsNumber={guessRounds}
                />;
  } else if (guessRounds > 0) {
    content = <GameOverScreen 
                roundsNumber={guessRounds}
                userNumber={userNumber}
                onRestart={configureNewGameHandler} />
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
