import react from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card, Carousel } from "react-bootstrap";
import catFact from "./assets/cat.json";
import "./dogFact.css";

class Catfact extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      catFact: [],
    };
  }

  render() {
    return (
      <>
        <Container className="justify-content-center">
          <Carousel
            className="justify-content-center"
          >
            {catFact.map((fact, index) => {
              return (
                <Carousel.Item key={index}>
                  <Card
                  className="shadow p-3 mb-5 rounded border"
                  style={{
  
                    background: "#fce5e4",
                    fontFamily: "Permanent Marker",
                  }}
                  >
                    <Card.Img variant="top" src={fact.image} />
                    <Card.Body>
                      <Card.Title>Meaw! Meaw!</Card.Title>
                      <Card.Text>{fact.fact}</Card.Text>
                    </Card.Body>
                  </Card>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </Container>
      </>
    );
  }
}
export default Catfact;
