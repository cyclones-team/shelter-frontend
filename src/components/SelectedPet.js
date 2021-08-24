import React, { Component } from "react";
import { Modal } from "react-bootstrap/";

export class SelectedPet extends Component {
  render() {
    const {
      breed,
      gender,
      size,
      age,
      title,
      imageUrl,
      description,
      handleClose,
      show,
    } = this.props;
    return (
      <div>
        <Modal  style={{ fontFamily: 'Balsamiq Sans, cursive' }} show={show} onHide={handleClose}>
          <Modal.Header style={{ background: "#fce5e4"}} closeButton>
            <Modal.Title >{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ background: "#fce5e4"}}>
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
            <p>Breed: {breed}</p>
            <p>Gender: {gender}</p>
            <p>Size: {size}</p>
            <p> Age: {age}</p>
          </Modal.Body>
          <Modal.Footer style={{ background: "#fce5e4"}}>{description}</Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default SelectedPet;
