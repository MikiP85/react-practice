import React from "react";

import "./Char.css";

export const Char = props => {
  return (
    <p className="charComponent" onClick={props.clicked}>
      {props.character}
    </p>
  );
};
