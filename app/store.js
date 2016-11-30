import { createStore, applyMiddleware, combineReducers } from 'redux'

import reducers from './reducers'

const logger = store => next => action => {
  console.log(action, store.getState())
  return next(action)
}

const rootReducer = combineReducers(reducers)
export default createStore(rootReducer, {}, applyMiddleware(logger))
