import React from "react";
import CollageFiller from "../Media/Images/collage_filler.png";

export default function WhatsNext({ title, subtitle, dark, id }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
        <section className="section-content-whatsnext" id={id}>
            <div className="div-content-whatsnext-grid-main">
                <div className="div-content-whatsnext-grid-duel">
                    <div className="div-content-whatsnext-grid-single">
                        <img
                            src={CollageFiller}
                            className="collage-filler2"
                            alt="CollageFiller"
                        />
                    </div>
                    <div className="div-content-whatsnext-grid-single">
                        <h1>{title}</h1>
                        <p>{subtitle}</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );      
}