import React from "react";
import "../Macro/_macro.scss"

function macro(props) {
  return (
    <div className="macro-composant">
      <div className="macro-icon">
        <img src={props.macroIcon}alt="" />{" "}
      </div>
      <div className="macro-propriety">
        <p className="amount">{props.Amount}</p>
        <p className="types">{props.types}</p>
      </div>
    </div>
  );
}

export default macro;
