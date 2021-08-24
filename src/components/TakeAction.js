import React, { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";
import AnimalsCards from "./AnimalCards";
import { Container, Row } from "react-bootstrap";
import Charity from "./Charity";

export class TakeAction extends Component {
  render() {
    return (
      <>
        <Header />
        <Container fluid>
          <Row className="mb-4 ">
            <Charity />
          </Row>
          <Row style={{fontFamily:'Righteous, cursive',fontWeight:"900"}}>
            <h1 className=" text-capitalize text-center mt-5 mb-5">
              Help an Animal and Adopt it
            </h1>
            <p className="text-center  mb-5">Here is a list of the available Pets ready for adoption </p>
          </Row>
          <Row className="justify-content-center">
            <AnimalsCards />
          </Row>
        </Container>
        <Footer />
      </>
    );
  }
}

export default TakeAction;
