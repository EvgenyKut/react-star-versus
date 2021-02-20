import React, { Component } from "react";
import "./App.css";
import SwapiService from "../../services/swapi-service";
import { SwapiServiceProvider } from "../../SwapiServiceContext";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import onUpdate from "../../Functions";
import ErrorIndicator from "../ErrorIndicator";

import {
  WelcomePage,
  PeoplePage,
  StarshipsPage,
  BattlePage,
  MainPage,
} from "../Pages";
const maxSoldiers = 3;
const maxShips = 1;

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

  onSelect = (id) => {
    this.setState(({ soldiersList, score, health, personList, attack }) => {
      if (soldiersList.includes(id)) {
        return;
      }

      const { newAttack, newHealth, newArr, newScore } = onUpdate(
        soldiersList,
        personList,
        health,
        attack,
        id,
        score,
        maxSoldiers
      );
      return {
        soldiersList: newArr,
        score: newScore,
        health: newHealth,
        attack: newAttack,
      };
    });
  };

  onShipSelect = (id) => {
    this.setState(({ starshipsList, shipsList, scoreShips, mass, length }) => {
      if (shipsList.includes(id)) {
        return;
      }
      const { newAttack, newHealth, newArr, newScore } = onUpdate(
        shipsList,
        starshipsList,
        mass,
        length,
        id,
        scoreShips,
        maxShips
      );

      return {
        shipsList: newArr,
        scoreShips: newScore,
        mass: newAttack,
        length: newHealth,
      };
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

    const btnDisabled = score === 0 && scoreShips === 0 ? false : true;

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
        btnStatus={btnDisabled}
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
