'use strict'
import react from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Carousel, Container, Row, Col } from 'react-bootstrap'
import leopard from '../images/amur-leopard-800x400.jpg'
import gorilla from '../images/cross-river-gorilla-800x400.jpg'
import elephants from "../images/african-forest-elephant-800x400.jpg"
import angutan from "../images/bornean-angutan-800x400.jpg"
import rhino from "../images/black_rhino_800x.jpg"


class Hero extends react.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <>
        <Container fluid >
          <Row>
            <Col>
              <Carousel style={{width:"90%",marginLeft:"5%"}}>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={leopard}
                    alt="First slide"
                    height={"50%"}
                  />
                  <Carousel.Caption>
                    <h5></h5>
                    <p></p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={gorilla}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h5></h5>
                    <p></p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={elephants}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h5></h5>
                    <p></p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={angutan}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h5></h5>
                    <p></p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={rhino}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h5></h5>
                    <p></p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
          <Row md="auto"></Row>
          <Row></Row>
        </Container>
      </>
    )
  }
}
export default Hero