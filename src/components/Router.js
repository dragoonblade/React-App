import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./Login";
import Certification from "./Certification";
import Dashboard from "./Dashboard";
import NotFound from "./NotFound";
import sampleUsers from "../sampleUsers";

class Router extends React.Component {
  state = {
    loggedIn: "119631",
    users: {}
  };

  componentDidMount = () => {
    this.setState({ users: sampleUsers });
  };

  getUser = key => this.state.users[key];

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Login
                loggedIn={{
                  nominated: "self",
                  firstName: "Julio",
                  lastName: "Barter"
                }}
              />
            )}
          />
          <Route
            exact
            path="/certification-details/:userId"
            render={() => (
              <Certification
                loggedIn={{
                  status: "Incomplete",
                  nominated: "self",
                  firstName: "Julio",
                  lastName: "Barter"
                }}
              />
            )}
          />
          <Route
            exact
            path="/nominee-dashboard"
            render={() => (
              <Dashboard loggedIn={this.state.users[this.state.loggedIn]} />
            )}
          />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
