import React, { Component } from "react";
import ErrorIndicator from "../ErrorIndicator";
import "./RestartBar.css";
export default class ScoreBar extends Component {
  render() {
    const { restart } = this.props;
    return (
      <div className="row mb2 test">
        <div className="col-md-1"></div>
        <div className="col-md-10">
          <ErrorIndicator update={false} restart={restart} />
        </div>
        <div className="col-md-1"></div>
      </div>
    );
  }
}
