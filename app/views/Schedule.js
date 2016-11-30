import React, {PropTypes} from 'react'
import {
  View,
  Text,
  TouchableWithoutFeedback,
  AutogrowInput
} from '../components'

import {connect} from 'react-redux'
import {reduxForm} from 'redux-form'
import * as actions from '../actions'
import dismissKeyboard from 'dismissKeyboard'

class Schedule extends React.Component {
  render () {
    const {
      fields: {goal}
    } = this.props

    console.log(goal)

    return <View style={{flex: 1}}>
      <TouchableWithoutFeedback
        onPress={dismissKeyboard}
        style={{flex: 1}}>
          <View style={{ flex: 1, alignItems: 'center', marginHorizontal: 36, marginTop: 48, marginBottom: 24 }}>
            <Text style={{fontSize: 36, marginBottom: 12}}>What is your goal today?</Text>
            <AutogrowInput
              defaultHeight={50}
              style={{ fontSize: 20 }} {...goal} />
          </View>
      </TouchableWithoutFeedback>
    </View>
  }
}

Schedule.propTypes = {
  changeView: PropTypes.func.isRequired,
  fields: PropTypes.object.isRequired
}

const FIELDS = {
  goal: PropTypes.string
}

export default Object.assign(connect(
  state => ({}),
  {
    changeView: actions.changeView
  }
)(reduxForm({
  form: 'Schedule',
  fields: Object.keys(FIELDS)
})(Schedule)), { __name: 'Schedule' })
