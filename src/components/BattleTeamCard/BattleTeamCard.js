import React, { Component } from "react";
import PersonalParamsBar from "../PersonalParamsBar";
import { BattleItemsDetails } from "../SwComponents";

export default class BattleTeamCard extends Component {
  render() {
    const { health, attack, teamList, itemId, team } = this.props;
    const items = teamList.map((element) => {
      return (
        <BattleItemsDetails itemId={element} key={element} item={"person"} />
      );
    });

    const upperTeam = team.toUpperCase();

    return (
      <div className="col-md-5 height">
        <div className="header">
          <h1>{upperTeam} TEAM</h1>
        </div>
        <div className="battleArea">
          <div className="headBlock">
            {" "}
            <BattleItemsDetails itemId={itemId} item={"ship"} />
            <div className="bars">
              <PersonalParamsBar
                value={health}
                logo={"Health"}
                dimension={"hp"}
                variant={"success"}
                max={600}
              />
              <PersonalParamsBar
                value={attack}
                logo={"Attack"}
                dimension={"damage"}
                variant={"danger"}
                max={400}
              />{" "}
            </div>
          </div>

          <div className="photo-box">
            <h4>Brave {team} team:</h4>
            <div className="photos">{items}</div>
          </div>
        </div>
      </div>
    );
  }
}
