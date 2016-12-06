import React, { Component } from 'react'
import { Text } from 'react-native'

import store from './store'
import { Provider } from 'react-redux'

import Home from './views/Home'
import Loading from './views/Loading'
import Login from './views/Login'

import Popup from './overlays/Popup'

import {
  createRouter,
  NavigationProvider,
  StackNavigation,
  NavigationContext
} from '@exponent/ex-navigation'

export const Router = createRouter(() => ({
  HOME: () => Home,
  LOADING: () => Loading,
  LOGIN: () => Login,
}));

const context = new NavigationContext({ store, router: Router })

export function getNavigator () {
  return context.getNavigatorByUID('main')
}

export function popRoute () {
  return getNavigator().pop()
}

// @return void
export function pushRoute (route) {
  getNavigator().push(Router.getRoute(route))
}

// @return void
export function resetRoute (...routes) {
  pushRoute(first(routes))
  getNavigator().immediatelyResetStack(routes.map(route => Router.getRoute(route)))
}

export function currentRoute () {
  return context.getFocusedRoute()
}

export default class extends Component {
  render () {
    return (
      <Provider store={store}>
        <NavigationProvider context={context}>
          <StackNavigation 
            navigatorUID="main"
            initialRoute={Router.getRoute('LOADING')} />
          <Popup />
        </NavigationProvider>
      </Provider>
    )
  }
}