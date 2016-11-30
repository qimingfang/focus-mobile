import React from 'react'
import {
  View
} from './components'
import PushNotification from 'react-native-push-notification'
import { Provider, connect } from 'react-redux'

import store from './store'

import Schedule from './views/Schedule'
import Rate from './views/Rate'

PushNotification.configure({
  // (optional) Called when Token is generated (iOS and Android)
  onRegister: function (token) {
    console.log('TOKEN:', token)
  },

  // (required) Called when a remote or local notification is opened or received
  onNotification: function (notification) {
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

class Navigator extends React.Component {
  render () {
    const { viewStack, children } = this.props

    return (
      <View style={{ flex: 1 }}>
        {React.Children.map(children, Child => {
          console.log(Child)
          return viewStack[0] === Child.type.__name
            ? React.cloneElement(Child, {key: Child.type.name})
            : null
        })}
      </View>
    )
  }
}

Navigator.propTypes = {
  viewStack: React.PropTypes.array.isRequired,
  children: React.PropTypes.array.isRequired
}

const Nav = connect(state => {
  return {
    viewStack: state.navigation.viewStack
  }
}, {})(Navigator)

class Main extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <Nav>
            <Schedule />
            <Rate />
          </Nav>
        </View>
      </Provider>
    )
  }
}

export default Main
