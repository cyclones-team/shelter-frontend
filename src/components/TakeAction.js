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
            <h1 className='text-capitalize  text-center shadow-lg  mt-5 mb-3 ' style={{color:"#885A6B",fontFamily: 'Permanent Marker',fontWeight:'900',fontSize:'60px'}}>
              Help an Animal and Adopt it
            </h1>
            <p className='text-capitalize  text-center mt-2 mb-3 ' style={{color:"#885A6B",fontFamily: 'Permanent Marker',fontWeight:'900',fontSize:'20px'}}>Here is a list of the available Pets ready for adoption </p>
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
