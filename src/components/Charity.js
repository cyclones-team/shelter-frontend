import react from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Carousel, Button, Row,Col } from "react-bootstrap";
import CharityForm from "./CharityForm";
import { withAuth0 } from "@auth0/auth0-react";
import UpdateForm from "./UpdateForm";

class Charity extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      charityArray: [],
      name: "",
      description: "",
      address: "",
      website: "",
      logo: "",
      uname: "",
      udescription: "",
      uaddress: "",
      uwebsite: "",
      ulogo: "",
      showModal: false,
      ushowModal: false,
    };
  }
  componentDidMount = async () => {
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
  };
  newName = (e) => this.setState({ name: e.target.value });
  newDescription = (e) => this.setState({ description: e.target.value });
  newAddress = (e) => this.setState({ address: e.target.value });
  newWeb = (e) => this.setState({ website: e.target.value });
  newLogo = (e) => this.setState({ logo: e.target.value });
  openModal = () => this.setState({ showModal: true });
  closeModal = () => this.setState({ showModal: false });

  //---------------------------------------------------
  updateName = (e) => this.setState({ uname: e.target.value });
  updateDescription = (e) => this.setState({ udescription: e.target.value });
  updateAddress = (e) => this.setState({ uaddress: e.target.value });
  updateWeb = (e) => this.setState({ uwebsite: e.target.value });
  updateLogo = (e) => this.setState({ ulogo: e.target.value });
  updateOpenModal = () => this.setState({ ushowModal: true });
  updateCloseModal = () => this.setState({ ushowModal: false });

  addCharityHandler = async (e) => {
    e.preventDefault();
    let data={
      email:this.props.auth0.user.email,
      name:"hgf",
      description:"tttt",
      address:"gggg",
      url:"juujujuj",
      logo:"jjjj",
     
    }
    let config={
      method:"post",
      baseURL:"http://localhost:3020",
      url:"/charity",
      data:data
    }
    await axios(config).then((response) => {
      this.setState({
        charityArray: response.data.charities,
        showModal: false,
      });
    });
  };

  deleteCharity = (id) => {
    let url = `${process.env.REACT_APP_SREVER_URL}/charity/${id}?email=${this.props.auth0.user.email}`;
    axios.delete(url).then((response) => {
      this.setState({
        charityArray: response.data.charities,
      });
    });
  };

  updateCharity = async (e, id) => {
    e.preventDefault();
    let url = `${process.env.REACT_APP_SREVER_URL}/charity/${id}?email=${this.props.auth0.user.email}&name=${this.state.uname}&description=${this.state.udescription}&address=${this.state.uaddress}&url=${this.state.uwebsite}&logo=${this.state.ulogo}`;
    await axios.put(url).then((response) => {
      this.setState({
        charityArray: response.data.charities,
        ushowModal: false,
      });
    });
  };

  render() {
    return (
      <>
        <Row>
          <h1 className='text-capitalize  text-center mt-5 mb-3 ' style={{color:"#885A6B",fontFamily: 'Permanent Marker',fontWeight:'900',fontSize:'60px'}}>Animals charities</h1>
          <Carousel
            className="shadow rounded p-2"
            style={{ width: "50%", margin: "auto" }}
          >
            {this.state.charityArray.map((item, index) => {
              return (
                <Carousel.Item key={index}>
                  <Card className="text-white text-center" style={{fontFamily: 'Permanent Marker'}}>
                    <Card.Img
                      src="https://www.seekpng.com/png/detail/24-249091_scribble-desktop-background-aesthetic-tumblr-plain.png"
                    />
                    <Card.ImgOverlay className="mt-2 ">
                      <Card.Img
                        style={{ width: "150px", height: "100px" }}
                        src={item.logo}
                        alt="Card image"
                        className='mb-4'
                      />
                      <Card.Title className='text-dark mb-4 mt-4'>{item.name}</Card.Title>
                      <Card.Text  className='text-dark mb-4'>{item.description}</Card.Text>
                      <Card.Text  className='text-dark mb-4'> {item.address}</Card.Text>
                      <Row className='mt-5'>
                        <Col>
                        
                      <Button
                        className="m-3"
                        variant="outline-dark"
                        href={item.url}
                        target="_blank"
                      >
                        Show more
                      </Button>
                      <Button
                        className="m-3"
                        variant="outline-dark"
                        onClick={() => this.deleteCharity(item._id)}
                      >
                        Delete
                      </Button>
                      <Button
                        className="m-3"
                        variant="outline-dark"
                        onClick={this.updateOpenModal}
                      >
                        Add your charity
                      </Button>
                      <Button
                        className="m-3"
                        variant="outline-dark"
                        onClick={this.updateOpenModal}
                      >
                        Update
                      </Button></Col></Row>
                    </Card.ImgOverlay>
                  </Card>
                  <UpdateForm
                    show={this.state.ushowModal}
                    id={item._id}
                    handleClose={this.updateCloseModal}
                    newName={this.updateName}
                    newAddress={this.updateAddress}
                    newDescription={this.updateDescription}
                    newWeb={this.updateWeb}
                    newLogo={this.updateLogo}
                    addCharityHandler={this.updateCharity}
                  />
                </Carousel.Item>
              );
            })}
          </Carousel>
        </Row>
        <Row>
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
