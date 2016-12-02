import React, {Component} from 'react'
import {Text} from 'react-native'

interface Props {
  children?: React.ReactNode,
  style?: React.TextStyle
}

interface State {

}

class MyText extends Component<Props, State> {
  render () {
    return (
    <Text style={[{ fontSize: 24, fontFamily: 'Avenir' }, this.props.style]}>
      {this.props.children}
    </Text>
    )
  }
}

export default MyText