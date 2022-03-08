import { AppNavigator } from './src/navigator/StackNavigator'
import { Provider } from 'react-redux'
import { useState } from 'react'
import AppLoading from 'expo-app-loading'
import store from './src/store/index'
import { preBoot } from './src/preboot'

export default function App() {
  const [isReady, setIsReady] = useState(false)

  if (!isReady) {
    return (
      <AppLoading
        startAsync={preBoot}
        onFinish={() => setIsReady(true)}
        onError={(err) => console.error(err)}
      />
    )
  }

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  )
}

//https://reactnavigation.org/docs/params # Passing params to a previous screen​
