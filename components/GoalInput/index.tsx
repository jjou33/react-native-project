import { useState } from 'react'
import { styles } from './styles'
import { TextInput, Button, View, Modal, Image } from 'react-native'

interface GoalInputProps {
  onAddGoal: (enteredGoalText: string) => void
  onCancel: () => void
  visible: boolean
}
const GoalInput = ({ onAddGoal, visible, onCancel }: GoalInputProps) => {
  console.log(visible)
  const [enteredGoalText, setEnteredGoalText] = useState<string>('')

  const goalInputHandler = (enteredText: string) => {
    setEnteredGoalText(enteredText)
  }

  const addGoalHandler = () => {
    onAddGoal(enteredGoalText)
    setEnteredGoalText('')
  }
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require('../../assets/images/react.png')}
          style={styles.image}
        />
        <TextInput
          placeholder="Practice React Native"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={onCancel} color="#f31282" />
          </View>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#b183ee" />
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default GoalInput
