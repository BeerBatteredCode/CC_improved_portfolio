import React from "react";

export default function Video({ title, subtitle, dark, id }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
        <section className="section-content-video" id={id}>
            <div className="div-content-video-grid-main">
                <div className="div-content-video-grid-duel">
                    <div className="div-content-video-grid-single">
                        <h1>{title}</h1>
                        <p>{subtitle}</p>
                    </div>
                    <div className="div-content-video-grid-single">
                        <p>{subtitle}</p>
                    </div>
                </div>
                <div className="div-content-video-grid-duel">
                    <div className="div-content-video-grid-single">
                        <h1>{title}</h1>
                        <p>{subtitle}</p>
                    </div>
                    <div className="div-content-video-grid-single">
                        <p>{subtitle}</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}
