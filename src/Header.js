import React, { Component } from 'react'
import './header.css';

export class Header extends Component {
  render() {
    return (
      <div>
         <div class="container"> 
        <header>
            <nav>
                <ul class="menu">
                    <li class="logo"><a href="#">Dev & Design</a></li>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">profile</a></li>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Take Action</a></li>
                </ul>
            </nav>
        </header>
        <div class="banner">
            <div>
                <h2 class="banner-title">Don't Miss Out On Our Next Webinar</h2>
                <p class="banner-desc">Sign Up Now and Choose an Ebook for Free</p>
            </div>
            <button class="btn-signup" type="button" onclick="location.href='#'">
                   Go to Webinars »
            </button>
        </div>
        <article class="article">
            <p>...</p>
        </article>
    </div>
      </div>
    )
  }
}

export default Header
