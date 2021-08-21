import react from "react";
import "bootstrap/dist/css/bootstrap.min.css";
<<<<<<< HEAD
import axios from "axios";
=======
import axios from 'axios';
>>>>>>> d5224adff167a2c6705b95b216494451ad34d374
import { Card, Col } from "react-bootstrap";

class Animal extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      endangeredData: [],
    };
<<<<<<< HEAD
  }
  componentDidMount = async () => {
    let url = "http://localhost:3020/endangered";
=======
  };

  componentDidMount = async () => {
    let url = `${process.env.REACT_APP_SREVER_URL}/endangered`;
>>>>>>> d5224adff167a2c6705b95b216494451ad34d374
    console.log(url);
    axios(url)
      .then((axiosResults) => {
        console.log("i am working");
        console.log(axiosResults);
<<<<<<< HEAD

        this.setState({ endangeredData: axiosResults.data[0].endangeredAnimals });
      })
      .catch((err) => console.error(err));
  };
=======
>>>>>>> d5224adff167a2c6705b95b216494451ad34d374

        this.setState({ endangeredData: axiosResults.data[0].endangeredAnimals });
      })
      .catch((err) => console.error(err));
  };
  render() {
    return (
      <>
        {this.state.endangeredData.map((element) => {
          return (
            <>
              <Col className="mb-3">
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={element.image_url} />
                  <Card.Body>
                    <Card.Title>{element.name}</Card.Title>
                    <Card.Text>Home: {element.home}</Card.Text>
                    <Card.Text>Description : {element.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </>
          );
        })}
      </>
    );
  }
}
export default Animal;
