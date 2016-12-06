const initialState = {
  popup: null
}

export default function (state = initialState, action) {
  switch (action.type) {
    case 'SHOW_POPUP':
      return Object.assign({}, state, {
        popup: action.payload
      })

    case 'HIDE_POPUP':
      return Object.assign({}, state, {
        popup: null
      })
    
    default:
      return state
  }
}
