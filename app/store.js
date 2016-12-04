import { createStore, applyMiddleware, combineReducers } from 'redux'
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
export default createStoreWithNavigation(rootReducer, {}, applyMiddleware(logger))
