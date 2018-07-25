import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducers from './../reducers/index'

import DevTools from '../helper/DevTools'

function apiMiddleware () {
  return next => action => {
    return next(action)
  }
}

const enhancer = compose(
  applyMiddleware(
    thunkMiddleware,
    apiMiddleware
  ),
  DevTools.instrument({maxAge: 10})
)

export default function configureStore (initialState) {
  return createStore(reducers, initialState, enhancer)
}
