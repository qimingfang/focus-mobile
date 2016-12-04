import React from 'react'
import { Dimensions, View, Text } from 'react-native'

const theme = require('./theme')
const {width} = Dimensions.get('window')

export default function render (props) {
  return (
    <View style={{ paddingTop: 12 }}>
      <Text style={{
        color: props.titleColor || theme.white,
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'left'
      }}>
        {props.children}
      </Text>

      <View style={{
        marginVertical: 16,
        height: 3,
        width: width / 4,
        backgroundColor: '#0F5834'
      }} />
    </View>
  )
}

render.propTypes = {
  children: React.PropTypes.any
}