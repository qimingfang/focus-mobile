import React from 'react'
import { View } from 'react-native'

export default function render (props) {
  return (
    <View style={{ flex: 1 }}>
      {props.children}
    </View>
  )
}

render.propTypes = {
  children: React.PropTypes.any
}