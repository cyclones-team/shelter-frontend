import react from "react";

import { Carousel, Container, Row } from "react-bootstrap";
class Hero extends react.Component {
  render() {
    return (
      <div>
        <Carousel style={{ width: "100%" }}>
          <Carousel.Item>
          <Carousel.Caption style={{marginBottom:"45%"}}>
              <h1 style={{ background: "#31572c71", display: "inline" }}>
                "The Greatest Threat to Our Planet Is The Belief That Someone
                Else Will Save It"
              </h1>
            </Carousel.Caption>
            <img
              className="d-block"
              src="https://img5.goodfon.com/wallpaper/nbig/6/9c/slon-slony-slonikha-slonenok-stado-stado-slonov-semeistvo-po.jpg"
              alt="First slide"
              style={{ width: "100%" }}
            />
            
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
export default Hero;
