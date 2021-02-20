import React from "react";
import { ProgressBar } from "react-bootstrap";
import "./PersonalParamsBar.css";

const PersonalParamsBar = ({ logo, value, dimension, variant, max, clazz }) => {
  return (
    <div>
      <span className="logoBar">{logo}</span>
      <div className="bar">
        <ProgressBar
          animated
          now={value}
          striped
          max={max}
          variant={`${variant}`}
          label={`${value} ${dimension}`}
        />
      </div>
    </div>
  );
};
export default PersonalParamsBar;
