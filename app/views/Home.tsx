import React, {Component} from 'react'
import {
  Text,
  TouchableOpacity
} from 'react-native'

interface Props {
  navigator: any
}

interface State {
  
}

class App extends React.Component<Props, State> {
  render () {
    return (
      <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignSelf: 'center' }} onPress={() => {
        this.props.navigator.push({
          screen: 'SCHEDULE'
        })
      }}>
        <Text>Home Screen</Text>
      </TouchableOpacity>
    )
  }
}

export default App
