import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function Section({ status, title, button, index, pic }) {
  useEffect(() => {
    for (let i = 0; i < 5; i++) {
      gsap.to(`.text${i}`, {
        y: -20,
        opacity: 1,
        scrollTrigger: {
          trigger: `.text${i}`,
        },
      });
    }
  }, []);
  return (
    <div
      className="section"
      style={{ backgroundImage: `url(https://www.spacex.com${pic})` }}
    >
      {index == 0 && (
        <svg width="30px" height="20px" id="scroll">
          <path
            stroke="#ffffff"
            strokeWidth="2px"
            fill="none"
            d="M2.000,5.000 L15.000,18.000 L28.000,5.000 "
          ></path>
        </svg>
      )}
      <div className="section_inner">
        <div className={`text${index}`} style={{ opacity: 0 }}>
          <div className="status">{status}</div>
          <div className="title">{title}</div>
          <div className="button">
            <div className="button_animation"></div>
            <span>{button}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section;
<div className="status"></div>;
