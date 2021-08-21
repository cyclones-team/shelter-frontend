import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { withAuth0 } from '@auth0/auth0-react';
import Login from './components/Login'
import Logout from './components/Logout'
import {Link,BrowserRouter} from "react-router-dom"
import {withRouter} from 'react-router';
class Header extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Navbar className="mb-3" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">
              <img
                alt=""
                src="/logo.svg"
                width="30"
                height="30"
                opacity="0.5"
                className="d-inline-block align-top"
              />{" "}
              React Bootstrap
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="mr-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link><Link to="/">Home</Link></Nav.Link>
                <Nav.Link><Link to="/about">About Us</Link></Nav.Link>
                {this.props.auth0.isAuthenticated ? <Nav.Link><Link to="/profile">Profile</Link></Nav.Link> : <Login />}
                {this.props.auth0.isAuthenticated && <Nav.Link><Link to="/action">Take Action</Link></Nav.Link>}
                {this.props.auth0.isAuthenticated && <Logout/>}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        </BrowserRouter>
      </div>
      
    );
  }
}

export default withAuth0(Header);
