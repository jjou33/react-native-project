import React from 'react'
import Colors from '../../../constants/colors'
import { Text, View, StyleSheet } from 'react-native'

const NumberContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <View style={styles.constainer}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  )
}

export default NumberContainer

const styles = StyleSheet.create({
  constainer: {
    borderWidth: 4,
    borderColor: Colors.secondary500,
    padding: 24,
    margin: 25,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    color: Colors.secondary500,
    fontSize: 36,
    // fontWeight: 'bold',
    fontFamily: 'JalnanGothicTTF',
  },
})
