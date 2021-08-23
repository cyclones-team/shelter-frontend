import React, { Component } from "react";
import Hero from "./Hero";
import Animal from "./Animal";
import { Card, Col, Container, Row } from "react-bootstrap";
import Dogfact from "./Dogfact";
import CatFact from "./CatFact";
import "./Main.css";

class Main extends Component {
  render() {
    return (
      <>
        <Hero />
        <Container fluid>
          <Row>
            <Card className="mt-4 text-center">
              <Card.Body>
                <Card.Title>
                  <h1>Join the effort today; become an animal advocate!</h1>
                </Card.Title>
                <Card.Text>
                  <p style={{fontSize:"25px"}}>Around the world, individuals, groups and organizations are
                  making a difference for animals and the planet every day. From
                  saving a companion animal from cruelty, to saving an entire
                  species from extinction, simple choices and actions that you
                  can make will help save animals and the earth.</p>
                </Card.Text>
                
              </Card.Body>
            </Card>
          </Row>

          <Row className="mt-4 mb-4 justify-content-center">
            <h1 className="text-center">Endangered animals</h1>
          </Row>
          <Row md="auto" className="justify-content-center mb-3">
            <Animal />
          </Row>
          <Row></Row>

          <Row className="mt-4 justify-content-center text-center mb-5">
            <h1 className=" mb-4"> Animals are beautiful </h1>

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
