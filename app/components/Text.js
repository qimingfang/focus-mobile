import React from 'react'
import {Text} from 'react-native'

const MyText = ({children, style}) => {
  return (
    <Text style={[{ fontSize: 16, fontFamily: 'Avenir' }, style]}>
      { children }
    </Text>
  )
}

export default MyText