import React from 'react'
import { Dimensions, View, Text } from 'react-native'

const theme = require('./theme')
const {width} = Dimensions.get('window')

export default function render (props) {
  return (
    <View style={{ height: 64 }}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{
          color: props.titleColor || theme.white,
          fontSize: 24,
          fontWeight: 'bold',
          textAlign: 'center'
        }}>
          {props.children}
        </Text>
      </View>
      <View style={{ height: 3, width: width / 3, backgroundColor: '#0F5834' }} />
    </View>
  )
}

render.propTypes = {
  children: React.PropTypes.any
}