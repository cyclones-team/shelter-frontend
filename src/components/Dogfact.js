import react from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import dogFact from './dog.json';



class Dogfact extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
       dogFact:[]
        
    };
  }
  


  render() {
    return (
      <>
        <Carousel style={{ width: "83%", margin: "auto" }}>
            {dogFact.map((fact,index)=>{
                return(
                    <Carousel.Item key={index}>
                    <img
                      className="d-block w-100"
                      src={fact.image}
                      alt="First slide"
                    />
                    <Carousel.Caption>
                  
                      <p style={{fontSize:'25px',fontWeight:'600',color:'white'}}>{fact.fact}</p>
                    </Carousel.Caption>
                  </Carousel.Item>

                )
            })}
        </Carousel>
      </>
    );
  }
}
export default Dogfact;
