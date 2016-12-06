import React, { Component } from 'react'
import {
  Dimensions,
  View,
  Text,
  TouchableOpacity
} from 'react-native'

import {connect} from 'react-redux'
import {theme} from '../components'
import actions from '../actions'

const {width, height} = Dimensions.get('window')

class Popup extends Component {
  render () {
    if (!this.props.popup) {
      return null
    }

    console.log(this.props.popup)

    return <View style={{ position: 'absolute', 
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <View style={{
        position: 'absolute', 
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.6,
        backgroundColor: '#000'
      }} />
 
      <View style={{
        width: 0.8 * width,
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderRadius: 10
      }}>
        <View style={{ marginVertical: 10, borderBottomColor: theme.grey200, borderBottomWidth: 1 }}>
          <Text style={{
            marginVertical: 10,
            textAlign: 'center',
            fontSize: 24,
          }}>
            {this.props.popup.title}
          </Text>
        </View>
        <Text style={{
          padding: 8
        }}>
          {this.props.popup.content}
        </Text>

        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity 
            onPress={this.props.hidePopup}
            style={{
              flex: 1,
              backgroundColor: theme.primaryColor,
              margin: 6,
              borderColor: theme.primaryColor,
              borderWidth: 3,
              borderRadius: 6,
              padding: 11
            }}>
            <Text style={[styles.button, { fontWeight: 'bold', color: theme.white }]}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  }
}

// Code for 2 action buttons
// <View style={{ flexDirection: 'row' }}>
//   <TouchableOpacity style={{ flex: 1, padding: 20 }}>
//     <Text style={[styles.button]}>Cancel</Text>
//   </TouchableOpacity>
//   <TouchableOpacity style={{ flex: 1, backgroundColor: theme.primaryColor, margin: 6,
//     borderColor: theme.primaryColor,
//     borderWidth: 3, borderRadius: 6, padding: 11 }}>
//     <Text style={[styles.button, { fontWeight: 'bold', color: theme.white }]}>OK</Text>
//   </TouchableOpacity>
// </View>

const styles = {
  button: {
    textAlign: 'center'
  }
}

export default connect(
  state => ({
    popup: state.global.popup
  }),
  {
    hidePopup: actions.global.hidePopup
  }
)(Popup)