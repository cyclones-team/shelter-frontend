import React, { Component } from "react";
import "./footer.css";

class Footer extends Component {
  render() {
    return (
      <>
        <div class="footer">
          <div class="inner-footer">
            <div class="footer-items1">
              <h1>Company Name</h1>
              <p>Cyclones1 To save shelter Animals.</p>
            </div>

            <div class="footer-items2">
              <h3>Contact us</h3>
              <div class="border1"></div>
              <ul>
                <li>
                  <i class="fa fa-map-marker" aria-hidden="true"></i>AMMan -
                  jordan
                </li>
                <li>
                  <i class="fa fa-phone" aria-hidden="true"></i>078/456789
                </li>
                <li>
                  <i class="fa fa-envelope" aria-hidden="true"></i>
                  Cyclones1@gmail.com
                </li>
              </ul>

              <div class="social-media">
                <a href="#">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i class="fab fa-facebook"></i>
                </a>
                <a href="#">
                  <i class="fab fa-google-plus-square"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="footer-bottom">Copyright &copy; Cyclones1 2020.</div>
        </div>
      </>
    );
  }
}

export default Footer;
