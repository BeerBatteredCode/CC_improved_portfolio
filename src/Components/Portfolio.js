import React from "react";
import mainLogo1 from "../Media/Images/circle_logo_filler.png";
import mainLogo2 from "../Media/Images/rutherford_centre.png";


export default function Portfolio({dark, id }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
        <div className="section-content-portfolio">
          <img
            src={mainLogo1}
            className="main-logo1"
            alt="MainLogo"
          />
          <img
            src={mainLogo2}
            className="main-logo2"
            alt="MainLogo"
          />
          <h4>HTML/CSS | Ruby | Javascript | Java | Spring | React | MongoDb</h4>
        </div>
      </div>
    </div>
  );
}
