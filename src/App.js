import react from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutUs from "./components/AboutUs";
import { withAuth0 } from "@auth0/auth0-react";
import TakeAction from "./components/TakeAction";
import Profile from "./components/Profile";
import Homepage from "./components/Homepage";
import IsLoading from './components/isLoaded';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends react.Component {
  render() {
    return (
      <>
        <Router>
          <IsLoading>
          <Switch>
            <Route path="/" exact>
              <Homepage />
            </Route>
            <Route path="/about">
              <AboutUs />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path='/action'>
              <TakeAction />
            </Route>
            <Route path="/action">
              <TakeAction />
            </Route>
          </Switch>
          </IsLoading>
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
