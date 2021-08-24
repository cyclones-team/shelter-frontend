import React, { Component } from "react";
import { Container } from "react-bootstrap";
import "./aboutUs.css";
import Header from "../Header";
import Footer from "../Footer";
import renad from "./assets/renad.jpeg"
import thaer from "./assets/thaer.jpeg"
import anas from "./assets/anas.jpeg"
import walaa from "./assets/walaaa.jpeg"

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
                          src={walaa}
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
                  <h2 className='text-capitalize mt-1 mb-3 ' 
                  style={{color:"#FAA6A0",fontFamily: 'Permanent Marker',fontWeight:'900',fontSize:'35px'}}>Team Cyclones Vision</h2>
                  <p>
                    <div style={{color:"#000",fontFamily: 'Permanent Marker',fontWeight:'500',fontSize:'20px'}}>
                    Rebuilding the structure of "everyone has the right to live" and proteting what needs protection from destructful habits that risks other lives and for selfish benefits. 
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>    
        <Footer/>
      </>
    );
  }
}

export default AboutUs;
