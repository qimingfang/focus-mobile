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
  logout?: () => void
}

interface State {
  
}

class Settings extends React.Component<Props, State> {
  render () {
    return (
      <View style={{ flex: 1, backgroundColor: theme.primaryColor, paddingHorizontal: 12 }}>
        <Container>
          <HeaderBar>Settings</HeaderBar>
          <Text style={{ flex: 1, color: theme.white }}>
            Not much going on here (yet). If you have any feedback, please send it to qf26@cornell.edu.
          </Text>
          <TouchableOpacity
            onPress={this.props.logout}
            style={{ alignItems: 'center', justifyContent: 'center', padding: 24 }}>
            <Text style={{ fontSize: 20, color: theme.white }}>Log Out</Text>
          </TouchableOpacity>
        </Container>
       </View>
    )
  }
}

export default connect(
  state => ({}),
  {
    logout: actions.user.logout
  }
)(Settings)
