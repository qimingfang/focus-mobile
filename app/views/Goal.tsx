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
import actions from '../actions/index'

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
  keyboardDidShowListener: any
  keyboardDidHideListener: any

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
            onPress={() => {}}
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
