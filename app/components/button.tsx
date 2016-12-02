import React, { Component } from 'react'
import {
  TouchableOpacity,
} from 'react-native'

import Text from './text'

interface Props {
  onPress(): void,
  value: string
}

interface State {

}

class Button extends Component<Props, State> {
  render () {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <Text>{this.props.value}</Text>
      </TouchableOpacity>
    )
  }
}

export default Button