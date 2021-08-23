import react from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import axios from 'axios';


import { Card, Col,Button,Row } from "react-bootstrap";
import AdobtForm from "./AdobtForm";


import SelectedPet from "./SelectedPet";
import axios from "axios";
import petPic from "./assets/petReplace.png";
import AddYourPet from "./AddYourPet";

class AnimalsCards extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [],
      adobtModal: false
    };
  }

  submitHandler = (e) => {
    e.preventDefault();

  }


  handleAdobtShow = () => {
    this.setState({ adobtModal: true });
  };

  handleAdobtClose = () => {
    this.setState({ adobtModal: false });
  };


  handleShow = () => {
    this.setState({ showModal: true });
  };

  handleClose = () => {
    this.setState({ showModal: false });
  };
  componentDidMount = async () => {
    this.getAnimals();
  };

  getAnimals = async () => {
    let url = `${process.env.REACT_APP_SREVER_URL}/adopte`;

    axios(url)
      .then((axiosResults) => {
        if (axiosResults.data[0]) {
          this.setState({ arr: axiosResults.data[0] });
          console.log(axiosResults.data[0])
        }
      })
      .catch((err) => console.error(err));

  };
  render() {
    return (
      <>
        {this.state.arr.map((element, index) => {

          <AdobtForm show={this.state.adobtModal}
            handleAdobtClose={this.handleAdobtClose}
            submitHandler={this.submitHandler} />

          return (
            <Col className="mb-4" key={index}>
              <Card
                className="shadow p-3 mb-5 bg-white rounded border border-success "
                style={{ width: "18rem" }}
                
              >
                <Card.Img variant="top" src={petPic} />
                <Card.Body>
                  <Card.Title>{element.name}</Card.Title>
                  <Card.Text>


                    {element.type}: {element.breeds.primary}
                  </Card.Text>
                  <Card.Text>

                    <Button variant="link " onClick={this.handleShow}>More Details ..</Button>
                  </Card.Text>
                  <Button className="shadow" variant="success " onClick={this.handleAdobtShow}>Adopt this One</Button>

                </Card.Body>
              </Card>

              <SelectedPet
                title={element.name}
                imageUrl={petPic}
                description={element.description}
                handleClose={this.handleClose}
                show={this.state.showModal}
              />
            </Col>

          );
        })}

        <Row><AddYourPet /></Row>


      </>
    );
  }
}
export default AnimalsCards;
