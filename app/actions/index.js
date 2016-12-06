import * as user from './user'

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
  user
}