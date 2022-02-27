import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { MainScreen } from '../screens/MainScreen'
import { DetailsScreen } from '../screens/DetailsScreen'
import { AboutScreen } from '../screens/AboutScreen'
import { BottomNavigator } from './BottomNavigator'
const Stack = createNativeStackNavigator()

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={BottomNavigator} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
