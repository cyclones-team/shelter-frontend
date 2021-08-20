
import react from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/Main";
import Footer from "./Footer";
import Header from "./Header";


class App extends react.Component {
  render() {
    return (
      <>
        <Header />
        <Main/>
        <Footer />
      </>
    );
  }
}

export default App;
