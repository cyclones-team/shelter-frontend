import react from "react";
import HeroImage from "./assets/aee8cb60b21f43cabea615436dd3de11.jpg"
class Hero extends react.Component {
  
  render() {
    return (
      
        <div>
          <div style={{position:"absolute",width:"100%",marginTop:"3%"}}>
            <p style={{fontSize:"220%",marginLeft:"50%"}}>"The Greatest Threat to Our Planet Is The Belief That Someone Else Will Save It"</p>
            <p style={{marginLeft:"80%",fontSize:"150%"}}>~Robert Swan</p>
          </div>
        
          <img src={HeroImage} alt="" style={{ width: "100%"}}></img>
        </div>
      
    );
  }
}
export default Hero;
