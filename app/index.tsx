// app/index.ts

import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    NavigationExperimental
} from 'react-native'

import RNAccountKit, {
  Color
} from 'react-native-facebook-account-kit'

import PushNotification from 'react-native-push-notification'
import { Provider, connect } from 'react-redux'

import Home from './views/Home'
import Schedule from './views/Schedule'

import store from './store'

const {
  Button,
} = require('./components')

const {Navigation} = require('react-native-navigation')

RNAccountKit.configure({
  theme: {
    // Background
    backgroundColor: Color.hex('#ffffff'),
    
    // Button
    buttonBackgroundColor: Color.hex('#0A7040'),
    buttonBorderColor: Color.hex('#0A7040'),
    buttonTextColor: Color.hex('#ffffff'),
 
    // Button disabled
    buttonDisabledBackgroundColor: Color.hex('#0B421A'),
    buttonDisabledBorderColor: Color.hex('#0B421A'),
    buttonDisabledTextColor: Color.hex('#ffffff'),
  
    // Header
    headerBackgroundColor: Color.hex('#0A7040'),
    headerButtonTextColor: Color.hex('#ffffff'),
    headerTextColor: Color.hex('#ffffff'),
 
    // Input
    inputBackgroundColor: Color.hex('#ffffff'),
    inputBorderColor: Color.hex('#0A7040'),
    inputTextColor: Color.hex('#263238'),
 
    // Others
    iconColor: Color.hex('#0A7040'),
    textColor: Color.hex('#263238'),
    titleColor: Color.hex('#ffffff')
  }
})

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

Navigation.registerComponent('HOME', () => Home, store, Provider);
Navigation.registerComponent('SCHEDULE', () => Schedule, store, Provider);

Navigation.startSingleScreenApp({
 screen: {
   screen: 'HOME',
   title: 'Navigation',
   navigatorStyle: {
     navBarBackgroundColor: '#4dbce9',
     navBarTextColor: '#ffff00',
     navBarSubtitleTextColor: '#ff0000',
     navBarButtonColor: '#ffffff',
     statusBarTextColorScheme: 'light'
   }
 }
})
