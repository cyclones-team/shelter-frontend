import React, { Component } from 'react'
import './footer.css';

class Footer extends Component {
  render() {
    return (
      <div>
<div class="footer">
  <div class="inner-footer">
        <ul>
          <li><i  aria-hidden="true"></i>Renad Walaa Thaer Anas</li>
          <li><i  aria-hidden="true"></i>  078/43456789  </li>
          <li><i aria-hidden="true"></i>Cyclones1@gmail.com</li>
        </ul> 
       </div>

        <div class="social-media">
          <a href="#"><i class="fab fa-instagram"></i></a>
          <a href="#"><i class="fab fa-facebook"></i></a>
          <a href="#"><i class="fab fa-google-plus-square"></i></a>
        </div> 
   
  </div>
  <div class="footer-bottom">
    Copyright &copy; cyclones1 2020.
  </div>
</div>
  

   

  


    )
  }
}

export default Footer
