import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Navbar, Container, Nav } from "react-bootstrap";
import { withAuth0 } from '@auth0/auth0-react';
import Login from './components/LoginButton'
import Logout from './components/LogoutButton'
// import logo from './components/assets/logo.jpeg'
import { Link } from "react-router-dom"
class Header extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <nav>
          <ul>
            <Link to="/"><li>Home</li></Link>
            <Link to="/about"> <li>About Us</li></Link>
            {this.props.auth0.isAuthenticated && <Link to="/action"><li>Take Action</li></Link>}
            {this.props.auth0.isAuthenticated && <Link to="/profile"><li>Profile</li></Link>}
            {this.props.auth0.isAuthenticated ? <Logout /> : <Login />}
          </ul>
        </nav>

      </div>
    );
  }
}

export default withAuth0(Header);




