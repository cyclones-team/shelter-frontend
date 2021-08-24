import react from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Col, Button, Row } from "react-bootstrap";
import AdobtForm from "./AdobtForm";
import SelectedPet from "./SelectedPet";
import axios from "axios";
import { withAuth0 } from "@auth0/auth0-react";
import AddYourPet from "./AddYourPet";

class AnimalsCards extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [],
      showModal: false,
      adobtModal: false,
      infoModal: {},
    };
  }

  submitHandler = (e) => {
    e.preventDefault();
  };

  handleAdobtShow = () => {
    this.setState({ adobtModal: true });
  };

  handleAdobtClose = () => {
    this.setState({ adobtModal: false });
  };

  handleShow = (element) => {
    this.setState({ showModal: true });
    this.setState({ infoModal: element });

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
          this.setState({ arr: axiosResults.data[0].animals });
        }
        }
      )
      .catch((err) => console.error(err));
  };
  render() {
    return (
      <>
        {this.state.arr.map((element, index) => {


          return (

            <>
              <Col className="mb-4" key={index}>
                <Card
                  className="shadow p-3 mb-5 bg-white rounded border border-success "
                  style={{ width: "18rem" }}
                >
                  <Card.Img variant="top" src={element.picture} height="250px" />
                  <Card.Body>
                    <Card.Title>{element.name}</Card.Title>
                    <Card.Text>
                      {element.type}: {element.breeds}
                    </Card.Text>
                    <Card.Text>
                      <Button
                        variant="link "
                        onClick={() => this.handleShow(element)}
                      >
                        More Details ..
                      </Button>
                    </Card.Text>

                    <Button
                      className="shadow"
                      variant="success "
                      onClick={this.handleAdobtShow}
                    >
                      Adopt this One
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <AdobtForm
                show={this.state.adobtModal}
                handleAdobtClose={this.handleAdobtClose}
                submitHandler={this.submitHandler}
              />
            </>
          );
        })}



        {this.state.showModal && <SelectedPet
          title={this.state.infoModal.name}
          imageUrl={this.state.infoModal.picture}
          breed={this.state.infoModal.breeds}
          gender={this.state.infoModal.gender}
          size={this.state.infoModal.size}
          age={this.state.infoModal.age}
          description={this.state.infoModal.description}
          handleClose={this.handleClose}
          show={this.state.showModal}
        />}


        <Row>
          <AddYourPet />
        </Row>
      </>
    );
  }
}
export default withAuth0(AnimalsCards);
