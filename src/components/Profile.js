import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
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

    
        <Footer />
      </>
    );
  }
}

export default withAuth0(Profile);
