import React, { Component } from "react";
import "./BattleFront.css";
import BattleTeamCard from "../BattleTeamCard";
import ResultBar from "../ResultBar";
import RestartBar from "../RestartBar";

export default class Battlefront extends Component {
  render() {
    const { health, attack, teamList, shipId } = this.props;
    const empiresSoldiers = [4, 11, 12, 67, 21, 44];
    const empiresTeamList = [];
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

    const lifeFirst = health - attackRnd;
    const lifeSecond = healthRnd - attack;
    const scores = (lifeFirst - lifeSecond).toFixed(0);
    const result = scores > 0 ? 1 : 0;

    if (teamList.length === 0) {
      return <RestartBar />;
    } else {
      return (
        <div>
          <div className="row mb2 test">
            <BattleTeamCard
              health={health}
              attack={attack}
              teamList={teamList}
              itemId={shipId}
              team={"rebel"}
            />
            <div className="col-md-2">
              <ResultBar result={result} scores={scores} />
            </div>
            <BattleTeamCard
              health={healthRnd}
              attack={attackRnd}
              teamList={empiresTeamList}
              itemId={shipRnd}
              team={"empire"}
            />
          </div>
          <RestartBar restart={true} />
        </div>
      );
    }
  }
}
