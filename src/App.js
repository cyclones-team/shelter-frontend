
import react from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/Main";
import Footer from "./Footer";
import Header from "./Header";
import Charity from "./components/Charity";
import { Container ,Row } from "react-bootstrap";
import TakeAction from "./components/TakeAction";

class App extends react.Component {
  render() {
    return (
       <>
       <Header />
       <Main/>
    <Footer />
 {/* <TakeAction/> */}
   
      </>
    );
  }
}

export default App;
