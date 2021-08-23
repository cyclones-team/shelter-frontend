import React, { Component } from "react";
import Hero from "./Hero";
import Animal from "./Animal";
import { Container, Row} from "react-bootstrap";
import Dogfact from "./Dogfact";
import './Main.css'
class Main extends Component {
  constructor(){
    super();
    this.state={
      facts:['Cats have an extra organ that allows them to taste scents on the air, which is why your cat stares at you with her mouth open from time to time']
    }
  }
  render() {
    return (
      <>
      <Hero />
        <Container fluid>
          <Row className="mb-5" style={{ height: '50vh' }}>
            <>
              

              <h2 className='text-center'>Some cat facts</h2>
              <div id="scroll-container">
               
                 {this.state.facts.map((element,index)=>(<> <div id="scroll-text"><h5 key={index}>{element}</h5></div></>))}
               
              </div>
            </>
          </Row>
          <Row className="mb-4 justify-content-center">
            <h1 className="text-center">
              Endangered animals
            </h1>
          </Row>
          <Row md="auto" className="justify-content-center">
            <Animal />
          </Row>
          <Row>
            <h2 className="text-center m-4">Some Dog Facts</h2>
          </Row>
          <Row className="mb-5">
            <Dogfact />
          </Row>
          
        </Container>
      </>
    );
  }
}

export default Main;
