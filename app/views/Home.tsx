import React, {Component} from 'react'
import {
  AppState,
  AsyncStorage,
  View,
  Image,
  TouchableOpacity
} from 'react-native'
import {connect} from 'react-redux'

import actions from '../actions/index'
import Goal from './Goal'
import Score from './Score'
import Settings from './Settings'
import {GOAL_KEY} from '../constants'

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
  goal: any
}

class Home extends React.Component<Props, State> {
  constructor (props: any) {
    super(props)

    this.state = {
      goal: null
    }
  }

  componentDidMount() {
    AppState.addEventListener('change', this._handleAppStateChange.bind(this));
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange.bind(this));
  }

  _handleAppStateChange (appState: any) {
    AsyncStorage.getItem(GOAL_KEY).then(val => {
      if (val) {
        this.setState({ goal: JSON.parse(val) })
      }
    })
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

          { this.state.goal
            ? <Score goal={this.state.goal} />
            : <Goal />
          }
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
