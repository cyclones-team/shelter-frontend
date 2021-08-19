import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav , Container} from 'react-bootstrap';
 class Header extends Component {
    render() {
        return (
            <div>
   <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Home</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Profile</Nav.Link>
      <Nav.Link href="#features">About us</Nav.Link>
      <Nav.Link href="#pricing">Take action</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
            </div>
        )
    }
}

export default Header
