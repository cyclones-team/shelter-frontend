import React, { Component } from "react";
import Hero from "./Hero";
import Animal from "./Animal";
import { Container, Row,Col} from "react-bootstrap";
import Dogfact from "./Dogfact";
import CatFact from "./CatFact";
import "./Main.css";

class Main extends Component {
  render() {
    return (
      <>
        <Hero />
        <Container fluid>
          <Row className="mt-4 mb-4 justify-content-center">
            <h1 className="text-center">Endangered animals</h1>
          </Row>
          <Row md="auto" className="justify-content-center mb-3">
            <Animal />
          </Row>
          <Row></Row>

          <Row className="mt-4 justify-content-center mb-5">
            <h1>Animals are beautiful </h1>

            <Col>
              <Dogfact />
            </Col>
            <Col>
              <CatFact />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Main;
