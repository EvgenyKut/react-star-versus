import React, { Component } from "react";
import ErrorIndicator from "../../blocks/error-indicator";
import "./restart-bar.css";
export default class ScoreBar extends Component {
  render() {
    return (
      <div className="row mb2 test">
        <div className="col-md-1"></div>
        <div className="col-md-10">
          <ErrorIndicator update={false} />
        </div>
        <div className="col-md-1"></div>
      </div>
    );
  }
}
