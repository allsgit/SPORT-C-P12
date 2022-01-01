import React from "react";
import "../Nav/_nav.scss";
import Logo from "../../assets/images/sport-see-logo.png";

function Nav() {
  return (
    <div className="nav-container">
      <nav>
        <div className="logo-container">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
          <h1 className="logo-text">Sport See</h1>
        </div>
       <ul>
          <li>Accueil</li>
          <li>Profil</li>
          <li>Réglage</li>
          <li>Communauté</li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
