import { View, Text, StyleSheet } from 'react-native'

export const OrdersScreen = ({ route, navigation }) => {
  // const { date, time } = route.params
  return (
    <View style={styles.center}>
      <Text>Orders Screen</Text>
      {/* <Text>Дата перехода: {date}</Text>
      <Text>Время перехода: {time}</Text> */}
    </View>
  )
}
const styles = StyleSheet.create({
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
})
