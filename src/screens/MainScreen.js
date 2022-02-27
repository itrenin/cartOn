import { useEffect, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { Home } from '../componets/Home'
import { ItemList } from '../componets/ItemList'
import { loadList } from '../store/actions/actionCreater'

export const MainScreen = ({ navigation }) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadList)
  }, [dispatch])

  // dispatch(loadList)

  const itemList = useSelector((state) => state.items.orderItems)
  
  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <ItemList  data={itemList} />
      </View>
      <Home />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'flex-end'
  },
  list: {
    maxHeight: '50%',
  },
})
