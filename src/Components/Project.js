import React from "react";
import PawpalImage from "../Media/Images/pawpal.png";
import ImdbeatdownImage from "../Media/Images/imdbeatdown1.png";


export default function Project({ title, subtitle, dark, id }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
        <section className="section-content-project" id={id}>
            <div className="div-content-project-grid-main">
                <div className="div-content-project-grid-duel">
                    <div className="div-content-project-grid-single-odd">
                        <h1>{title}</h1>
                        <p>{subtitle}</p>
                    </div>
                    <div className="div-content-project-grid-single">
                        <img
                            src={PawpalImage}
                            className="pawpalImage"
                            alt="PawpalImage"
                        />
                    </div>
                </div>
                <hr/>
                <div className="div-content-project-grid-duel">
                    <div className="div-content-project-grid-single">
                        <img
                            src={ImdbeatdownImage}
                            className="imdbeatdownImage"
                            alt="ImdbeatdownImage"
                        />
                    </div>
                    <div className="div-content-project-grid-single">
                        <h1>{title}</h1>
                        <p>{subtitle}</p>
                    </div>
                </div>
            <hr/>
            <div className="div-content-project-grid-duel">
                    <div className="div-content-project-grid-single-odd">
                        <h1>{title}</h1>
                        <p>{subtitle}</p>
                    </div>
                    <div className="div-content-project-grid-single">
                        <img
                            src={PawpalImage}
                            className="pawpalImage"
                            alt="PawpalImage"
                        />
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}
