import React, {Component} from 'react'
import {
  View,
  Image,
  TouchableOpacity
} from 'react-native'
import {connect} from 'react-redux'

import actions from '../actions/index'
import Goal from './Goal'
import Settings from './Settings'

const {
  TabNavigation,
  TabNavigationItem
} = require('@exponent/ex-navigation')

const {
  Text,
  HeaderBar,
  Container,
  ListItem,
  theme
} = require('../components')

interface Props {
  navigator: any,
}

interface State {
  selectedTab: string
}

class Home extends React.Component<Props, State> {
  static navigatorStyle = {
    navBarHidden: true,
    statusBarTextColorScheme: 'light'
  }

  constructor (props: any) {
    super(props)

    this.state = {
      selectedTab: 'HOME'
    }
  }

  render () {
    return (
      <TabNavigation
        id="tab"
        navigatorUID="tab"
        initialTab="goal">
        <TabNavigationItem
          id="goal"
          renderIcon={(isSelected: boolean) =>
            <Image source={require('../../images/ic-goals.png')} 
              style={isSelected ? { tintColor: '#2390FB'} : {} }
            /> 
          }>
          <Goal />
        </TabNavigationItem>

        <TabNavigationItem
          id="settings"
          renderIcon={(isSelected: boolean) =>
            <Image source={require('../../images/ic-settings.png')} 
              style={isSelected ? { tintColor: '#2390FB'} : {} }
            /> 
          }>
          <Settings />
        </TabNavigationItem>
      </TabNavigation>
    )
  }
}

export default connect(
  state => ({}),
  {
  } 
)(Home)
