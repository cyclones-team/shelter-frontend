import react from "react";
import { Carousel} from "react-bootstrap";
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
              src="https://www.heartmath.org/assets/uploads/2010/04/HMI-Blog-Pets-Making-a-Connection-That%E2%80%99s-Healthy-for-Humans.jpg"
              alt="First slide"
              style={{ width: "100%",position:'relative' }}
            />
            
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
export default Hero;
