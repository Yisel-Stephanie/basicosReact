import React from "react";

function Ancla(props) {
  return (
    <li>
      <a href={props.el.web}>{props.el.name}</a>
    </li>
  );
}

export default Ancla;
