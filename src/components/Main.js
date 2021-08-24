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
          <Row className='justify-content-center' style={{marginTop:"-70px"}}>
            <Card className="mt-4 text-center" style={{width:'70%'}}>
              <Card.Body>
                <Card.Title>
                  <h1 className='text-capitalize text-center mt-5 mb-5' style={{color:"#FAA6A0",fontFamily: 'Permanent Marker',fontWeight:'900',fontSize:'40px'}}>Join the effort today become an animal advocate!</h1>
                </Card.Title>
                <Card.Text>
                  <p style={{fontSize:"23px" ,fontFamily:'Bree Serif'}}>Around the world, individuals, groups and organizations are
                  making a difference for animals and the planet every day. From
                  saving a companion animal from cruelty, to saving an entire
                  species from extinction, simple choices and actions that you
                  can make will help save animals and the earth.</p>
                </Card.Text>
                
              </Card.Body>
            </Card>
          </Row>

          <Row className="mt-4 mb-3 justify-content-center">
            <h1 className='text-capitalize  text-center shadow-lg  mt-5 ' style={{color:"#885A6B",fontFamily: 'Permanent Marker',fontWeight:'900',fontSize:'60px'}}>Meet some Pets</h1>
            <hr/>
          </Row>
          <Row md="auto" className="justify-content-center mb-3">
            <Animal />
          </Row>
          <Row></Row>

          <Row className="mt-4 justify-content-center mb-3">
            <h1 className='text-capitalize  text-center shadow-lg  mt-5 mb-3 ' style={{color:"#885A6B",fontFamily: 'Permanent Marker',fontWeight:'900',fontSize:'60px'}}> Animals are beautiful </h1>
            <Col className='mt-4 mb-4'>
              <Dogfact />
            </Col>
            <Col className='mt-4  mb-4'>
              <CatFact />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Main;
