import React from "react";

export default function Project({ title, subtitle, dark, id }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
        <section className="section-content-project" id={id}>
            <div className="div-content-project-grid-main">
                <div className="div-content-project-grid-duel">
                    <div className="div-content-project-grid-single">
                        <h1>{title}</h1>
                        <p>{subtitle}</p>
                    </div>
                    <div className="div-content-project-grid-single">
                        <h1>VIDEO HERE</h1>
                    </div>
                </div>
                <div className="div-content-project-grid-duel">
                    <div className="div-content-project-grid-single">
                        <h1>VIDEO HERE</h1>
                    </div>
                    <div className="div-content-project-grid-single">
                        <h1>{title}</h1>
                        <p>{subtitle}</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}
