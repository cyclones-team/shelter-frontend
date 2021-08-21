import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { withAuth0 } from '@auth0/auth0-react';
import Login from './components/Login'
import Logout from './components/Logout'
class Header extends Component {
  render() {
    return (
      <div>
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
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Take Action</Nav.Link>
                <Nav.Link href="#action2">About Us</Nav.Link>
                {this.props.auth0.isAuthenticated ? <Nav.Link href="#action2">Profile</Nav.Link> : <Login />}
                {this.props.auth0.isAuthenticated && <Logout/>}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default withAuth0(Header);
