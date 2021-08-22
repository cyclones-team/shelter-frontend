import react from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel, Button } from "react-bootstrap";

class Charity extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      charityArray: [],
    };
  }
  componentDidMount = async () => {
    this.getCharities();
  };

  getCharities =async () => {
    let url = `${process.env.REACT_APP_SREVER_URL}/charity`;
    console.log(url);
    axios(url)
      .then((axiosResults) => {
        if (axiosResults.data[0].charities) {
          this.setState({ charityArray: axiosResults.data[0].charities });
        }
      })
      .catch((err) => console.error(err));
    console.log(this.state.charityArray);
  }
  render() {
    return (
      <>
      <h1 className='text-center'>Animals charities</h1>
        <Carousel style={{ width: "83%", margin: "auto" }}>
          {
            this.state.charityArray.map((item, index) => {
              return (
                <Carousel.Item key={index} >
                  <img
                    className="d-block w-100"
                    src="https://i.pinimg.com/originals/15/47/aa/1547aa8f54dd1fb3694abee485c3269a.jpg"
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <small>{item.address}</small><br />

                    < img src={item.logo} alt='...' /><br />
                    <Button
                      className='m-3'
                      variant='outline-light '
                      href={item.url}
                      target="_blank"
                    >
                      Show more
                    </Button>
                  </Carousel.Caption>
                </Carousel.Item>
              )
            })
          }

        </Carousel>
      </>
    );
  }
}
export default Charity;
