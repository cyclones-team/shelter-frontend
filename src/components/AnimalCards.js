import react from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import axios from 'axios';
import { Card, Col, Row } from "react-bootstrap";
import SelectedPet from "./SelectedPet";
import axios from "axios";

class AnimalsCards extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [],
    };
  }

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
    console.log(url);
    axios(url)
      .then((axiosResults) => {
        if (axiosResults.data[0]) {
          this.setState({ arr: axiosResults.data[0] });
        }
      })
      .catch((err) => console.error(err));
    console.log(this.state.charityArray);
  };
  render() {
    return (
      <>
        <Row xs={1} md={2} className="g-4">
          {this.state.arr.map((element, index) => {
            return (
              <Col className="mb-4" key={index}>
                <Card>
                  <Card.Img
                    variant="top"
                    src="https://img.favpng.com/13/0/13/cat-computer-icons-user-profile-avatar-png-favpng-0aXfSAjB7FwDVpeuUDXvWRLzd.jpg"
                    onClick={this.handleShow}
                  />
                  <Card.Body>
                    <Card.Title>Name:{element.name}</Card.Title>
                    <Card.Text>Description: {element.description}</Card.Text>
                  </Card.Body>
                </Card>

                <SelectedPet
                  title={element.name}
                  imageUrl="https://img.favpng.com/13/0/13/cat-computer-icons-user-profile-avatar-png-favpng-0aXfSAjB7FwDVpeuUDXvWRLzd.jpg"
                  description={element.description}
                  handleClose={this.handleClose}
                  show={this.state.showModal}
                />
              </Col>
            );
          })}
        </Row>
      </>
    );
  }
}
export default AnimalsCards;
