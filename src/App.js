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