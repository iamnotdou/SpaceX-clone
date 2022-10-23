import React from "react";

function Nav() {
  return (
    <div id="navigation">
      <a className="navlink" href="/vehicles/falcon-9/">
        Falcon 9
      </a>
      <a className="navlink" href="/vehicles/falcon-heavy/">
        Falcon Heavy
      </a>
      <a className="navlink" href="/vehicles/dragon/">
        Dragon
      </a>
      <a className="navlink" href="/vehicles/starship/">
        Starship
      </a>
      <a className="navlink" href="/human-spaceflight/">
        Human Spaceflight
      </a>
      <a className="navlink" href="/rideshare/">
        Rideshare
      </a>
      <a className="navlink" href="https://www.starlink.com" target="_">
        Starlink
      </a>
    </div>
  );
}

export default Nav;
