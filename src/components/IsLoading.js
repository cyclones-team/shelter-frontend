import React, { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";
import Loader from "react-loader-spinner";
import { Container, Row, Image, Button } from "react-bootstrap";
import pitpull from "./assets/pitpull.png";

class IsLoading extends Component {
  render() {
    return (
      <>
        {/* this.props.auth0.isLoading ? */}
        <Container
          className="mt-5"
          style={{
            textAlign: "center",
            justifyContent: "center",
            margin: "auto",
          }}
        >
          <Row>
            <Loader
              type="Circles"
              color="#00BFFF"
              height={400}
              width={400}
              timeout={7000} //5 secs
            />
          </Row>
          <Row
            className="mt-2"
            style={{
              textAlign: "center",
              justifyContent: "center",
              margin: "auto",
            }}
          >
            <h3>Loading...</h3>
          </Row>
        </Container>
        : this.props.auth0.error ?
        <Container
          style={{
            alignItems: "center",
            justifyContent: "center",
            margin: "auto",
          }}
        >
          <Row
            className="mt-5"
            style={{
              alignItems: "center",
              justifyContent: "center",
              margin: "auto",
            }}
          >
            <Image src={pitpull} style={{ width: "300px" }} />
          </Row>
          <Row
            style={{
              textAlign: "center",
              justifyContent: "center",
              margin: "auto",
            }}
          >
            <h2>You are not allowed here .. please login and come back </h2>
          </Row>
          <Row>
            <h1> {this.props.auth0.error.message} </h1>
          </Row>
        </Container>
        : this.props.children
      </>
    );
  }
}

export default withAuth0(IsLoading);
