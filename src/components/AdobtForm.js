import React, { Component } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
class AdobtForm extends Component {
  render() {
    const {
      show,
      handleAdobtClose,
      newName,
      newAddress,
      newDescription,
      newPhoneNumber,
    } = this.props
  
    return (
      <Modal show={show} onHide={handleAdobtClose}>
        <Modal.Header closeButton>
          <Modal.Title>Please fill your information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(e) => this.props.submitHandler(e)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name "
                onChange={newName} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Email</Form.Label>
              <Form.Control onChange={newDescription} type="text" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Adderss</Form.Label>
              <Form.Control onChange={newAddress} type="text" placeholder="Enter your address" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Phone number</Form.Label>
              <Form.Control onChange={newPhoneNumber}
                type="text" placeholder="Enter your phone number" />
            </Form.Group>
            <Button className="shadow" variant="success" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    )
  }
}

export default AdobtForm;
