import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./Login";
import Certification from "./Certification";
import Dashboard from "./Dashboard";
import NotFound from "./NotFound";

class Router extends React.Component {
  state = {
    loggedIn: {},
    users: {}
  };
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            component={Login}
            loggedIn={this.state.loggedIn}
          />
          <Route
            exact
            path="/certification-details/:userId"
            component={Certification}
            loggedIn={this.state.loggedIn}
          />
          <Route
            exact
            path="/nominee-dashboard"
            component={Dashboard}
            loggedIn={this.state.loggedIn}
          />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
