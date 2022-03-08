import * as Font from 'expo-font'

export async function preBoot() {
    try{
        await Font.loadAsync({
            'open-bold': require('../assets/fonts/OpenSans-Bold.ttf'),
            'open-regular': require('../assets/fonts/OpenSans-Regular.ttf'),
            'open-light': require('../assets/fonts/OpenSans-Light.ttf'),
          })
    } catch (e) {
        console.error(e)
    }
}