import react from 'react'
import Home from './Home'
import About from './AboutUs'
import Profile from './Profile'
import Action from "./TakeAction"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { withAuth0 } from '@auth0/auth0-react';
class Main extends react.Component {
  render() {
    return (
      <>
        <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/profile" component={this.props.auth0.isAuthenticated ? Profile : Home} />
          <Route exact path="/action" component={this.props.auth0.isAuthenticated ? Action : Home} />
          </Switch>
        </Router>
      </>
    )
  }
}
export default withAuth0(Main)