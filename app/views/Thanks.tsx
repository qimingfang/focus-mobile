import React, {Component} from 'react'
import {
  AsyncStorage,
  View,
  Image,
  TouchableOpacity,
  Dimensions
} from 'react-native'

import {connect} from 'react-redux'
import actions from '../actions/index'
import {Router} from '../navigator'
import {TOKEN_KEY} from '../constants'

const {
  Text,
  theme
} = require('../components')

const {width, height} = Dimensions.get('window')

interface Props {
  track?: (eventName: string) => void
  scheduleMorningNotification?: () => void
}

interface State {
}

class Thanks extends React.Component<Props, State> {
  render () {
    return (
      <View style={{
        flex: 1,
        backgroundColor: theme.primaryColor,
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Image
          source={require('../../images/glasses.png')} />
        <Text style={{ marginTop: 16, fontSize: 32, color: theme.white, textAlign: 'center' }}>
          {`You're all set for today.\nSee you tomorrow!`}
        </Text>

        <TouchableOpacity
            onPress={() => {
              this.props.track('Press: Remind me tomorrow')
              this.props.scheduleMorningNotification()
            }}
            style={{ marginTop: 16 }}
          >
            <Text style={{
              textAlign: 'center',
              fontWeight: 'bold',
              color: theme.primaryDark
            }}>
              Remind me tomorrow
            </Text>
          </TouchableOpacity>
      </View>
    )
  }
}

export default connect(
  state => ({}),
  {
    scheduleMorningNotification: actions.user.scheduleMorningNotification,
    track: actions.track
  }
)(Thanks)
