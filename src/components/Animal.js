import react from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import axios from 'axios';
import { Card, Col } from "react-bootstrap";

class Animal extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [
        { title: "Lion", description: "King of the jungle" },
        { title: "tiger", description: "kill mawgli" },
        { title: "crocodile", description: "hard to kill" },
        { title: "Lion", description: "King of the jungle" },
        { title: "tiger", description: "kill mawgli" },
        { title: "crocodile", description: "hard to kill" },
        { title: "Lion", description: "King of the jungle" },
        { title: "tiger", description: "kill mawgli" },
        { title: "crocodile", description: "hard to kill" },
        { title: "Lion", description: "King of the jungle" },
        { title: "tiger", description: "kill mawgli" },
        { title: "crocodile", description: "hard to kill" },
      ],
    };
  }

  render() {
    return (
      <>
        {this.state.arr.map((element) => {
          return (
            <>
              <Col className="mb-3">
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src="https://via.placeholder.com/200.png/09f/fff"
                  />
                  <Card.Body>
                    <Card.Title>{element.title}</Card.Title>
                    <Card.Text>{element.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </>
          );
        })}
      </>
    );
  }
}
export default Animal;
