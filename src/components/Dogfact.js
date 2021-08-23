import react from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card, Row, Col, Carousel } from "react-bootstrap";
import dogFact from "./assets/dog.json";
import "./dogFact.css"

class Dogfact extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      dogFact: [],
    };
  }

  render() {
    return (
      <>
      <Container className="justify-content-center">
        <Carousel  className="justify-content-center" style={{ width: "30rem",margin:"auto" }}>
          {dogFact.map((fact, index) => {
            return (
              <Carousel.Item key={index}>
                <Card ClassName="shadow rounded border "  style={{ width: "30rem"}}>
                  <Card.Img  variant="top" src={fact.image}  />
                  <Card.Body>
                    <Card.Title>Wof! Wof!</Card.Title>
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
export default Dogfact;
