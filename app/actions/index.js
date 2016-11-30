export function changeView (name) {
  return {
    type: 'CHANGE_VIEW',
    payload: { view: name }
  }
}
