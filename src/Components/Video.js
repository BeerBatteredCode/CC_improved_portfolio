import React from "react";
import Video1 from "../Media/Videos/fox_floopin.mp4";

export default function Video({ title, subtitle, dark, id }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
        <section className="section-content-video" id={id}>
            <div className="div-content-video-grid-main">
                <div className="div-content-video-grid-duel">
                    <div className="div-content-video-grid-single-odd">
                        <h1>{title}</h1>
                        <p>{subtitle}</p>
                    </div>
                    <div className="div-content-video-grid-single">
                        <video controls
                        className="video-link"
                        src={Video1}
                        controls/>
                    </div>
                </div>
                <hr/>
                <div className="div-content-video-grid-duel">
                    <div className="div-content-video-grid-single">
                        <video controls
                        className="video-link"
                        src={Video1}
                        controls/>
                    </div>
                    <div className="div-content-video-grid-single">
                        <h1>{title}</h1>
                        <p>{subtitle}</p>
                    </div>
                </div>
                <hr/>
                <div className="div-content-video-grid-duel">
                    <div className="div-content-video-grid-single-odd">
                        <h1>{title}</h1>
                        <p>{subtitle}</p>
                    </div>
                    <div className="div-content-video-grid-single">
                        <video controls
                        className="video-link"
                        src={Video1}
                        controls/>
                    </div>
                </div>
                <hr/>
                <div className="div-content-video-grid-duel">
                    <div className="div-content-video-grid-single">
                        <video controls
                        className="video-link"
                        src={Video1}
                        controls/>
                    </div>
                    <div className="div-content-video-grid-single">
                        <h1>{title}</h1>
                        <p>{subtitle}</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}
