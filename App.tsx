import { useState } from 'react'
import { StyleSheet, View, FlatList, Button } from 'react-native'
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'
import { StatusBar } from 'expo-status-bar'
interface courseGoalsType {
  text: string
  id: string
}
export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState<boolean>(false)
  const [courseGoals, setCourseGoals] = useState<courseGoalsType[]>([])

  const startAddGoalHandler = () => {
    setModalIsVisible(true)
  }

  const endAddGoalhandler = () => {
    setModalIsVisible(false)
  }
  const addGoalHandler = (enteredGoalText: string) => {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ])
    endAddGoalhandler()
  }

  const deleteGoalHandler = (id: string) => {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter(goal => goal.id !== id)
    })
  }
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#b182ee"
          onPress={startAddGoalHandler}
        />
        {modalIsVisible && (
          <GoalInput
            visible={modalIsVisible}
            onAddGoal={addGoalHandler}
            onCancel={endAddGoalhandler}
          />
        )}
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={item => {
              return (
                <GoalItem
                  text={item.item.text}
                  id={item.item.id}
                  onDeleteItem={deleteGoalHandler}
                />
              )
            }}
            keyExtractor={(item, index) => {
              return item.id
            }}
          />
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
})
