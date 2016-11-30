import Immutable from 'seamless-immutable'
import { reducer as form } from 'redux-form'

const initialNavigation = Immutable({
  viewStack: ['Schedule']
})

function navigation (state = initialNavigation, action) {
  switch (action.type) {
    case 'CHANGE_VIEW':
      return state.merge({
        viewStack: [action.payload.view]
      })
    default:
      return state
  }
}

export default {
  navigation,
  form
}
