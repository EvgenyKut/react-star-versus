import React, { Component } from "react";
import "./score-bar.css";
export default class ScoreBar extends Component {
  render() {
    const { score, label } = this.props;
    if (score) {
      return (
        <div className="item">
          <p>Available {label}</p>
          <span className="scores">{score}</span>
        </div>
      );
    } else {
      return (
        <div className="item">
          {label === "Starship" ? <p>Starship</p> : <p>Team</p>}
          <div className="check">
            <i
              className="fa fa-check  fa-5x green scoreCheck"
              aria-hidden="true"
            ></i>
          </div>
        </div>
      );
    }
  }
}
