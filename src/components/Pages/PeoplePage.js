import React, { Component, Fragment } from "react";

import ScoreBar from "../ScoreBar";
import { PersonList, PersonDetails } from "../SwComponents";

export default class PeoplePage extends Component {
  state = { label: "soldiers", selectedItems: [1, 2, 3, 5, 9] };
  render() {
    const {
      score,
      itemId,
      onSelect,
      soldiersList,
      onPersonSelected,
    } = this.props;
    return (
      <Fragment>
        <div className="col-md-5">
          <PersonList
            onSelect={onSelect}
            activeItemsList={soldiersList}
            onItemSelected={onPersonSelected}
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
