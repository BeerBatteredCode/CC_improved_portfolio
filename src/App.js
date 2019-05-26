import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Video from "./Components/Video";
import Portfolio from "./Components/Portfolio";
import Project from "./Components/Project";
import Footer from "./Components/Footer";
import WhatsNext from "./Components/WhatsNext";
import AboutMe from "./Components/AboutMe";
import Text from "./Text";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <AboutMe
          title="About Me"
          subtitle={Text}
          dark={true}
          id="section1"
        />
        <Video
          title="Video Blog"
          subtitle={Text}
          dark={false}
          id="section2"
        />
        <Portfolio
          title="Grant Rutherford Portfolio"
          subtitle={Text}
          dark={true}
          id="section3"
        />
        <Project
          title="My Work"
          subtitle={Text}
          dark={false}
          id="section4"
        />
        <WhatsNext
          title="What Comes Next"
          subtitle={Text}
          dark={true}
          id="section5"
        />
        <Footer />
      </div>
    );
  }
}

export default App;
