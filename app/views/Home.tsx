import React, {Component} from 'react'
import {
  AppState,
  AsyncStorage,
  View,
  Image,
  TouchableOpacity
} from 'react-native'
import moment from 'moment'
import {connect} from 'react-redux'

import actions from '../actions/index'
import Goal from './Goal'
import Score from './Score'
import Settings from './Settings'
import Thanks from './Thanks'
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
  goal?: any
}

interface State {
  now?: Date
}

class Home extends React.Component<Props, State> {
  constructor (props: any) {
    super(props)

    this.state = {
      now: new Date()
    }
  }

  componentDidMount() {
    AppState.addEventListener('change', this._handleAppStateChange.bind(this));
      this._updateStateFromStoredGoals.bind(this)()
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange.bind(this));
  }

  _handleAppStateChange (appState: any) {
    if (appState === 'active') {
      this._updateStateFromStoredGoals.bind(this)()
    }
  }

  _updateStateFromStoredGoals () {
    this.setState({
      now: new Date()
    })
  }

  render () {
    const currentTime = moment(this.state.now)
    const currentHour = currentTime.hours()
     
    console.log(currentHour)

    const homeScreen = currentHour < 8 || currentHour >= 20
      // reporting
      ? this.props.goal
        ? <Score />
        : <Thanks />
      : <Goal />
          
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
          {homeScreen}
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
  state => ({
    goal: state.user.goal
  }),
  {
  } 
)(Home)
