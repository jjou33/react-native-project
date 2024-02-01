import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <View>
      <Text style={styles.title}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'JalnanGothicTTF',
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: 'white',
    padding: 10,
  },
})
export default Title
