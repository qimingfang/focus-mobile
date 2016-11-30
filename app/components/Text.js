import React from 'react'
import {Text as _Text} from 'react-native'

const Text = ({children, style, ...other}) => {
  return (
    <_Text style={[{ fontSize: 24, fontFamily: 'Avenir' }, style]} {...other}>
      {children}
    </_Text>
  )
}

export default Text
