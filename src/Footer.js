import React, { Component } from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin,faGoogle ,faGithub } from "@fortawesome/free-brands-svg-icons";
import {Link} from "react-router-dom"
import { withAuth0 } from '@auth0/auth0-react';

export class Footer extends Component {
  render() {
    return (
      <div>
        <div class="footer-dark">
          <footer>
            <div class="container">
              <div class="row">
                <div class="col-sm-6 col-md-3 item">
                  <h3>Services</h3>
                  <ul>
                    <li>
                      <a>Adopting pets</a>
                    </li>
                    <li>
                      <a >Guiding your charity in the right hands</a>
                    </li>
                    <li>
                      <a >Rising awarness about endangered Animals</a>
                    </li>
                  </ul>
                </div>
                <div class="col-sm-6 col-md-3 item">
                  <h3>Explore</h3>
                  <ul>
                    <li>
                      <Link to="/"><a >Home</a></Link>
                    </li>
                    <li>
                      <Link to="/about"><a>About Us</a></Link>
                    </li>
                    <li>
                    {this.props.auth0.isAuthenticated && <Link to="/action"><a>Take Action</a></Link>}
                    </li>
                    <li>
                    {this.props.auth0.isAuthenticated && <Link to="/profile"><a>Profile</a></Link>}
                    </li>
                  </ul>
                </div>
                <div class="col-md-6 item text">
                  <h3>Teaam Cyclones</h3>
                  <p>
                    All you need is a close look around you to realize the importance of making a move.
                  </p>
                </div>
                <div class="col item social">
                  <a href="https://github.com/cyclones-team">
                  <FontAwesomeIcon icon={faGithub}  size="lg"/>
                  </a>
                  <a href="https://www.linkedin.com/">
                    <FontAwesomeIcon icon={faLinkedin} size="lg" />
                  </a>
                  <a href="https://www.facebook.com/">
                    <FontAwesomeIcon icon={faFacebook} size="lg" />
                  </a>
                  <a href="https://mail.google.com/">
                    <FontAwesomeIcon icon={faGoogle} size="lg" />
                  </a>
                </div>
              </div>
              <p class="copyright">Team Cyclones @ASAC © 2021</p>
            </div>
          </footer>
        </div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>
      </div>
    );
  }
}

export default withAuth0(Footer);