import React, {Component} from 'react'
import {
  Text,
  TouchableOpacity
} from 'react-native'
import {connect} from 'react-redux'

import actions from '../actions/index'
console.log(actions)

interface Props {
  navigator: any,
  login: any,
}

interface State {
  
}

class Login extends React.Component<Props, State> {
  static navigatorStyle = {
    statusBarTextColorScheme: 'light',
    navBarHidden: true
  }

  render () {
    return (
      <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignSelf: 'center' }} onPress={() => {
        this.props.login()
      }}>
        <Text>Login</Text>
      </TouchableOpacity>
    )
  }
}

export default connect(
  state => ({}),
  {
    login: actions.user.login
  } 
)(Login)
