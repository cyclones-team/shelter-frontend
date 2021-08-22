import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { withAuth0 } from '@auth0/auth0-react';
import Login from './components/LoginButton'
import Logout from './components/LogoutButton'
import logo from './components/assets/logo2.png'
import { Link } from "react-router-dom"
import "./Header.css"
class Header extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="header">
        <section className="logo">
          <img src={logo} alt="" className="imgheader"></img>
          <p className="plogo">ZOOTOPIA</p>
        </section>
        <section>
          <nav >
            <ul>
              <Link to="/" className="link"><li>Home</li></Link>
              <Link to="/about" className="link"> <li>About Us</li></Link>
              {this.props.auth0.isAuthenticated && <Link to="/action" className="link"><li>Take Action</li></Link>}
              {this.props.auth0.isAuthenticated && <Link to="/profile" className="link"><li>Profile</li></Link>}
              {this.props.auth0.isAuthenticated ? <Logout /> : <Login />}
            </ul>
          </nav>
        </section>

      </div>
    );
  }
}

export default withAuth0(Header);




