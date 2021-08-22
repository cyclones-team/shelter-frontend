import React, { Component } from "react";
import { Container, Row, Col, Image, Card, ListGroup } from "react-bootstrap";
import Header from "../Header"
import Footer from "../Footer"
import { withAuth0 } from "@auth0/auth0-react";
export class Profile extends Component {
  render() {
    return (
      <>
      <Header />
        <Container fluid className="m-5 p-15 ">
          <Row className="mb-5 justify-content-center">
            <Col style={{ width: "20rem" }}>
              <Image
                src={this.props.auth0.user.picture}
                roundedCircle
              />
            </Col>
            <Col>
              <Card style={{ width: "20rem" }}>
                <Card.Header>Your information</Card.Header>
                <ListGroup variant="flush">
                  <ListGroup.Item>name: {this.props.auth0.user.name}</ListGroup.Item>
                  <ListGroup.Item>email: {this.props.auth0.user.email}</ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </Container>
        <Footer/>
      </>
    );
  }
}

export default withAuth0(Profile);
