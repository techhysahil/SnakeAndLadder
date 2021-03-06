import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { reducer as formReducer } from "redux-form";
import reduceReducers from 'reduce-reducers';

import start from './start';
import detail from './detail';
import home from './home';

const startdetailReducer = reduceReducers(start, detail);
// main reducers
export const reducers = combineReducers({
  routing: routerReducer,
  form: formReducer,

  home : home,
  players: startdetailReducer
});
