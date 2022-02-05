import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RecommendedSongs from "./Pages/RecommendedSongs"

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={RecommendedSongs} />
      </Switch>
    </Router>
  );
}
