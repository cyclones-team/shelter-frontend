import React, { Component } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
class CharityForm extends Component {
    render() {
        const {
            show,
            handleClose,
            newName,
            newAddress,
            newDescription,
            newWeb,
            newLogo,
            addCharityHandler,
        } = this.props

        return (
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Charity Form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={(e)=>addCharityHandler(e)}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Charity Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your charity name "
                                onChange={newName} />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Charity Description</Form.Label>
                            <Form.Control onChange={newDescription} type="text" placeholder="Enter breif description for your charity" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Charity Adderss</Form.Label>
                            <Form.Control onChange={newAddress} type="text" placeholder="Enter the address" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Charity website url</Form.Label>
                            <Form.Control onChange={newWeb}
                                type="text" placeholder="Enter your website url" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Charity logo</Form.Label>
                            <Form.Control
                                onChange={newLogo}
                                type="text" placeholder="Enter the logo url" />
                            <Form.Text className="text-muted">
                                please enter the logo url
                            </Form.Text>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        )
    }
}

export default CharityForm;
