import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { withAuth0 } from '@auth0/auth0-react';
import Login from './components/LoginButton'
import Logout from './components/LogoutButton'
import { Nav, Navbar, Container, Col, Row } from "react-bootstrap";
import logo from './components/assets/logo2.png'
import { Link } from "react-router-dom"
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <>
        <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: "#31572C" }}>
          <Container>
            <Navbar.Brand style={{ fontSize: "300%", color: "#ECF39E" }}>
              <Row>
                <Col>  <img
                  src={logo}
                  width="70"
                  height="70"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                /></Col>

                <Col>ZOOTOPIA</Col>
              </Row>

            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto" >
                <Nav.Link><Link to="/" className="navlink">Home</Link></Nav.Link>
                <Nav.Link><Link to="/about" className="navlink">About Us</Link></Nav.Link>

              </Nav>
              <Nav>
                {this.props.auth0.isAuthenticated && <Nav.Link ><Link to="/profile" className="navlink">Profile</Link></Nav.Link>}
                {this.props.auth0.isAuthenticated && <Nav.Link eventKey={2}>
                  <Link to="/action" className="navlink">Take Action</Link>
                </Nav.Link>}
                {this.props.auth0.isAuthenticated ? <Logout /> : <Login />}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default withAuth0(Header);




