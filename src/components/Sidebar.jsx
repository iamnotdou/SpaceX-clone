import React, { useState } from "react";

function Sidebar() {
  const [active, setActive] = useState(false);
  return (
    <div id="sidebar">
      <div id="nav">
        <a className="navlink" href="/shop">
          shop
        </a>
        <div
          onClick={() => {
            console.log("hello");
            setActive(!active);
          }}
          id="burger"
          className={active ? "active" : "a"}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>

      <div id="menu">
        <div id="blackout"></div>
        <div id="links">
          <div className="link">mission</div>
          <div className="link">launches</div>
          <div className="link">careers</div>
          <div className="link">updates</div>
          <div className="link">shop</div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
