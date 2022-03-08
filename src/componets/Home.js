import { useState } from 'react'
import { View, Text, StyleSheet, Button, TextInput, Alert } from 'react-native'
import { addItem } from '../store/actions/actionCreater'
import store from '../store'
import { useDispatch } from 'react-redux'

export const Home = ({ navigation }) => {
  const dispatch = useDispatch()

  // Начало локальных стейтов для полей ввода
  const [textState, setTextState] = useState('')
  const [priceState, setPriceState] = useState('')
  // Конец локальных стейтов для полей ввода

  // начало обработки нажатия на кнопку "добавить"
  const addHandler = () => {
    // console.log(`Добавлен продукт с кодом ${textState}`)
    if (textState === '' || priceState === '') {
      Alert.alert(
        'Ошибка в данных',
        'Поля НАЗВАНИЕ и ЦЕНА должны быть заполнены',
        [{ text: 'Понятно' }]
      )
    } else {
      dispatch(addItem(textState, priceState))
      // console.log(store.getState())
      setTextState('')
      setPriceState('')
    }
  }
  //конец обработки нажатия на кнопку "добавить"
  return (
    <View style={styles.center}>
      {/* <Text>Home`s Screen</Text> */}
      <TextInput
        style={styles.input}
        placeholder="Название продукта..."
        value={textState}
        onChangeText={setTextState}
      />
      <TextInput
        style={styles.input}
        placeholder="Цена"
        value={priceState}
        onChangeText={setPriceState}
        keyboardType="numeric"
      />
      <View style={styles.buttons}>
        <Button title="Завершить заказ" onPress={addHandler} />
        <View style={styles.spacer}></View>
        <Button title="Добавить" onPress={addHandler} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  center: { flex: 1, alignItems: 'center', justifyContent: 'flex-end' },
  input: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    minWidth: 200,
  },
  buttons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  spacer: {
    paddingHorizontal: 20,
  },
})
