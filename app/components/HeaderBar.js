import React from 'react'
import { View, Text } from 'react-native'

const theme = require('./theme')

export default function render (props) {
  return (
    <View style={{ height: 64, justifyContent: 'center' }}>
      <Text style={{
        color: props.titleColor || theme.white,
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center'
      }}>
        {props.children}
       </Text>
    </View>
  )
}

render.propTypes = {
  children: React.PropTypes.any
}