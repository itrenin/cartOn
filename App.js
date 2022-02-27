import { AppNavigator } from './src/navigator/StackNavigator'
import { Provider } from 'react-redux'
import store from './src/store/index'

export default function App() {
  return <Provider store={store}><AppNavigator /></Provider>
}

//https://reactnavigation.org/docs/params # Passing params to a previous screen​