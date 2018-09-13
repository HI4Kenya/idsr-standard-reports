import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from './components/Home';
import MainPage from "./components/MainPage";
import NotFound from "./components/NotFound";
//import Dashboard from "./components/Dashboard";


export default () =>
  <Switch>
      <Route path="/" exact component={Home} />
    <Route path="/MainPage" exact component={MainPage} />

    { /* Finally, catch all unmatched routes */ }
    <Route component={NotFound} />
  </Switch>;