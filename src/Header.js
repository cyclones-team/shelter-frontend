import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { withAuth0 } from "@auth0/auth0-react";
import Login from "./components/LoginButton";
import Logout from "./components/LogoutButton";
import { Nav, Navbar, Container, Col } from "react-bootstrap";
import logo from "./components/assets/logo2.png";
import { Link } from "react-router-dom";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <>
        <Navbar
          className="shadow border-bottom"
          sticky="top"
          collapseOnSelect
          expand="lg"
          style={{ backgroundColor: "#FAA6A0", height: "90px" }}
        >
          <Container>
            <Navbar.Brand>
              
                <Col>
                  
                  <img
                    src={logo}
                    width="70px"
                    height="70px"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                  />
                </Col>

                {/* <Col>ZOOTOPIA</Col> */}
              
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto" style={{ fontSize: "120%", color: "#F2F2F2" }}>
                <Nav.Link>
                  <Link to="/" className="navlink shadow border p-1 rounded" style={{ backgroundColor: "#FAA6A0"  }}>
                    Home
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/about" className="navlink shadow border p-1 rounded" style={{ backgroundColor: "#FAA6A0"  }}>
                    About Us
                  </Link>
                </Nav.Link>
                {this.props.auth0.isAuthenticated && (
                  <Nav.Link>
                    <Link
                      to="/profile"
                      className="navlink shadow border p-1 rounded "
                      style={{ backgroundColor: "#FAA6A0"  }}
                    >
                      Profile
                    </Link>
                  </Nav.Link>
                )}
                {this.props.auth0.isAuthenticated && (
                  <Nav.Link eventKey={2}>
                    <Link
                      to="/action"
                      className="navlink shadow border p-1 rounded "
                      style={{ backgroundColor: "#FAA6A0"  }}
                    >
                      Take Action
                    </Link>
                  </Nav.Link>
                )}
               
              </Nav>
              <Nav> {this.props.auth0.isAuthenticated ? <Logout /> : <Login />}</Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default withAuth0(Header);
