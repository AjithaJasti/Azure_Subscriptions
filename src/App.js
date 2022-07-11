// import { Route, Routes, Switch } from "react-router-dom";
// import LandingBody from "./LandingBody";
// import Header from "./Header";
import Create from "./Create";
import Login from "./Login";
import LandingBody from "./LandingBody";
import Subscriptions from "./Subscriptions";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";

function App() {
  let history = useHistory();
  return (
    <>
      <Router forceRefresh={true}>
        <Switch>
          <Route exact path="/" component={LandingBody} />
          <Route exact path="/create" component={Create} />
          <Route exact path="/login" component={Login} />
          <Route
            exact
            path="/subscriptions"
            component={() => <Subscriptions authorized={true} />}
          />
        </Switch>
      </Router>
    </>
  );
}

export default App;
