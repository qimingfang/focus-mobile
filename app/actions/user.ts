import {AsyncStorage, Alert} from 'react-native'
import RNAccountKit from 'react-native-facebook-account-kit'

interface UserAction {
  type: string,
  payload?: any
}

export function login(): UserAction {
  const accountKitLogin = RNAccountKit.loginWithPhone()
    .then((token) => {
      if (!token) {
        Alert.alert('Invalid Login', 'Please try logging in again')
      } else {
        return set('auth_token', JSON.stringify(token))
      }
    })

  return {
    type: 'LOGIN',
    payload: accountKitLogin
  }
}

function set (key: string, value: any): Promise<any> {
  return new Promise((resolve, reject) => {
    return AsyncStorage.setItem(key, value, (err) => {
      if (err) return reject(err)
      return resolve()
    })
  })
}
