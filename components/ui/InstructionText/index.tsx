import { Text, StyleSheet } from 'react-native'

import Colors from '../../../constants/colors'

function InstructionText({
  children,
  style,
}: {
  children?: React.ReactNode
  style?: any
}) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>
}

export default InstructionText

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.secondary500,
    fontSize: 24,
    fontFamily: 'JalnanGothicTTF',
  },
})
