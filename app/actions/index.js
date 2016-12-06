import * as user from './user'
import * as global from './global'

function track (eventType, props = {}) {
  return {
    type: 'TRACK',
    payload: {
      eventType,
      props
    }
  }
}

export default {
  track,
  global,
  user
}