const {Navigation} = require('react-native-navigation')

export function redirectToHome () : void {
  Navigation.startTabBasedApp({
    tabs: [
      {
        label: 'Goals',
        screen: 'HOME',
        icon: require('../../images/ic-goals.png')
      },
      {
        label: 'Settings',
        screen: 'SETTINGS',
        icon: require('../../images/ic-settings.png')
      },
    ]
  })
}

export function redirectToLogin () : void {
  Navigation.startSingleScreenApp({
    screen: {
      screen: 'LOGIN'
    }
  })
}