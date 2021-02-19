import React, { Component } from "react";
import "./result-bar.css";
export default class ScoreBar extends Component {
  render() {
    let { result, scores } = this.props;
    const team = result === 1 ? "REBEL" : "EMPIRE";
    if (result === 0) {
      scores = scores * -1;
    }
    return (
      <div className="result-bar">
        <h2>{team}</h2>
        <span className="scores">WIN</span>
        <h4>with</h4>
        <span className="scores-points">{scores} points</span>
      </div>
    );
  }
}
