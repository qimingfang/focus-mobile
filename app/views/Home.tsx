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

class App extends React.Component<Props, State> {
  render () {
    return (
      <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignSelf: 'center' }} onPress={() => {
        this.props.login()
      }}>
        <Text>Home Screen</Text>
      </TouchableOpacity>
    )
  }
}

export default connect(
  state => ({}),
  {
    login: actions.user.login
  } 
)(App)
