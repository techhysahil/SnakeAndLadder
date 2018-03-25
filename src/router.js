import React from "react";
import { Router, Route, IndexRoute } from "react-router";
import { history } from "./store.js";
import App from "./components/App";
import Home from "./components/Home";
import Start from "./components/Start";
import Detail from "./components/Detail";
import NotFound from "./components/NotFound";

// build the router
const router = (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Start}/>
      <Route path="start" component={Start} />
      <Route path="detail" component={Detail} />
      <Route path="play" component={Home} />
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
);

// export
export { router };
