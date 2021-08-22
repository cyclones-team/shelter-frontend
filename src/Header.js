import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { withAuth0 } from '@auth0/auth0-react';
import Login from './components/LoginButton'
import Logout from './components/LogoutButton'
import logo from './components/assets/logo.jpeg'
class Header extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <Navbar className="mb-3" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">
              <img
                alt=""
                src={logo}
                width="30"
                height="30"
                opacity="0.5"
                className="d-inline-block align-top"
              />{" "}
              ZOOTOPIA
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="mr-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About Us</Nav.Link>
                <Nav.Link href="/action">Take Action</Nav.Link>
                <Nav.Link href="/profile">Profile</Nav.Link> 
                {this.props.auth0.isAuthenticated ? <Logout/>:<Login/>}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default withAuth0(Header);
