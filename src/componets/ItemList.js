import { useEffect, useState } from 'react'
import {
  View,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  FlatList,
  Text,
} from 'react-native'
import store from '../store'

export const ItemList = ({ data }) => {

  if (!data?.length) {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.noItems}>Нечего считать</Text>
      </View>
    )
  }
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
  },
  noItems: {
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 25,
  },
  item: {
    fontSize: 14,
    textAlign: 'left',
  },
})
