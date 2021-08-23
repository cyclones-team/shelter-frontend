import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Container, Row, Col, Image, Card, ListGroup } from "react-bootstrap";
import Header from "../Header";
import Footer from "../Footer";
import { withAuth0 } from "@auth0/auth0-react";
import "./profile.css";
export class Profile extends Component {
  render() {
    return (
      <>
        <Header />

        <div class="container emp-profile">
          <form method="post">
            <div class="row">
              <div class="col-md-4">
                <div class="profile-img">
                  <img src={this.props.auth0.user.picture} alt="" />
                  <div class="file btn btn-lg btn-primary">
                    Change Photo
                    <input type="file" name="file" />
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="profile-head">
                  <h5>{this.props.auth0.user.name}</h5>
                </div>
              </div>
              <div class="col-md-2">
                <input
                  type="submit"
                  class="profile-edit-btn"
                  name="btnAddMore"
                  value="Edit Profile"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-md-4">
                <div class="profile-work">
                  <p>Pets</p>
                  <small>Dog</small>
                  <br />
                  <small>Cat</small>
                  <br />
                </div>
              </div>
              <div class="col-md-8">
                <div class="tab-content profile-tab" id="myTabContent">
                  <div
                    class="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div class="row">
                      <div class="col-md-6">
                        <label>User Id</label>
                      </div>
                      <div class="col-md-6">
                        <p>user id </p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>Name</label>
                      </div>
                      <div class="col-md-6">
                        <p>{this.props.auth0.user.name}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>Email</label>
                      </div>
                      <div class="col-md-6">
                        <p>{this.props.auth0.user.email}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>Phone</label>
                      </div>
                      <div class="col-md-6">
                        <p>079900009</p>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <div class="row">
                      <div class="col-md-6">
                        <label>Charities</label>
                      </div>
                      <div class="col-md-6">
                        <p>UN</p>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-12">
                        <label>Your Bio</label>
                        <br />
                        <p>Your detail description</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>

        {/* <Container fluid className="m-5 p-15 ">
          <Row className="mb-5 justify-content-center">
            <Col style={{ width: "20rem" }}>
              <Image
                src={this.props.auth0.user.picture}
                roundedCircle
              />
            </Col>
            <Col>
              <Card style={{ width: "20rem" }}>
                <Card.Header>Your information</Card.Header>
                <ListGroup variant="flush">
                  <ListGroup.Item>name: {this.props.auth0.user.name}</ListGroup.Item>
                  <ListGroup.Item>email: {this.props.auth0.user.email}</ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </Container> */}
        <Footer />
      </>
    );
  }
}

export default withAuth0(Profile);
