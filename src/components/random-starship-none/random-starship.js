import React, { Component, Fragment } from "react";

import "./random-starship";
import SwapiService from "../../services/swapi-service";
export default class RandomStarship extends Component {
  componentDidMount() {
    const { updateInterval } = this.props;
    this.updateStarship();
    setInterval(this.updateStarship, updateInterval);
  }

  swapiService = new SwapiService();

  state = {
    starship: {},
    loading: true,
    error: false,
  };

  onStarshipLoaded = (starship) => {
    this.setState({ starship, loading: false });
  };

  updateStarship = () => {
    const starshipsList = [
      2,
      3,
      5,
      9,
      10,
      11,
      12,
      13,
      15,
      21,
      22,
      23,
      27,
      28,
      29,
      31,
    ];
    const index = Math.trunc(Math.random() * starshipsList.length);
    const id = starshipsList[index];
    this.swapiService.getStarship(id).then(this.onStarshipLoaded);
  };

  render() {
    const { starship } = this.state;
    const content = <StarshipView starship={starship} />;
    return <div className="random-starship jumbotron rounded">{content}</div>;
  }
}

const StarshipView = ({ starship }) => {
  const { id, name, length, hyperdrive, speed } = starship;
  return (
    <Fragment>
      <img
        className="starship-image"
        src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`}
        alt="StarshipImage"
      />
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Length</span>
            <span>{length}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Hyperdrive-rate</span>
            <span>{hyperdrive}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Speed</span>
            <span>{speed}</span>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};
