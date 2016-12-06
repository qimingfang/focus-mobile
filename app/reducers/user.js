const initialState = {
  goal: null
}

export default function (state = initialState, action) {
  switch (action.type) {
    case 'RESUME_SESSION':
      return Object.assign({}, state, action.payload)

    case 'SET_GOAL':
      return Object.assign({}, state, {
        goal: action.payload
      })
    
    case 'CLEAR_GOAL':
      return Object.assign({}, state, {
        goal: null
      })

    default:
      return state
  }
}