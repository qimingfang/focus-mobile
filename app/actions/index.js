export function changeView (name) {
  return {
    type: 'CHANGE_VIEW',
    payload: { view: name }
  }
}

export function push (route) {
  return {
    type: 'PUSH_ROUTE',
    payload: route,
  }
}

export function pop () {
  return {
    type: 'POP_ROUTE',
  }
}