import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import StartGameScreen from './screens/StartGameScreen'
import { useState } from 'react'
import GameScreen from './screens/GameScreen'
import GameOver from './screens/GameOver'
import Colors from './constants/colors'
export default function App() {
  const [userNumber, setUserNumber] = useState<string | number>('')
  const [gameIsOver, setGameIsOver] = useState(true)
  const pickedNumberHandler = (pickedNumber: string | number) => {
    setUserNumber(pickedNumber)
    setGameIsOver(false)
  }

  const gameOverHandler = () => {
    setGameIsOver(true)
  }
  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.secondary500]}
      style={styles.ScreenContainer}
    >
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode="cover"
        style={styles.ScreenContainer}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.ScreenContainer}>
          {gameIsOver && userNumber ? (
            <GameOver />
          ) : userNumber ? (
            <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
          ) : (
            <StartGameScreen onPickNumber={pickedNumberHandler} />
          )}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
  },
  goalsContainer: {
    flex: 5,
  },
  backgroundImage: {
    opacity: 0.15,
  },
})
