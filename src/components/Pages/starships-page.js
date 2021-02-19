import React, { Component, Fragment } from "react";
import ScoreBar from "../Bars/score-bar";
import { StarshipList, StarshipDetails } from "../Sw-components";

export default class StarshipsPage extends Component {
  state = { label: "Starship", selectedItems: [5, 10, 12, 13, 11] };
  render() {
    const {
      itemId,
      shipsList,
      scoreShips,
      onShipSelect,
      onStarshipSelected,
    } = this.props;

    return (
      <Fragment>
        <div className="col-md-5">
          <StarshipList
            onSelect={onShipSelect}
            activeItemsList={shipsList}
            onItemSelected={onStarshipSelected}
            selectedItems={this.state.selectedItems}
          />
        </div>
        <div className="col-md-2">
          <ScoreBar score={scoreShips} label={this.state.label} />
        </div>
        <div className="col-md-5">
          <StarshipDetails itemId={itemId} item={"Starship"}></StarshipDetails>
        </div>
      </Fragment>
    );
  }
}
