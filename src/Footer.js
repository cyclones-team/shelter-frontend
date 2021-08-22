import React, { Component } from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin,faGoogle ,faGithub } from "@fortawesome/free-brands-svg-icons";

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
                      <a href="#">Web design</a>
                    </li>
                    <li>
                      <a href="#">Development</a>
                    </li>
                    <li>
                      <a href="#">Hosting</a>
                    </li>
                  </ul>
                </div>
                <div class="col-sm-6 col-md-3 item">
                  <h3>About</h3>
                  <ul>
                    <li>
                      <a href="#">Company</a>
                    </li>
                    <li>
                      <a href="#">Team</a>
                    </li>
                    <li>
                      <a href="#">Careers</a>
                    </li>
                  </ul>
                </div>
                <div class="col-md-6 item text">
                  <h3>Company Name</h3>
                  <p>
                    Praesent sed lobortis mi. Suspendisse vel placerat ligula.
                    Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam
                    quis tristique lectus. Aliquam in arcu eget velit pulvinar
                    dictum vel in justo.
                  </p>
                </div>
                <div class="col item social">
                  <a href="#">
                  <FontAwesomeIcon icon={faGithub}  size="lg"/>
                  </a>
                  <a href="#">
                    <FontAwesomeIcon icon={faLinkedin} size="lg" />
                  </a>
                  <a href="#">
                    <FontAwesomeIcon icon={faFacebook} size="lg" />
                  </a>
                  <a href="#">
                    <FontAwesomeIcon icon={faGoogle} size="lg" />
                  </a>
                </div>
              </div>
              <p class="copyright">Company Name © 2018</p>
            </div>
          </footer>
        </div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>
      </div>
    );
  }
}

export default Footer;
