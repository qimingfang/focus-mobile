import React, {Component} from 'react'
import {
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  KeyboardAvoidingView
} from 'react-native'

import {connect} from 'react-redux'
import PushNotification from 'react-native-push-notification'
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

const ReactionButton = (props: any) => {
  return <TouchableOpacity
    style={{
      marginTop: 16,
      flexDirection: 'row',
      alignItems: 'center',
      padding: 8,
      backgroundColor: theme.white,
      borderRadius: 13,
      borderWidth: 0.5,
      borderColor: theme.white
    }}
    onPress={props.onPress}>
    <Image source={props.icon} />
    <Text style={{marginLeft: 8, fontSize: 16}}>{props.text}</Text>
  </TouchableOpacity>
}

class Score extends React.Component<Props, State> {
  
  onRate (rating: string) {

  }

  render () {
    return (
      <View style={{ flex: 1, backgroundColor: theme.primaryColor, paddingHorizontal: 12 }}>
        <Container>
          <HeaderBar>Finish the NPS document and share it with the team.</HeaderBar>
          <Text style={{ color: theme.white, fontSize: 24 }}>
            So, how did you do?
          </Text>

          <View style={{ flex: 1 }}>
            <ReactionButton
              onPress={() => this.onRate.bind(this)('SMILE')}
              icon={require('../../images/smile.png')}
              text='Finished it' />
            
            <ReactionButton
              onPress={() => this.onRate.bind(this)('MEH')}
              icon={require('../../images/meh.png')}
              text='Meh' />
            
            <ReactionButton
              onPress={() => this.onRate.bind(this)('SAD')}
              icon={require('../../images/upset.png')}
              text='Got distracted' />
          </View>

          <TouchableOpacity
            onPress={() => this.onRate.bind(this)('NO_RATING')}
            style={{ marginBottom: 16 }}
          >
            <Text style={{
              textAlign: 'center',
              fontWeight: 'bold',
              color: theme.primaryDark
            }}>
              Skip Rating
            </Text>
          </TouchableOpacity>
        </Container>
       </View>
    )
  }
}

export default connect(
  state => ({}),
  {
    login: actions.user.login
  } 
)(Score)
