import React from 'react'

import { View, Text, Pressable, StyleSheet } from 'react-native'

import Colors from '../../../constants/colors'
const PrimaryButton = ({
  children,
  onPress,
}: {
  children: React.ReactNode
  onPress: () => void
}) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnterContainer, styles.pressed]
            : styles.buttonInnterContainer
        }
        onPress={onPress}
        android_ripple={{ color: Colors.primary500 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  )
}
const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },
  buttonInnterContainer: {
    backgroundColor: '#72063c',
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.75,
  },
})
export default PrimaryButton
