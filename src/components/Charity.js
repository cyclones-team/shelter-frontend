import react from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel, Button, Row, Col } from "react-bootstrap";
import CharityForm from './CharityForm';
import { withAuth0 } from '@auth0/auth0-react';
class Charity extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      charityArray: [],
      name: '',
      description: '',
      address: '',
      website: '',
      logo: '',
      showModal: false,
    };
  }
  componentDidUpdate = async () => {
    this.getCharities();
  };

  getCharities = async () => {
    let url = `${process.env.REACT_APP_SREVER_URL}/charity/${this.props.auth0.user.email}`;
    axios(url)
      .then((axiosResults) => {
        if (axiosResults.data.charities) {
          this.setState({ charityArray: axiosResults.data.charities });
        }
      })
      .catch((err) => console.error(err));
  }
  newName = (e) => this.setState({ name: e.target.value });
  newDescription = (e) => this.setState({ description: e.target.value });
  newAddress = (e) => this.setState({ address: e.target.value });
  newWeb = (e) => this.setState({ website: e.target.value });
  newLogo = (e) => this.setState({ logo: e.target.value });
  openModal = () => this.setState({ showModal: true });
  closeModal = () => this.setState({ showModal: false });

  addCharityHandler = async (e) => {
    e.preventDefault();
    console.log(this.props.auth0.user.email);
    await axios.post(`${process.env.REACT_APP_SREVER_URL}/charity?email=${this.props.auth0.user.email}`, {
      name: this.state.name,
      description: this.state.description,
      address: this.state.address,
      url: this.state.website,
      logo: this.state.logo,
    }).then((response) => {
      console.log(response.data);
      this.setState({
        charityArray: response.data.charities,
        showModal: false
      });
    });
  };
  deleteCharity = (id) => {
    let url = `${process.env.REACT_APP_SREVER_URL}/charity/${id}?email=${this.props.auth0.user.email}`
    axios.delete(url).then(response => {
      console.log(response.data)
      this.setState({
        charityArray: response.data.charities,
      })
    })
  };
  render() {
    return (
      <>
        <Row>
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
                      <Button
                        className='m-3'
                        variant='outline-light '
                        onClick={()=>this.deleteCharity(item._id)}
                      >
                        Delete
                      </Button>
                    </Carousel.Caption>
                  </Carousel.Item>
                )
              })
            }
          </Carousel>
        </Row>
        <Row >
          <Col className='justify-content-center m-4'>
            <Button width='50%' onClick={this.openModal}>Add Your Charity</Button>
          </Col>

          <CharityForm
            show={this.state.showModal}
            handleClose={this.closeModal}
            newAddress={this.newAddress}
            newName={this.newName}
            newDescription={this.newDescription}
            newWeb={this.newWeb}
            newLogo={this.newLogo}
            addCharityHandler={this.addCharityHandler}
          />
        </Row>
      </>
    );
  }
}
export default withAuth0(Charity);
