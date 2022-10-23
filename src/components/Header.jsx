import React, { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import gsap from "gsap";
function Header() {
  const [active, setActive] = useState(false);
  var tl = useRef();

  useEffect(() => {
    tl.current = gsap.timeline({ paused: true });
    tl.current.to(".link", {
      opacity: 1,
      y: -20,
      stagger: 0.2,
      delay: 0.2,
    });
  }, []);
  function handleClick() {
    tl.current.play();
    setActive(!active);
  }
  useEffect(() => {
    active ? tl.current.play() : tl.current.reverse();
  }, [active]);
  return (
    <div id="header">
      <div id="header_inner">
        <Logo />
        <Nav />
        <div id="right">
          <div className="navlink">SHOP</div>
          <div
            id="burger"
            onClick={handleClick}
            className={active ? "active" : ""}
          >
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
        <div id="mod" className={active ? "active" : ""}>
          <div
            id="blackout"
            onClick={handleClick}
            className={active ? "active" : ""}
          ></div>
          <div id="menu" className={active ? "active" : ""}>
            <div className="link">MISSION</div>
            <div className="link">LAUNCHES</div>
            <div className="link">CAREERS</div>
            <div className="link">UPDATES</div>
            <div className="link">SHOP</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
