import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { reducer as formReducer } from "redux-form";

import start from './start';
import detail from './detail';

// main reducers
export const reducers = combineReducers({
  routing: routerReducer,
  form: formReducer,
  start: start,
  detail : detail
});
