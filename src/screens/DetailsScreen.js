import { View, Text, StyleSheet } from 'react-native'

export const DetailsScreen = ({ route, navigation }) => {
   const { date, time } = route.params
  return (
    <View style={styles.center}>
      <Text>Details Screen</Text>
      <Text>Дата перехода: {date}</Text>
      <Text>Время перехода: {time}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
})
