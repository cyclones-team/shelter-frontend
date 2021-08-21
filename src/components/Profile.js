import React, { Component } from "react";
import { Container, Row, Col, Image, Card, ListGroup } from "react-bootstrap";
export class Profile extends Component {
  render() {
    return (
      <>
      
        <Container fluid className="m-5 p-15 ">
          <Row className="mb-5 justify-content-center">
            <Col style={{ width: "20rem" }}>
              <Image
                src="https://via.placeholder.com/200.png/09f/fff"
                roundedCircle
              />
            </Col>
            <Col>
              <Card style={{ width: "20rem" }}>
                <Card.Header>Your information</Card.Header>
                <ListGroup variant="flush">
                  <ListGroup.Item>User Name: </ListGroup.Item>
                  <ListGroup.Item>e-mail: </ListGroup.Item>
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
        
      </>
    );
  }
}

export default Profile;
