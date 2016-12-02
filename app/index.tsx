// app/index.ts

import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View
} from 'react-native'

import PushNotification from 'react-native-push-notification'
import { Provider, connect } from 'react-redux'

import store from './store'

PushNotification.configure({
  // (optional) Called when Token is generated (iOS and Android)
  onRegister: function (token: string) {
    console.log('TOKEN:', token)
  },

  // (required) Called when a remote or local notification is opened or received
  onNotification: function (notification: string) {
    console.log('NOTIFICATION:', notification)
  },

  // ANDROID ONLY: GCM Sender ID (optional - not required for local notifications,
  // but is need to receive remote push notifications)
  senderID: 'YOUR GCM SENDER ID',

  // IOS ONLY (optional): default: all - Permissions to register.
  permissions: {
    alert: true,
    badge: true,
    sound: true
  },

  // Should the initial notification be popped automatically
  // default: true
  popInitialNotification: true,

  /**
    * (optional) default: true
    * - Specified if permissions (ios) and token (android and ios) will requested or not,
    * - if not, you must call PushNotificationsHandler.requestPermissions() later
    */
  requestPermissions: true
})

interface Props {

}

interface State {

}

class App extends React.Component<Props, State> {
  render () {
    return <View style={styles.container}>
      <Text style={styles.text}>
        Welcome to React Native!
      </Text>
    </View>
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    } as React.ViewStyle,

    text: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    } as React.TextStyle,
});

export default App
