import react from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Form, FloatingLabel, NumericInput, Button } from 'react-bootstrap'

class FormModal extends react.Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false,
      handleClose: false,
      filledForm: []
    }
  }
  storeData = (e) => {
    this.setState = ({
      filledForm: [
        e.target.type.value,
        e.target.name.value,
        e.target.age.value,
        e.target.picture.value,
        e.target.address.value,
        e.target.phone.value,
        e.target.comment.value
      ]
    })
  }


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
            <Form.Select id="type">
              <option>What animail is your pet?</option>
              <option>What animail is your pet?</option>
              <option>What animail is your pet?</option>
              <option>What animail is your pet?</option>
              <option>What animail is your pet?</option>
            </Form.Select>
            <FloatingLabel controlId="floatingTextarea" label="Pet Name" className="mb-3" id="name">
              <Form.Control as="textarea" placeholder="Enter your pet name" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingTextarea" label="Age in weeks" className="mb-3" id="age">
              <NumericInput min={0} value={0} />
            </FloatingLabel>
            <FloatingLabel controlId="floatingTextarea" label="Link to your pet's picture" className="mb-3" id="picture">
              <Form.Control as="textarea" placeholder="Enter a link to your pet's picture" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingTextarea" label="Address" className="mb-3" id="address">
              <Form.Control as="textarea" placeholder="Enter your address" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingTextarea" label="Phone number" className="mb-3" id="phone">
              <Form.Control as="textarea" placeholder="Enter your phone number" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingTextarea2" label="Comments" id="comment">
              <Form.Control
                as="textarea"
                placeholder="tell us something about your pet"
                style={{ height: '100px' }}
              />
            </FloatingLabel>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Discard
            </Button>
            <Button variant="primary" onClick={handleClose , (e)=>this.storeData(e)}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

      </>
    )
  }
}
export default FormModal