import React, {Component} from 'react'
import {
  View,
  Image,
  TouchableOpacity
} from 'react-native'
import {connect} from 'react-redux'

import actions from '../actions/index'

const {
  Text,
  HeaderBar,
  Container,
  ListItem,
  theme
} = require('../components')

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
      <View style={{ flex: 1, backgroundColor: theme.primaryColor }}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Image
            source={require('../../images/logo.png')} />
            <Text style={{ marginTop: 16, fontSize: 48, color: theme.white }}>
              Focus
            </Text>
        </View>
        <TouchableOpacity
          onPress={this.props.login}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 13,
            borderWidth: 0.5,
            backgroundColor: theme.primaryDark,
            padding: 12,
            marginHorizontal: 12,
            marginBottom: 16
          }}>
          <Text style={{
            color: theme.white,
            fontSize: 24
          }}>Log in with phone</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default connect(
  state => ({}),
  {
    login: actions.user.login
  } 
)(Login)
