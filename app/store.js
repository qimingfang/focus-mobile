import {AsyncStorage} from 'react-native'
import {compose, createStore, applyMiddleware, combineReducers} from 'redux'
import {persistStore, autoRehydrate} from 'redux-persist'
import devTools from 'remote-redux-devtools'
import {createNavigationEnabledStore} from '@exponent/ex-navigation'

import reducers from './reducers'

const logger = store => next => action => {
  console.log(action, store.getState())
  return next(action)
}

const createStoreWithNavigation = createNavigationEnabledStore({
  createStore,
  navigationStateKey: 'navigation',
})

const rootReducer = combineReducers(reducers)
const middleware = [logger, autoRehydrate() ]
const store = createStoreWithNavigation(rootReducer, {}, compose(
  applyMiddleware(logger),
  autoRehydrate(),
  devTools()
))

persistStore(store, {
  blacklist: ['navigation', 'form'],
  storage: AsyncStorage
})

export default store
