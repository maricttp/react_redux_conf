import { combineReducers } from "redux";
import { routerReducer as routing } from 'react-router-redux'
import number from './number';

const reducers = combineReducers({
  routing,
  number
});

export default reducers
