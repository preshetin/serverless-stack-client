import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import AppliedRoute from './components/AppliedRoute'
import Login from './containers/Login'
import Signup from "./containers/Signup";
import NewNote from './containers/NewNote'
import Notes from "./containers/Notes";
import Settings from "./containers/Settings";

const Routes = ({ appProps }) => {
  return (
    <Switch>
      <AppliedRoute appProps={appProps} path="/" exact component={Home} />
      <AppliedRoute appProps={appProps} path="/login" exact component={Login} />
      <AppliedRoute path="/signup" exact component={Signup} appProps={appProps} />
      <AppliedRoute path="/notes/new" exact component={NewNote} appProps={appProps} />
      <AppliedRoute path="/notes/:id" exact component={Notes} appProps={appProps} />
      <AppliedRoute path="/settings" exact component={Settings} appProps={appProps} />

      { /* Finally, catch all unmatched routes */ }
      <Route component={NotFound} />
    </Switch>
  );
}

export default Routes
