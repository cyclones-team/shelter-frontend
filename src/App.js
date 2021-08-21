
import react from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/Main";
import Footer from "./Footer";
import Header from "./Header";
import AboutUs from "./components/AboutUs";
import { withAuth0 } from "@auth0/auth0-react";
// import Charity from "./components/Charity";
// import { Container, Row } from "react-bootstrap";
import TakeAction from "./components/TakeAction";
import Profile from "./components/Profile";
// import Dogfact from "./components/Dogfact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"


class App extends react.Component {
  render() {
    return (

      <>
        <Router>
          <Switch>
            <Route path='/' exact>
              <Header />
              <Main />
              <Footer />
            </Route>
            <Route path='/about'>
              <AboutUs />
            </Route>
            <Route path='/profile'>
              <Profile />
            
            </Route>
            <Route path='/action'>
            <TakeAction />
              
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
