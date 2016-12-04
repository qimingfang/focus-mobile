import React, {Component} from 'react'
import {
  View,
  Image,
  TouchableOpacity,
  Dimensions
} from 'react-native'

import {connect} from 'react-redux'

import {Router} from '../navigator'
import actions from '../actions/index'

const {
  Text,
  HeaderBar,
  Container,
  ListItem,
  theme
} = require('../components')

const {width, height} = Dimensions.get('window')

interface Props {
  navigator: any,
  login?: any,
}

interface State {
  
}

class Login extends React.Component<Props, State> {
  static navigatorStyle = {
    statusBarTextColorScheme: 'light',
    navBarHidden: true
  }

  onLogin () {
    this.props.navigator.push(Router.getRoute('HOME'))
  }

  render () {
    return (
      <View style={{ flex: 1, backgroundColor: theme.primaryColor }}>
        <View style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width,
          height,
          alignItems: 'center',
          justifyContent: 'center'
         }}>
          <Image
            source={require('../../images/logo.png')} />
            <Text style={{ marginTop: 16, fontSize: 48, color: theme.white }}>
              Focus
            </Text>
        </View>
        <View style={{ flex: 1 }} />
        <TouchableOpacity
          onPress={() => this.onLogin()}
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
            fontSize: 20
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
