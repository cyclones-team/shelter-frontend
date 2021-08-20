import react from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import axios from 'axios';
import { Card, Col, Container, Row } from "react-bootstrap";
import Header from '../Header'
import Footer from '../Footer'


class AnimalCards extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [
        
        { name: "African Wild Dog Conservancy", description: "for protect African Wild Dog",Adress:"kenea" ,url:"https://stringfixer.com/ar/Kenya_Wildlife_Service#stringfixer"},
        { name: "International Union for the Conservation of Nature (IUCN)", description: "for protect Animals",Adress:"united Kingdom" ,url:"https://www.iucn.org/"},
        { name: "Fauna and Flora International", description: "Protecting mammals from animals" ,Adress:"South Africa",url:"https://stringfixer.com/ar/Fauna_and_Flora_International#stringfixer"},
        { name: "he World Society for the Protection of Animals", description: "for the Protection of Animals" ,Adress:"USA",url:"https://www.worldanimalprotection.org/"},
        { name: "wildforlife", description: "for protection elephants" ,Adress:"south africa",url:"https://wildfor.life/species/elephant"},
        { name: "In Defense of Animals", description: "international animal protection organization" ,Adress:"San Rafael",url:"https://www.idausa.org/"},
        { name: "World Wildlife Fund", description: "for helping animals",Adress:"keney,uk,usa",url:"https://www.sheldrickwildlifetrust.org/" },
        { name: "Gorilla Doctors", description: "saving gorilla" ,Adress:"africa",url:"https://www.gorilladoctors.org/"},
        { name: "Charles Darwin Foundation", description: "working to keep this incredible micro-climate as natural as possible",Adress:"Ecuador.",url:"https://www.darwinfoundation.org/en/" },
        { name: "Pandas International ", description: "providing them with vital medical equipment and supplies",Adress:"china",url:"https://www.pandasinternational.org/" },
        { name: "Sea Turtle foundation", description: "aiming to protect sea turtles through research",Adress:"australia",url:"https://www.seaturtlefoundation.org/" },
        { name: "Australian Koala Foundation", description: "helps people to become more “koala friendly”",Adress:"Austoralia",url:"https://www.savethekoala.com/" },
      
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
            {this.state.arr.map( element => (
              <Col>
                <Card>
                  <Card.Img variant="top" src="https://via.placeholder.com/410x160" />
                  <Card.Body>
                    <Card.Title>{element.name}</Card.Title>
                    <Card.Text>
                     {element.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
        <Footer />
      </>
    );
  }
}
export default AnimalCards;