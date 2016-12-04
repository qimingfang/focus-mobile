import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'

const theme = require('./theme')

export default ({onPress, left, right, rightItem, leftTextStyle, style}) =>
  <TouchableOpacity onPress={onPress} style={[styles.item.base, style]}>
    <View style={styles.item.left}>
      <Text style={[styles.item.leftText, leftTextStyle]}>{left}</Text>
    </View>
    <View style={styles.item.right}>
      {right
        ? <Text style={styles.item.rightText}>{right}</Text>
        : null
      }

      {rightItem}
    </View>
  </TouchableOpacity>

const styles = {
  item: {
    base: {
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderColor: theme.primaryDark,
      padding: 12
    },
    left: {
      marginRight: 10,
      alignItems: 'flex-start'
    },
    right: {
      flex: 1,
      alignItems: 'flex-end'
    },
    leftText: {
      fontSize: 17,
      color: theme.white
    },
    rightText: {
      fontSize: 19,
      color: '#333'
    }
  },
  button: {
    base: {
      flex: 1,
      borderBottomWidth: 1,
      borderColor: theme.primaryDark,
      paddingTop: 12,
      paddingBottom: 12,
      paddingLeft: 18,
      paddingRight: 18
    },
    text: {
      fontSize: 17,
      color: theme.white,
      fontWeight: '600',
      textAlign: 'center'
    }
  }
}