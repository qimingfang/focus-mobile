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
          <View style={{ flex: 1 }}>
            <Text style={{ color: theme.white }}>
              Not much going on here (yet). If you have any feedback, please send it to qf26@cornell.edu.
            </Text>
           </View>
          <TouchableOpacity
            onPress={this.props.logout}
            style={{ alignItems: 'center', justifyContent: 'center', padding: 24 }}>
            <Text style={{ fontWeight: 'bold', color: theme.white }}>Log Out</Text>
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
