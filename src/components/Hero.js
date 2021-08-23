import react from "react";
import HeroImage from "./assets/2027098.jpg"
class Hero extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{
        text: "", img: "https://i.pinimg.com/originals/f4/07/6f/f4076f86b05790a0dd75845a311070f6.jpg"
      }, {
        text: "", img: "https://wallpapershome.com/images/pages/ico_h/23325.jpg"
      }, {
        text: "", img: "https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y3V0ZSUyMGFuaW1hbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
      }, {
        text: "", img: "https://3.bp.blogspot.com/-6OFURA-2rxM/XEJfLp_7pdI/AAAAAAAAHw0/TZjiRisEn5Ay5Ib9uTVJQt0AhhXT7evSACHMYCw/s1600/cute-animal-wallpapers-hd-wild-life-photos-pet-images-best.jpg"
      }]
    };
  }
  render() {
    return (
      
        <div>
          <div style={{position:"absolute",width:"100%",marginTop:"3%"}}>
            <p style={{fontSize:"220%",marginLeft:"50%",}}>"The Greatest Threat to Our Planet Is The Belief That Someone Else Will Save It"</p>
            <p style={{marginLeft:"75%",fontSize:"150%"}}>~Robert Swan</p>
          </div>
        
          <img src={HeroImage} alt="" style={{ width: "100%"}}></img>
        </div>
      
    );
  }
}
export default Hero;
