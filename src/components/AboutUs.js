import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import rhino from "./assets/rhino.png";
import "./aboutUs.css";
import Header from "../Header";
import Footer from "../Footer";
import renad from "./assets/renad.jpeg"
import thaer from "./assets/thaer.jpeg"
import anas from "./assets/anas.jpeg"

export class AboutUs extends Component {
  render() {
    return (
      <>
      <Header/>
        <Container className="mt-5 mb-6">
          <div class="container">
            <div class="row flex-center sm-no-flex">
              <div class="pull-right sm-no-float col-md-8">
                <ul class="team-members">
                  <li class="clearfix">
                    <div class="member-details">
                      <div>
                        <img
                          src={renad}
                          alt="Web Developer"
                        />
                        <div class="member-info">
                          <h3>Renad Khalafat</h3>
                          <p>Web Developer</p>
                        </div>
                      </div>
                    </div>

                    <div class="member-details">
                      <div>
                        <img
                          src={thaer}
                          alt="Web Developer"
                        />
                        <div class="member-info">
                          <h3>Thaer Jomhawi</h3>
                          <p>Web Developer</p>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li class="clearfix">
                    <div class="member-details">
                      <div>
                        <img
                          src={anas}
                          alt="Web Developer"
                        />
                        <div class="member-info">
                          <h3>Anas AbuSaif</h3>
                          <p>Web Developer</p>
                        </div>
                      </div>
                    </div>

                    <div class="member-details">
                      <div>
                        <img
                          src="https://via.placeholder.com/100.png/09f/fff"
                          alt="Web Developer"
                        />
                        <div class="member-info">
                          <h3>Walaa Mohammed</h3>
                          <p>Web Developer</p>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div class="pull-left col-md-4 sm-text-center">
                <div class="team-overview">
                  <h2>Meet The Team</h2>
                  <p>
                    <div>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Adipisci quae nesciunt officia! Autem, nam eum voluptatem,
                      esse voluptatibus deleniti tempora laboriosam sequi
                      pariatur, explicabo itaque. Fuga, deserunt? Repudiandae,
                      neque qui.
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>

       
          <Container className="" >
            <Row className="mt-5">
              <Col></Col>
              <Col>
                <h2>Our Vision</h2>
              </Col>
            </Row>
            <Row>
              <Col className="ml-5 ">
                <img src={rhino} alt="rhino" width="400px" />
              </Col>
              <Col className="mt-3">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Adipisci quae nesciunt officia! Autem, nam eum voluptatem,
                  esse voluptatibus deleniti tempora laboriosam sequi pariatur,
                  explicabo itaque. Fuga, deserunt? Repudiandae, neque qui.
                </p>
              </Col>
            </Row>
          </Container>
        <Footer/>
      </>
    );
  }
}

export default AboutUs;
