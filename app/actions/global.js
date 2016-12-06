
export function showPopup (title, content) {
  return {
    type: 'SHOW_POPUP',
    payload: {
      title,
      content
    }
  }
}

export function hidePopup () {
  return {
    type: 'HIDE_POPUP'
  }
}