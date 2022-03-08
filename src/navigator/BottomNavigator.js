import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { MainScreen } from '../screens/MainScreen'
import { DetailsScreen } from '../screens/DetailsScreen'

const Tab = createMaterialBottomTabNavigator()

export const BottomNavigator = () => {
let date = new Date().toLocaleDateString().toString()
let time = new Date().toLocaleTimeString().toString()
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Корзина"
        component={MainScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cart-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Заказы"
        component={DetailsScreen}
        initialParams={{
          date,
          time,
        }}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="view-list"
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
