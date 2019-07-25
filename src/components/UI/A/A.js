import React from "react";
import "./A.css";
import { Link } from "react-router-dom";
const A = props => {
  return (
    <Link to={props.to} className="simple-link">
      {props.children}
    </Link>
  );
};

export default A;
