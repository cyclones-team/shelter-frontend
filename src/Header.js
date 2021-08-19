import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.css';
class Header extends Component {
    render() {
        return (

<div>
<div class="header-items">
                <div class="border1"></div> 
                  <ul>
                    <a href="#"><li>Home</li></a>
                    <a href="#"><li>Profile</li></a>
                    <a href="#"><li>About us</li></a>
                    <a href="#"><li>Take Action</li></a>
                  </ul>
              </div>
</div>

        )
    }
}

export default Header
