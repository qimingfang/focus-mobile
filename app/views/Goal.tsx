import React, {Component} from 'react'
import {
  AsyncStorage,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TextInput,
  KeyboardAvoidingView
} from 'react-native'

import {reduxForm} from 'redux-form'
import PushNotification from 'react-native-push-notification'
import actions from '../actions/index'
import {GOAL_KEY} from '../constants'

const {
  Text,
  HeaderBar,
  Container,
  ListItem,
  theme
} = require('../components')

const {Keyboard} = require('react-native')
const {height} = Dimensions.get('window')

interface Props {
  fields?: any
}

interface State {
  inputHeight?: number
}

class Goal extends React.Component<Props, State> {
  constructor (props: any) {
    super(props)

    this.state = {
      inputHeight: 40
    }
  }

  scheduleNotification (goal: string) {
    PushNotification.cancelLocalNotifications({ id: 'MY_NOTIFICATION' })
    PushNotification.cancelAllLocalNotifications()
    
    const newDate = new Date(Date.now() + (10 * 1000))
    this._set(GOAL_KEY, JSON.stringify({ goal })).then(() => {
      PushNotification.localNotificationSchedule({
        message: "How did you do on your goals today?",
        date: newDate,
        userInfo: { id: 'MY_NOTIFICATION' }
      })
    })
  }

  _set (key: string, value: any): Promise<any> {
    return new Promise((resolve, reject) => {
      return AsyncStorage.setItem(key, value, (err) => {
        if (err) return reject(err)
        return resolve()
      })
    })
  }

  render () {
    const {
      fields: { goal } 
    } = this.props

    return (
      <View style={{ flex: 1, backgroundColor: theme.primaryColor, paddingHorizontal: 12 }}>
        <Container>
          <HeaderBar>What is your goal for today?</HeaderBar>
          <ScrollView
            keyboardShouldPersistTaps={false}
            scrollEnabled={false}
            style={{
              flex: 1,
            }}>
              <TextInput
                multiline
                style={{
                  fontSize: 20,
                  paddingVertical: 10,
                  height: this.state.inputHeight,
                  color: theme.white,
                  borderWidth: 0
                }}
                onSubmitEditing={Keyboard.dismiss}
                placeholder='Type goal ...'
                onContentSizeChange={({ nativeEvent: { contentSize: { width: txtWidth, height: txtHeight } } }) => {
                  this.setState({
                    inputHeight: txtHeight
                  })
                }}
                {...goal} 
              />
          </ScrollView>
          <TouchableOpacity
            style={[{
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 13,
              borderWidth: 0.5,
              padding: 12,
              backgroundColor: theme.primaryDark,
              marginBottom: 16
            }]}
            onPress={() => { this.scheduleNotification(goal.value) }}
          >
            <Text style={{
              color: theme.white,
              fontSize: 20
            }}>Set Goal</Text>
          </TouchableOpacity>
        </Container>
       </View>
    )
  }
}

export default reduxForm(
  {
    form: 'Goal',
    fields: ['goal']
  }, 
  state => ({}),
  {
    login: actions.user.login
  } 
)(Goal)
