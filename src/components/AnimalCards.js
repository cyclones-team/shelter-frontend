import react from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import axios from 'axios';
import { Card, Col, Container, Row } from "react-bootstrap";
import Header from '../Header'
import Footer from '../Footer'


class OrganizationsCards extends react.Component {
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
        <Header />
        <p style={{ marginLeft: '5%', width: '30%', padding: '0.5%', border: '2px solid black', fontSize: '130%' }}>Title For Something</p>
        <Container>
          <p style={{ textAlign: 'center', padding: '3%', fontSize: '120%' }}>Charities you may help</p>
          <Row xs={1} md={2} className="g-4">
            {this.state.arr.map((element) => {
              return (
                <>
                  <Col className="mb-4">
                    <Card>
                      <Card.Img variant="top" src="holder.js/100px160" />
                      <Card.Body>
                        <Card.Title>{element.title}</Card.Title>
                        <Card.Text>
                         {element.description}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>

                </>
              );
            })}</Row>
        </Container>
        <Footer />
      </>
    );
  }
}
export default OrganizationsCards;