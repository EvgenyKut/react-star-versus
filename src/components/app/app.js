import React, { Component } from "react";
import "./app.css";
import SwapiService from "../../services/swapi-service";
import { SwapiServiceProvider } from "../Swapi-service-context";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import ErrorIndicator from "../Modules/error-indicator";
import {
  WelcomePage,
  PeoplePage,
  StarshipsPage,
  BattlePage,
  MainPage,
} from "../Pages";

export default class App extends Component {
  swapiService = new SwapiService();

  state = {
    mass: 0,
    health: 0,
    attack: 0,
    length: 0,
    selectedPerson: 1,
    selectedStarship: 10,
    soldiersList: [],
    shipsList: [],
    personList: null,
    starshipsList: null,
    score: 3,
    scoreShips: 1,
    hasError: false,
  };

  componentDidMount() {
    this.swapiService.getAllPeople().then((personList) => {
      this.setState({ personList });
    });

    this.swapiService.getAllStarships().then((starshipsList) => {
      this.setState({ starshipsList });
    });
  }

  onPersonSelected = (id) => {
    this.setState({ selectedPerson: id });
  };

  onStarshipSelected = (id) => {
    this.setState({ selectedStarship: id });
  };

  onParamUp = (param, allList, activeList) => {
    const skill = allList
      .map((item) => {
        return activeList.includes(item.id) ? item[param] : null;
      })
      .reduce((res, item) => {
        return (res += +item);
      }, 0);
    return skill;
  };

  onUpdate = (activeList, allItemsList, health, attack, id, score, max) => {
    if (!activeList.includes(id)) {
      let newArr = [...activeList, id];
      let newScore = score;
      newScore--;
      if (newArr.length > max) {
        newArr = newArr.slice(1);
        newScore = 0;
      }
      let newAttack = attack;
      newAttack = this.onParamUp("mass", allItemsList, newArr);
      let newHealth = health;
      newHealth = this.onParamUp("length", allItemsList, newArr);
      return { newAttack, newHealth, newArr, newScore };
    }
  };

  onSelect = (id) => {
    const max = 3;
    this.setState(({ soldiersList, score, health, personList, attack }) => {
      if (!soldiersList.includes(id)) {
        const { newAttack, newHealth, newArr, newScore } = this.onUpdate(
          soldiersList,
          personList,
          health,
          attack,
          id,
          score,
          max
        );
        return {
          soldiersList: newArr,
          score: newScore,
          health: newHealth,
          attack: newAttack,
        };
      }
    });
  };

  onShipSelect = (id) => {
    this.setState(({ starshipsList, shipsList, scoreShips, mass, length }) => {
      const max = 1;
      if (!shipsList.includes(id)) {
        const { newAttack, newHealth, newArr, newScore } = this.onUpdate(
          shipsList,
          starshipsList,
          mass,
          length,
          id,
          scoreShips,
          max
        );

        return {
          shipsList: newArr,
          scoreShips: newScore,
          mass: newAttack,
          length: newHealth,
        };
      }
    });
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    const {
      mass,
      attack,
      health,
      length,
      soldiersList,
      shipsList,
      score,
      scoreShips,
      selectedPerson,
      selectedStarship,
      hasError,
    } = this.state;

    const btnStatus = score === 0 && scoreShips === 0 ? false : true;
    const titleStatus = btnStatus ? "Choose team and ship!" : null;

    if (hasError) {
      return <ErrorIndicator />;
    }

    const PeoplePageItem = (
      <PeoplePage
        onPersonSelected={this.onPersonSelected}
        onSelect={this.onSelect}
        soldiersList={soldiersList}
        itemId={selectedPerson}
        score={score}
      />
    );

    const StarshipsPageItem = (
      <StarshipsPage
        onStarshipSelected={this.onStarshipSelected}
        onShipSelect={this.onShipSelect}
        shipsList={shipsList}
        itemId={selectedStarship}
        scoreShips={scoreShips}
      />
    );

    const BattleFrontItem = (
      <BattlePage
        attack={attack + length}
        health={health + mass}
        shipId={shipsList}
        teamList={soldiersList}
        names={this.state.names}
      />
    );

    const MainPageItem = (
      <MainPage
        attack={attack + mass}
        health={health + length}
        titleStatus={titleStatus}
        btnStatus={btnStatus}
        StarshipsPageItem={StarshipsPageItem}
        PeoplePageItem={PeoplePageItem}
      />
    );

    return (
      <SwapiServiceProvider value={this.swapiService}>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={WelcomePage} exact />
            <Route
              path="/Chose_a_team"
              render={() => <div>{MainPageItem}</div>}
              exact
            />
            <Route
              path="/battle"
              render={() => <div>{BattleFrontItem}</div>}
              exact
            />
            <Redirect to="/" />
          </Switch>
        </BrowserRouter>
      </SwapiServiceProvider>
    );
  }
}
