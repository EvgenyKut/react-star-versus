import React, { Component } from "react";
import MyProgressBar from "../../blocks/progressBar";
import BattleShipDetails from "../../sw-components/battle-ship-details";
import BattlePersonDetails from "../../sw-components/battle-person-details";

export default class BattleTeamCard extends Component {
  render() {
    const { health, attack, teamList, shipId, team } = this.props;
    let items = teamList.map((element) => {
      return <BattlePersonDetails personId={element} key={element} />;
    });

    let upperTeam = team.toUpperCase();

    return (
      <div className="col-md-5">
        <div className="header">
          <h1>{upperTeam} TEAM</h1>
        </div>
        <div className="battleArea">
          <div className="headBlock">
            {" "}
            <BattleShipDetails shipId={shipId} />
            <div className="bars">
              <MyProgressBar
                value={health}
                logo={"Health"}
                dimension={"hp"}
                variant={"success"}
                max={600}
              />
              <MyProgressBar
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
