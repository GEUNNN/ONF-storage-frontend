import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./Pages/Main";
import RecommendedSongs from "./Pages/RecommendedSongs";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={RecommendedSongs} />
      </Switch>
    </Router>
  );
}
