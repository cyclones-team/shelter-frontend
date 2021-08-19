'use strict'
import react from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
// import axios from 'axios';
import { Card, ListGroupItem, ListGroup } from 'react-bootstrap'

class Animal extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: []
    }
  }





  render() {
    return (
      <>
        {
          this.state.arr.forEach(element => {
            return (
              <>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={element.imgSrc} />
                  <Card.Body>
                    <Card.Title>{element.animalName}</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>Cras justo odio</ListGroupItem>
                    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                    <ListGroupItem>Vestibulum at eros</ListGroupItem>
                  </ListGroup>
                  <Card.Body>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                  </Card.Body>
                </Card>
              </>
            )
          }
          )
        }
      </>
    )
  }


}
export default Animal