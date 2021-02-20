import React from "react";
import { Link } from "react-router-dom";

import "./ErrorIndicator.css";
import icon from "./death-star.png";

const ErrorIndicator = ({ update, restart }) => {
  const phraseFirst = restart ? (
    <span>(This battle is finished)</span>
  ) : (
    <span>something has gone terribly wrong</span>
  );

  const phraseSecond = update ? (
    <span>(but we already sent droids to fix it)</span>
  ) : (
    <Link to="/chose_a_team">
      <span>(You can try again)</span>
    </Link>
  );
  return (
    <div className="error-indicator">
      <img src={icon} alt="error icon" />
      <span className="boom">BOOM!</span>
      {phraseFirst}
      {phraseSecond}
    </div>
  );
};

export default ErrorIndicator;
