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
            render={()=><Login loggedIn={this.state.loggedIn}/>}
          />
          <Route
            exact
            path="/certification-details/:userId"
            render={()=><Certification loggedIn={this.state.loggedIn}/>}
          />
          <Route
            exact
            path="/nominee-dashboard"
            render={()=><Dashboard loggedIn={this.state.loggedIn}/>}
          />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
