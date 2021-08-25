import react from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Col } from "react-bootstrap";

class Animal extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      endangeredData: [
        {
         
          "name": "Rhinelander rabbit",
          "picture": "https://petkeen.com/wp-content/uploads/2021/02/rhinelander-rabbit-eating_Beachbird_Shutterstock-e1620230866142.jpg",
          "description": "The fully arched rabbit breed is one of the most famous breeds, and is easily recognizable by the shape of its fully arched body, which gives it a confident appearance. These rabbits always look energetic and ready to go, standing ready on their toes"
        },
        {
            "name": "Domestic duck",
            "picture": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/how-to-keep-ducks-call-ducks-1615457181.jpg?resize=980:*",
            "description": "Domestic ducks are ducks that are raised for meat, eggs and down. Many ducks are also kept for show, as pets, or for their ornamental value."
        },
        {
            "name": "Sussex chicken",
            "picture": "https://upload.wikimedia.org/wikipedia/commons/5/54/Light_sussex_hen.jpg",
            "description": "The Sussex is a British breed of dual-purpose chicken, reared both for its meat and for its eggs. Eight colours are recognised for both standard-sized and bantam fowl. A breed association, the Sussex Breed Club, was organised in 1903"
        },
        {
            "name": "Budgie parrot",
            "picture": "https://st3.depositphotos.com/1752368/12954/i/950/depositphotos_129540366-stock-photo-the-colorful-budgies-are-on.jpg",
            "description": "The budgerigar, also known as the common parakeet or shell parakeet, is a small"
          
        },
        {
            "name": "Gray squirrel",
            "picture": "https://inaturalist-open-data.s3.amazonaws.com/photos/18767/large.jpg?1545403968",
            "description": "The eastern gray squirrel (Sciurus carolinensis), also known as the grey squirrel depending on region, is a tree squirrel in the genus Sciurus."
        },
        {
            "name": "Pony",
            "picture": "https://www.animals-wd.com/wp-content/uploads/2020/06/%D8%AD%D9%8A%D9%88%D8%A7%D9%86-%D8%A7%D9%84%D8%A8%D9%88%D9%86%D9%8A.jpg",
            "description": "A pony is a small horse. Depending on the context, a pony may be a horse that is under an approximate or exact height at the withers, or a small horse with a specific conformation and temperament"
        },
        {
            "name": "Hawksbill turtle",
            "picture": "https://wallpaperaccess.com/full/131138.jpg",
            "description": "Turtles are reptiles of the order Testudines, also known as Chelonia. They are characterized by a bony or cartilaginous shell, developed from their ribs, that acts as a shield. Testudines include both extant (living) and extinct species"
        },
        {
            "name": "Texe",
            "picture": "https://d1aeh7hxqn8xf9.cloudfront.net/wp-content/uploads/2019/12/FRFTS-Dec-MarysLittleLamb.jpg",
            "description": "It is a sheep breed originating from the island of Texel in the Netherlands. It is now a popular lean lamb in the United States, Australia, New Zealand, Uruguay and Europe."
        }
      ],
    };
  }

  render() {
    
    return (
      <>

        {this.state.endangeredData.map((element, index) => {
          const mydescription=element.description.split(' ').splice(0,20).join(' ')
          return (
            <Col className="mb-3" key={index}>
              <Card className="shadow p-3 mb-5 rounded border"
                  style={{
                    width: "20rem",
                    background: "#fce5e4",
                    fontFamily: "Permanent Marker",
                  }}>
                <Card.Img variant="top" src={element.picture} height="200rem"  />
                <Card.Body>
                  <Card.Title><h3>{element.name}</h3></Card.Title>
                  <Card.Text> <p style={{fontSize:'15px'}}>{mydescription}</p></Card.Text>
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
