import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { reducers } from './reducers/index'
import App from './views/App/AppContainer'

import configureStore from './stores/configureStore'

import './styles/main.scss'

export function bootstrapApplication () {
  const store = configureStore()
  startApplication(store)
}

function startApplication (store) {
  ReactDOM.render((
    <Provider store={store}>
      <App />
    </Provider>
  ), document.getElementById('app'))
}


bootstrapApplication()
