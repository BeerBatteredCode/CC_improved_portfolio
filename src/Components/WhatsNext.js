import React from "react";

export default function WhatsNext({ title, subtitle, dark, id }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
        <section className="section-content-aboutme" id={id}>
            <div className="div-content-whatsnext-grid-main">
                <div className="div-content-whatsnext-grid-duel">
                    <div className="div-content-whatsnext-grid-single">
                        <h1>IMAGES HERE</h1>
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