import React, { Component } from "react";
import { Modal } from "react-bootstrap/";

export class SelectedPet extends Component {
  
  render() {
    const { title, imageUrl, description, handleClose, show } = this.props;
    return (
      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              className="imgModal"
              src={imageUrl}
              alt={title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Modal.Body>
          <Modal.Footer>{description}</Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default SelectedPet;