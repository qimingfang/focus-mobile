const initialState = {
  index: 0,
  routes: [
    {key: 'Pluto'},
    {key: 'Snoopy'},
    {key: 'Garfield'}
  ]
}

export default function(state = initialState, action) {
  const {
    index,
    routes,
  } = state

  switch (action.type) {
    case 'PUSH_ROUTE':
      const newState = Object.assign({}, state, {
        routes: [
          ...routes,
          action.payload,
        ],
        index: index + 1
      })

      console.log(newState)

      return newState

    case 'POP_ROUTE':
      return index > 0 ? Object.assign({}, state, {
        routes: routes.slice(0, routes.length - 1),
        index: index - 1
      }) : state

    default:
      return state
  }
}