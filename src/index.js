import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';


import { reducers } from './reducers/index';
import App from './components/App/AppContainer';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './styles/main.scss';

let store = createStore(reducers);

ReactDOM.render(
 <Provider store={store}>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
   </Provider>,
  document.getElementById('app')
);
