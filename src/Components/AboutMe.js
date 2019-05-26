import React from "react";

export default function AboutMe({ title, subtitle, dark, id }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
        <section className="section-content-aboutme" id={id}>
            <div className="div-content-aboutme-grid-main">
                <div className="div-content-aboutme-grid-duel">
                    <div className="div-content-aboutme-grid-single-odd">
                        <h1>{title}</h1>
                        <p>{subtitle}</p>
                    </div>
                    <div className="div-content-aboutme-grid-single">
                        <h1>IMAGES HERE</h1>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );      
}
