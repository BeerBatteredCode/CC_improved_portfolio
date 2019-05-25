import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import Video from "./Components/Video";
import Portfolio from "./Components/Portfolio";
import Project from "./Components/Project";
import aboutMe from "./Text";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Section
          title="About Me"
          subtitle={aboutMe}
          dark={true}
          id="section1"
        />
        <Video
          title="Video Blog"
          subtitle={aboutMe}
          dark={false}
          id="section2"
        />
        <Portfolio
          title="Grant Rutherford Portfolio"
          subtitle={aboutMe}
          dark={true}
          id="section3"
        />
        <Project
          title="My Work"
          subtitle={aboutMe}
          dark={false}
          id="section4"
        />
        <Section
          title="What Comes Next"
          subtitle={aboutMe}
          dark={true}
          id="section5"
        />
      </div>
    );
  }
}

export default App;
