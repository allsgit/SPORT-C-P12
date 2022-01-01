import React from "react";
import "../SportNav/_sport-nav.scss";
import bike from "../../assets/images/bike-icon.png"
import dumbell from "../../assets/images/dumbell-icon.png";
import medit from "../../assets/images/medit-icon.png";
import swim from "../../assets/images/swim-icon.png";

export default function sportNav() {
  return (
    <div className="sport-nav-component-container">
      <div className="sport-nav-container">
        <div className="sport-icon-menu">
          <img src={bike} alt="" />
        </div>
        <div className="sport-icon-menu">
          <img src={dumbell} alt="" />
        </div>
        <div className="sport-icon-menu">
          <img src={medit} alt="" />
        </div>
        <div className="sport-icon-menu">
          <img src={swim} alt="" />
        </div>
 {/*        <div className="copyright">
          <p>copyright, SportSee 2020</p>
        </div> */}
      </div>
    </div>
  );
}
