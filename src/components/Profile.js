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

        <div className="container emp-profile">
          <div className="row">
            <div className="col-md-4">
              <div className="profile-img">
                <img
                  className="rounded-circle"
                  src={this.props.auth0.user.picture}
                  alt="profilePic"
                />
              </div>
            </div>
            <div className="col-md-6 justify-content-center text-center">
              <div className="profile-head mt-5">
                <h5>{this.props.auth0.user.name}</h5>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <div className="tab-content profile-tab ml-5" id="myTabContent">
                <div className="m-5"> 
                <div className="row">
                  <div className="col-md-4">
                    <label>User Id</label>
                  </div>
                  <div className="col-md-4">
                    <p>253336 </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <label>Name</label>
                  </div>
                  <div className="col-md-4">
                    <p>{this.props.auth0.user.name}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <label>Email</label>
                  </div>
                  <div className="col-md-4">
                    <p>{this.props.auth0.user.email}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <label>Phone</label>
                  </div>
                  <div className="col-md-4">
                    <p>079900009</p>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}

export default withAuth0(Profile);
