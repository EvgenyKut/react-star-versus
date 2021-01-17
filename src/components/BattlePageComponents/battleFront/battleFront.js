import React, { Component } from "react";
import "./battleFront.css";
import BattleTeamCard from "../battle-team-card";
import ResultBar from "../../bars/result-bar";
import RestartBar from "../../bars/restart-bar";

export default class Battlefront extends Component {
  render() {
    const { health, attack, teamList, shipId } = this.props;
    const empiresSoldiers = [4, 11, 12, 67, 21, 44];
    let empiresTeamList = [];
    for (let i = 1; i <= 3; ) {
      let RndMan = empiresSoldiers[Math.round(Math.random() * 5)];
      if (!empiresTeamList.includes(RndMan)) {
        empiresTeamList.push(RndMan);
        i++;
      }
    }

    const ships = [9, 22, 48, 28, 22];
    const shipRnd = ships[Math.round(Math.random() * 4)];
    const healthRnd = Math.round(Math.random() * 300) + 200;
    const attackRnd = Math.round(Math.random() * 200) + 200;

    const life1 = health - attackRnd;
    const life2 = healthRnd - attack;
    let scores = (life1 - life2).toFixed(1);
    let result = scores > 0 ? 1 : 0;
    console.log(teamList);
    if (teamList.length === 0) {
      return <RestartBar />;
    } else {
      return (
        <div className="row mb2 test">
          <BattleTeamCard
            health={health}
            attack={attack}
            teamList={teamList}
            shipId={shipId}
            team={"rebel"}
          />
          <div className="col-md-2">
            <ResultBar result={result} scores={scores} />
          </div>
          <BattleTeamCard
            health={healthRnd}
            attack={attackRnd}
            teamList={empiresTeamList}
            shipId={shipRnd}
            team={"empire"}
          />
        </div>
      );
    }
  }
}
