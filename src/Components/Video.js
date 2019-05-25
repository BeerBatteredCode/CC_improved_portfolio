import React from "react";

export default function Video({ title, subtitle, dark, id }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <section className="section-content-video" id={id}>
        <div className="div-content-video-grid-main">
            <div className="div=content-video-grid">
                <h1>{title}</h1>
                <p>{subtitle}</p>
            </div>
            <div className="div=content-video-grid">
                <h1>{title}</h1>
                <p>{subtitle}</p>
            </div>
        </div>
      </section>
    </div>
  );
}
