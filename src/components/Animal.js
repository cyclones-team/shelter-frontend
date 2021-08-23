import react from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import {  Card, Col } from "react-bootstrap";

let itemOne=[]
class Animal extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      endangeredData: [],
      itemOne:[],

    };
  }

  componentDidMount = async () => {
    let url = `${process.env.REACT_APP_SREVER_URL}/endangered`;
    axios(url)
      .then((axiosResults) => {
        this.setState({ endangeredData: axiosResults.data[0].endangeredAnimals });
      })
      .catch((err) => console.error(err));
      this.fillAnimal();
  };
  fillAnimal=()=>{
    this.setState({itemOne:this.state.endangeredData[0]})
    console.log(this.state.itemOne)
  };
  
  render() {
    
    return (
      <>
        {this.state.endangeredData.map((element,index) => {
          itemOne=element;
          console.log(itemOne)
          return (
   
              <Col className="mb-3" key={index}>
                <Card style={{ width: "25rem" }}>
                  <Card.Img variant="top" src={element.image_url} />
                  <Card.Body>
                    <Card.Title>{element.name}</Card.Title>
                    <Card.Text>Home: {element.home}</Card.Text>
                    <Card.Text>Description : {element.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>       
              
          );
        })}
      </>
    );
  }
}
export default Animal;
