import react from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button, Form, FloatingLabel,NumericInput } from 'react-bootstrap'

class FormModal extends react.Component {
constructor(props){
  super(props);
this.state={
  show:false,
  handleClose:false
}
}


  render() {
    return (
      <>

        <Modal show={this.state.show} onHide={this.state.handleClose}>
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
            <Form.Select>
              <option>What animail is your pet?</option>
              <option>What animail is your pet?</option>
              <option>What animail is your pet?</option>
              <option>What animail is your pet?</option>
              <option>What animail is your pet?</option>
            </Form.Select>
            <FloatingLabel controlId="floatingTextarea" label="Pet Name" className="mb-3">
              <Form.Control as="textarea" placeholder="Enter your pet name" />
            </FloatingLabel>
            <NumericInput min={0} value={0}/>
            <FloatingLabel controlId="floatingTextarea" label="Link to your pet's picture" className="mb-3">
              <Form.Control as="textarea" placeholder="Enter a link to your pet's picture" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingTextarea" label="Address" className="mb-3">
              <Form.Control as="textarea" placeholder="Enter your address" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingTextarea" label="Phone number" className="mb-3">
              <Form.Control as="textarea" placeholder="Enter your phone number" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingTextarea2" label="Comments">
              <Form.Control
                as="textarea"
                placeholder="tell us something about your pet"
                style={{ height: '100px' }}
              />
            </FloatingLabel>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Discard
            </Button>
          </Modal.Footer>
        </Modal>

      </>
    )
  }
}
export default FormModal