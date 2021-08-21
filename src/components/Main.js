import React, { Component } from "react";
import Hero from "./Hero";
import Animal from "./Animal";
import { Container, Row, Col } from "react-bootstrap";




class Main extends Component {
  render() {
    return (
      <>
      
        <Container fluid>
          <Row className="mb-5">
            <Hero />
          </Row>
          <Row className="mb-4 justify-content-center">
            <h1 className="text-center">
              Catchy Title About endangered animals
            </h1>
          </Row>
          <Row md="auto" className="justify-content-center">
            <Animal />
          </Row>
          <Row className="d-flex p-2 justify-content-center m-2 mt-5">
            <Col>
              <p>
                orem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </Col>
            <Col md="auto">
              <img src="https://via.placeholder.com/300x300/0000" alt="" opacity="0.5" />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Main;
