import React, { Component, Fragment } from "react";

import ScoreBar from "../bars/score-bar";
import { PersonList, PersonDetails } from "../sw-components";

export default class PeoplePage extends Component {
  state = { label: "soldiers", selectedItems: [1, 2, 3, 5, 9] };
  render() {
    const {
      onSelect,
      onPersonSelected,
      soldiersList,
      score,
      itemId,
    } = this.props;
    return (
      <Fragment>
        <div className="col-md-5">
          <PersonList
            onItemSelected={onPersonSelected}
            onSelect={onSelect}
            activeItemsList={soldiersList}
            selectedItems={this.state.selectedItems}
          />
        </div>
        <div className="col-md-2">
          <ScoreBar score={score} label={this.state.label} />
        </div>
        <div className="col-md-5">
          <PersonDetails itemId={itemId}></PersonDetails>
        </div>
      </Fragment>
    );
  }
}
