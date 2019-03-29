import React from "react";
import { Switch, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";

import Home from '../pages/Home/Home';
import Profile from '../pages/Profile/Profile';

import history from "./history";

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/profile" component={Profile} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;