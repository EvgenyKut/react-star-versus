import React, { Component, Fragment } from "react";
import ScoreBar from "../bars/score-bar";
import { StarshipList, StarshipDetails } from "../sw-components";

export default class StarshipsPage extends Component {
  state = { label: "Starship", selectedItems: [5, 10, 12, 13, 11] };
  render() {
    const {
      onShipSelect,
      onStarshipSelected,
      shipsList,
      scoreShips,
      itemId,
    } = this.props;

    return (
      <Fragment>
        <div className="col-md-5">
          <StarshipList
            onItemSelected={onStarshipSelected}
            onSelect={onShipSelect}
            activeItemsList={shipsList}
            selectedItems={this.state.selectedItems}
          />
        </div>
        <div className="col-md-2">
          <ScoreBar score={scoreShips} label={this.state.label} />
        </div>
        <div className="col-md-5">
          <StarshipDetails itemId={itemId}></StarshipDetails>
        </div>
      </Fragment>
    );
  }
}
