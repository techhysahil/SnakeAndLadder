import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store.js";
// import { router } from "./router.js";

import App from "./components/App";

// render the main component
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
