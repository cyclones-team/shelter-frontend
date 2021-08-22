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
          <Row className="mt-5">
            <Card style={{ width: "30rem" }}>
              <Card.Header>My List</Card.Header>
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p>
                    1. Lorem ipsum dolor 
                    2. sit amet, consectetur adipiscing
                   
                  </p>
                  <footer className="blockquote-footer">
                    Someone famous in{" "}
                    <cite title="Source Title">Source Title</cite>
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Row>
        </Container>
        <Footer/>
      </>
    );
  }
}

export default withAuth0(Profile);
