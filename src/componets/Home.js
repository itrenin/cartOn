import { useState } from 'react'
import { View, Text, StyleSheet, Button, TextInput } from 'react-native'
import { addItem } from '../store/actions/actionCreater'
import store from '../store'
import { useDispatch } from 'react-redux'

export const Home = ({ navigation }) => {
  const dispatch = useDispatch()
  const [textState, setTextState] = useState('')
  const addHandler = () => {
    console.log(`Добавлен продукт с кодом ${textState}`)
    
    dispatch(addItem(textState))
    // console.log(store.getState())
    setTextState('')
  }

  return (
    <View style={styles.center}>
      <Text>Home`s Screen</Text>
      <TextInput
        style={styles.input}
        placeholder="Название продукта..."
        value={textState}
        onChangeText={setTextState}
      />
      <Button title="Добавить" onPress={addHandler} />
    </View>
  )
}

const styles = StyleSheet.create({
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  input: { padding: 10, borderWidth: 1, margin: 10 },
})
