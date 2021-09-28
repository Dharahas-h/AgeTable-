import React from "react";
import { Switch, Route, Redirect } from "react-router";
import App from "./App";
import Products from "./components/products";
import Navbar from "./components/navbar";
import Other from "./components/other";
import Persons from "./components/persons";
import LoginForm from "./components/loginform";

class Main extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route path="/app/:id/:age" component={Persons} />
          <Route path="/app" component={App} />
          <Route path="/products" component={Products} />
          <Route path="/other" component={Other} />
          <Route path="/login" component={LoginForm} />
          <Route path="/not-found" render={() => <h3>Not Found</h3>} />
          <Redirect from="/" exact to="/app" />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    );
  }
}

export default Main;
