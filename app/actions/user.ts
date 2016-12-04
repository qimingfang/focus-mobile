import {AsyncStorage, Alert} from 'react-native'
import RNAccountKit from 'react-native-facebook-account-kit'
import {TOKEN_KEY} from '../constants'

import {pushRoute} from '../navigator'

interface UserAction {
  type: string,
  payload?: any
}

export function login (): UserAction {
  const accountKitLogin = RNAccountKit.loginWithPhone()
    .then((token) => {
      // TODO: handle when there is no token
      if (token) {
        return set(TOKEN_KEY, JSON.stringify(token))
          .then(() => pushRoute('LOADING'))
      }
    })

  return {
    type: 'LOGIN',
    payload: accountKitLogin
  }
}

export function logout (): UserAction {
  const logoutPromise = AsyncStorage.removeItem('auth_token')
    .then(() => pushRoute('LOADING'))

  return {
    type: 'LOGIN',
    payload: logoutPromise
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
