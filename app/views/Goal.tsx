import React, {Component} from 'react'
import {
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
  fields?: any,
  scheduleAfternoonNotfication?: (goal: string) => any
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
              marginLeft: 16,
              marginBottom: 8
            }}>
              <TextInput
                multiline
                style={{
                  borderLeftWidth: 3,
                  borderColor: theme.primaryLight,
                  paddingHorizontal: 20,
                  paddingVertical: 15,
                  fontSize: 20,
                  height: this.state.inputHeight,
                  color: theme.white
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

              <TouchableOpacity
              style={[{
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 13,
                padding: 12,
                marginBottom: 16
              }]}
              onPress={() => {
                this.props.scheduleAfternoonNotfication(goal.value)
              }}
            >
              <Text style={{
                fontWeight: 'bold',
                color: goal.dirty && goal.valid ? theme.white : theme.primaryLight,
                fontSize: 20
              }}>Set Goal</Text>
            </TouchableOpacity>
          </ScrollView>
        </Container>
       </View>
    )
  }
}

function validate ({goal}: any) {
  const errors: any = {}

  if (!goal) {
    errors.goal = 'Required'
  }

  return errors
}

export default reduxForm(
  {
    form: 'Goal',
    fields: ['goal']
  }, 
  state => ({
    initialValues: {
      goal: state.user.goal
    }
  }),
  {
    scheduleAfternoonNotfication: actions.user.scheduleAfternoonNotfication
  } 
)(Goal)
