import { styles } from './styles'
import { View, Text, Pressable, Modal } from 'react-native'

const GoalItem = ({
  text,
  onDeleteItem,
  id,
}: {
  text: string
  onDeleteItem: (id: string) => void
  id: string
}) => {
  const deleteGoalHandler = () => {
    onDeleteItem(id)
  }
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: '#180303' }}
        onPress={deleteGoalHandler}
        style={({ pressed }) => pressed && styles.pressItem}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  )
}

export default GoalItem
