import react from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, Row, Col } from "react-bootstrap";
import PetForm from "./PetForm";
import { withAuth0 } from "@auth0/auth0-react";

let newPetArr = [];

class Charity extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      petArray: [],
      petName: "",
      petDescription: "",
      petType: "",
      petBreed: "",
      petPic: "",
      showModal: false,
    };
  }

  newPetName = (e) => this.setState({ petName: e.target.value });
  newPetDescription = (e) => this.setState({ petDescription: e.target.value });
  newPetType = (e) => this.setState({ petType: e.target.value });
  newPetBreed = (e) => this.setState({ petBreed: e.target.value });
  newPetPic = (e) => this.setState({ petPic: e.target.value });
  openModal = () => this.setState({ showModal: true });
  closeModal = () => this.setState({ showModal: false });

  addPetHandler = (e) => {
    e.preventDefault();

    let petData = {
      petName: this.state.petName,
      petDescription: this.state.petDescription,
      petType: this.state.petType,
      petBreed: this.state.petBreed,
      petPic: this.state.petPic,
    };

    newPetArr.push(petData);
    this.setState({
      showModal: false,
    });
  };

  recallPetHandler = (index) => {
    newPetArr = newPetArr.splice(index, 1);
  };

  render() {
    return (
      <>
        <Row>
          <Col className="justify-content-center m-4">
            <Button
              style={{
                background: "#885a6b",
                color: "#F2F2F2",
                fontFamily: "Balsamiq Sans, cursive",
              }}
              className="shadow border"
              width="50%"
              onClick={this.openModal}
            >
              Add Your Pet
            </Button>
          </Col>

          <PetForm
            show={this.state.showModal}
            handleClose={this.closeModal}
            newPetName={this.newPetName}
            newPetDescription={this.newPetDescription}
            newPetType={this.newPetType}
            newPetBreed={this.newPetBreed}
            addPetHandler={this.addPetHandler}
            newPetPic={this.newPetPic}
          />
        </Row>
        {newPetArr.length > 0 && (
          <>
            {" "}
            <Row className="mb-4 mt-2 justify-content-center">
              <h1 ClassName="success ">Your Added Pets </h1>
              {newPetArr.map((item, index) => {
                return (
                  <Col className="mb-4 justify-content-center">
                    <Card
                      className="shadow p-3 mb-5 rounded border"
                      style={{
                        width: "18rem",
                        background: "#fce5e4",
                        fontFamily: "Balsamiq Sans, cursive",
                      }}
                    >
                      <Card.Img variant="top" src={item.petPic} />
                      <Card.Body>
                        <Card.Title>{item.petName}</Card.Title>
                        <Card.Text>
                          {item.petType}: {item.petBreed}
                        </Card.Text>
                        <Card.Text>
                          <Button variant="link " onClick={this.handleShow}>
                            More Details ..
                          </Button>
                        </Card.Text>
                        <Button
                          onClick={this.recallPetHandler(index)}
                          style={{ background: "#885a6b", color: "#F2F2F2" }}
                          className="shadow border"
                        >
                          Recall Your Pet
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </>
        )}
      </>
    );
  }
}
export default withAuth0(Charity);