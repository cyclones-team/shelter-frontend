import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";
class PetForm extends Component {
  render() {
    const {
      show,
      handleClose,
      newPetName,
      newPetType,
      newPetDescription,
      newPetBreed,
      newPetPic,
      addPetHandler,
    } = this.props;

    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Please fill the information below </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(e) => addPetHandler(e)}>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Pet Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your Pet name "
                onChange={newPetName}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Pet Description</Form.Label>
              <Form.Control
                onChange={newPetDescription}
                type="text"
                placeholder="Enter brief description for your Pet"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>
                <p>Pet Type (Cat,Dog,...)</p>
              </Form.Label>
              <Form.Control
                onChange={newPetType}
                type="text"
                placeholder="Enter the Pet type"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Add a Picture url of your Pet </Form.Label>
              <Form.Control
                onChange={newPetPic}
                type="text"
                placeholder="Enter your website url"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Your Pet Breed</Form.Label>
              <Form.Control
                onChange={newPetBreed}
                type="text"
                placeholder="Enter Your Pet Breed"
              />
            </Form.Group>
            <Button className="shadow" variant="success " type="submit">
              Add Pet
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }
}

export default PetForm;
