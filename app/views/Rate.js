import React, {PropTypes} from 'react'
import {
  Text,
  TouchableOpacity
} from '../components'

import {connect} from 'react-redux'
import * as actions from '../actions'

class Rate extends React.Component {
  render () {
    return <TouchableOpacity
      onPress={() => this.props.changeView('Schedule')}
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Rate</Text>
    </TouchableOpacity>
  }
}

Rate.propTypes = {
  changeView: PropTypes.func.isRequired
}

export default Object.assign(connect(
  state => ({}),
  {
    changeView: actions.changeView
  }
)(Rate), { __name: 'Rate' })
