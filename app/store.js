import {AsyncStorage} from 'react-native'
import {compose, createStore, applyMiddleware, combineReducers} from 'redux'
import {persistStore, autoRehydrate} from 'redux-persist'
import devTools from 'remote-redux-devtools'
import {createNavigationEnabledStore} from '@exponent/ex-navigation'
import Amplitude from 'amplitude'

import reducers from './reducers'

export const amplitude = new Amplitude(
  __DEV__ ? '7632549e6f3f107293f027b47575c7c7' : '51cd65bd806c013e6ba77057a623b59f'
)

const logger = store => next => action => {
  console.log(action, store.getState())
  return next(action)
}

const trackEvents = store => next => action => {
  // skip the events with error
  if (action.error) {
    return next(action)
  }

  const {user} = store.getState()

  switch (action.type) {
    case 'LOGIN':
    case 'LOGOUT':
    case 'SET_GOAL':
    case 'CLEAR_GOAL':
      amplitude.track({
        userId: user.accountId,
        eventType: action.type,
        userProperties: user
      })
      break

    case 'TRACK':
      amplitude.track({
        userId: user.accountId,
        eventType: action.payload.eventType,
        eventProperties: action.payload.props || {},
        userProperties: user
      })
      .catch(err => console.log(err))

      break

    default:
      break
  }

  return next(action)
}


const createStoreWithNavigation = createNavigationEnabledStore({
  createStore,
  navigationStateKey: 'navigation',
})

const rootReducer = combineReducers(reducers)
const middlewares = [logger, trackEvents]
const store = createStoreWithNavigation(rootReducer, {}, compose(
  applyMiddleware(...middlewares),
  autoRehydrate(),
  devTools({
    realtime: __DEV__ // disable remote dev tools for production builds
  })
))

persistStore(store, {
  blacklist: ['navigation', 'form'],
  storage: AsyncStorage
})

export default store
