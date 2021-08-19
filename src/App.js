
'use strict'
import react from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './components/Hero.component';
import Animal from './components/AnimalCards.component'

class App extends react.Component{
  render(){
    return(
      <>
      <Hero/>
      <Animal/>
      
      </>
    )
  }
}
export default App

import React, { Component } from 'react'
import Footer from './Footer'
import Header from './Header'

 class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Footer/>
      </div>
    )
  }
}

export default App

