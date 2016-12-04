import {AsyncStorage, Alert} from 'react-native'
import moment from 'moment'
import RNAccountKit from 'react-native-facebook-account-kit'
import PushNotification from 'react-native-push-notification'

import {GOAL_KEY, TOKEN_KEY} from '../constants'
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
  const logoutPromise = AsyncStorage.removeItem(TOKEN_KEY)
    .then(() => pushRoute('LOADING'))

  return {
    type: 'LOGIN',
    payload: logoutPromise
  }
}

export function scheduleMorningNotification (): UserAction {
  PushNotification.cancelLocalNotifications({ id: 'MY_NOTIFICATION' })
  PushNotification.cancelAllLocalNotifications()

  const now = moment()
  const day = now.hours() > 20
    ? now.clone().add(1, 'days')
    : now.clone()

  // schedule for 8am tomorrow
  const reminderTime = day.set({
    hour: 8,
    minute: 0,
    second: 0,
    millisecond: 0
  })
  
  PushNotification.localNotificationSchedule({
    message: "Good morning! Time to set some goals for today!",
    date: reminderTime.toDate(),
    userInfo: { id: 'MY_NOTIFICATION' }
  })

  alert('Notification scheduled for ' + reminderTime.fromNow())

  return {
    type: 'SCHEDULE_MORNING_NOTIFICATION'
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
