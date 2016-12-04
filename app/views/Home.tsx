import React, {Component} from 'react'
import {
  View,
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

class Home extends React.Component<Props, State> {
  static navigatorStyle = {
    navBarHidden: true,
    statusBarTextColorScheme: 'light'
  }

  render () {
    return (
      <View style={{ flex: 1, backgroundColor: theme.primaryColor }}>
        <Container>
          <HeaderBar>What is your goal for today?</HeaderBar>
        </Container>
       </View>
    )
  }
}

export default connect(
  state => ({}),
  {
    login: actions.user.login
  } 
)(Home)
