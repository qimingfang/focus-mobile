import React, {Component} from 'react'
import {
  AsyncStorage,
  View,
  Image,
  TouchableOpacity,
  Dimensions
} from 'react-native'

import {Router} from '../navigator'
import {connect} from 'react-redux'
import {TOKEN_KEY} from '../constants'

const {
  Text,
  theme
} = require('../components')

const {width, height} = Dimensions.get('window')

interface Props {
  navigator: any
}

interface State {
  
}

class Loading extends React.Component<Props, State> {
  componentWillMount () {
    AsyncStorage.getItem(TOKEN_KEY).then(val => {
      const initialScreen = val ? 'HOME' : 'LOGIN'
      this.props.navigator.immediatelyResetStack([Router.getRoute(initialScreen)])
    })
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
      </View>
    )
  }
}

export default Loading
