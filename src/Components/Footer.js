import React, { Component } from "react";
import logoSmall from "../Media/Images/circle_logo_filler.png";
import { Link, animateScroll as scroll } from "react-scroll";

export default class Footer extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <div className ="footer">
        <div className="footer-content">
          <div className="footer-items">
            <div className="footer-item">
              <a href="https://www.linkedin.com/in/grant-rutherford-4a889a17b/" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-linkedin"></i>
              </a>
            </div>
            <div className="footer-item">
              <a href="https://github.com/BeerBatteredCode" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-github-square"></i>
              </a>
            </div>
            <div className="footer-item">
              <a href="https://youtube.com" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-youtube-square"></i>
              </a>
            </div>
            <div className="footer-item">
              <a href="https://twitter.com/GrantRutherfor4" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-twitter-square"></i>
              </a>
            </div>
          </div>
            <img
            src={logoSmall}
            className="nav-logo"
            alt="Logo"
            onClick={this.scrollToTop}
          />
      </div>
    </div>
  );
}
}
