import {AsyncStorage, Alert} from 'react-native'
import moment from 'moment'
import RNAccountKit from 'react-native-facebook-account-kit'
import PushNotification from 'react-native-push-notification'

import store from '../store'
import {GOAL_KEY, TOKEN_KEY} from '../constants'
import {pushRoute} from '../navigator'

interface UserAction {
  type: string,
  payload?: any
}

export function resume (accountKitResult: any): UserAction {
  return {
    type: 'RESUME_SESSION',
    payload: accountKitResult
  }
}

export function login (): UserAction {
  const accountKitLogin = RNAccountKit.loginWithPhone()
    .then((token) => {
      // TODO: handle when there is no token
      if (token) {
        store.dispatch(resume(token))
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
    type: 'LOGOUT',
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

  Alert.alert(
    'All set for today',
    `Nudge you again ${reminderTime.fromNow()}. Have a great evening!`,
  )

  return {
    type: 'CLEAR_GOAL'
  }
}

export function scheduleAfternoonNotfication (goal: string): UserAction {
  PushNotification.cancelLocalNotifications({ id: 'MY_NOTIFICATION' })
  PushNotification.cancelAllLocalNotifications()

  const now = moment()

  // schedule for 8pm today
  const reminderTime = now.set({
    hour: 20,
    minute: 0,
    second: 0,
    millisecond: 0
  })

  PushNotification.localNotificationSchedule({
    message: "How did you do on your goals today?",
    date: reminderTime.toDate(),
    userInfo: { id: 'MY_NOTIFICATION' }
  })

  PushNotification.localNotificationSchedule({
    message: "How did you do on your goals today?",
    date: reminderTime.toDate(),
    userInfo: { id: 'MY_NOTIFICATION' }
  })

  Alert.alert(
    'Goal is set!',
    `Check back again ${reminderTime.fromNow()} and score how you did.`,
  )

  return {
    type: 'SET_GOAL',
    payload: goal
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
