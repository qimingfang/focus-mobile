import React from 'react'
import { View } from 'react-native'

export default class Container extends React.Component {
  render () {
    return (
      <View style={{ flex: 1, marginTop: 27 }}>
        {this.props.children}
      </View>
    )
  }
}

Container.propTypes = {
  children: React.PropTypes.any
}