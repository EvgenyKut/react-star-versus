import React from "react";
import { Link } from "react-router-dom";

import "./error-indicator.css";
import icon from "./death-star.png";

const ErrorIndicator = ({ update }) => {
  let phrase = update ? (
    <span>(but we already sent droids to fix it)</span>
  ) : (
    <Link to="/">
      <span>(You can try to return to your Galaxy)</span>
    </Link>
  );
  return (
    <div className="error-indicator">
      <img src={icon} alt="error icon" />
      <span className="boom">BOOM!</span>
      <span>something has gone terribly wrong</span>
      {phrase}
    </div>
  );
};

export default ErrorIndicator;
