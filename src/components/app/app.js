import React, { Component, Fragment } from "react";
import "./app.css";
import SwapiService from "../../services/swapi-service";
import { SwapiServiceProvider } from "../swapi-service-context";
import { Button } from "react-bootstrap";
import MyProgressBar from "../blocks/progressBar";
import { WelcomePage, PeoplePage, StarshipsPage, BattlePage } from "../Pages";
import ErrorIndicator from "../blocks/error-indicator";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from "react-router-dom";

export default class App extends Component {
  swapiService = new SwapiService();

  maxId = 100;
  state = {
    selectedPerson: 1,
    selectedStarship: 10,
    soldiersList: [],
    shipsList: [],
    personList: null,
    starshipsList: null,
    score: 3,
    scoreShips: 1,
    person: {},
    names: {},
    healthArr: [],
    healthObj: {},
    massObj: {},
    massArr: [],
    lengthArr: [],
    lengthObj: {},
    attackObj: {},
    attackArr: [],
    health: 0,
    attack: 0,
    mass: 0,
    length: 0,
    hasError: false,
  };

  componentDidMount() {
    this.swapiService.getAllPeople().then((personList) => {
      let newPersonList = [...personList];
      let obj1 = {};
      let obj2 = {};
      let names = {};
      newPersonList.forEach((item) => {
        obj1[item.id] = item.length;
      });
      newPersonList.forEach((item) => {
        obj2[item.id] = item.mass;
      });
      newPersonList.forEach((item) => {
        names[item.id] = item.name;
      });
      this.setState({ personList, healthObj: obj1, attackObj: obj2, names });
    });

    this.swapiService.getAllStarships().then((starshipsList) => {
      let newStarshipsList = [...starshipsList];
      let obj3 = {};
      let obj4 = {};
      newStarshipsList.forEach((item) => {
        obj3[item.id] = item.mass;
      });
      newStarshipsList.forEach((item) => {
        obj4[item.id] = item.length;
      });
      this.setState({ starshipsList, massObj: obj3, lengthObj: obj4 });
    });
  }

  onPersonSelected = (id) => {
    this.setState({ selectedPerson: id });
  };

  onStarshipSelected = (id) => {
    this.setState({ selectedStarship: id });
  };
  onSelect = (id, soldiersList) => {
    this.setState(
      ({
        soldiersList,
        score,
        health,
        personList,
        healthObj,
        healthArr,
        attackObj,
        attackArr,
        attack,
      }) => {
        if (!soldiersList.includes(id)) {
          let newScore = score;
          let newArr = [...soldiersList, id];
          newScore--;
          if (newArr.length > 3) {
            newArr = newArr.slice(1);
            newScore = 0;
          }
          let newHealthArr = [...healthArr];
          newArr.forEach((item) => {
            if (!newHealthArr.includes(healthObj[item])) {
              newHealthArr.push(healthObj[item]);
              if (newHealthArr.length > 3) {
                newHealthArr = newHealthArr.slice(1);
              }
            }
          });
          let newHealth = health;
          newHealth = newHealthArr.reduce((result, item) => {
            return (result += +item);
          }, 0);

          let newAttackArr = [...attackArr];
          newArr.forEach((item) => {
            if (!newAttackArr.includes(attackObj[item])) {
              newAttackArr.push(attackObj[item]);
              if (newAttackArr.length > 3) {
                newAttackArr = newAttackArr.slice(1);
              }
            }
          });
          let newAttack = attack;
          newAttack = newAttackArr.reduce((result, item) => {
            return (result += +item);
          }, 0);

          return {
            soldiersList: newArr,
            score: newScore,
            healthArr: newHealthArr,
            health: newHealth,
            attack: newAttack,
          };
        }
      }
    );
  };

  onShipSelect = (id) => {
    this.setState(
      ({
        shipsList,
        scoreShips,
        mass,
        personList,
        massObj,
        massArr,
        lengthObj,
        lengthArr,
        length,
      }) => {
        if (!shipsList.includes(id)) {
          let newScore = scoreShips;
          let newArr = [...shipsList, id];
          newScore--;
          if (newArr.length > 1) {
            newArr = newArr.slice(1);
            newScore = 0;
          }
          let newMassArr = [...massArr];
          newArr.forEach((item) => {
            if (!newMassArr.includes(massObj[item])) {
              newMassArr.push(massObj[item]);
              if (newMassArr.length > 1) {
                newMassArr = newMassArr.slice(1);
              }
            }
          });
          let newMass = mass;
          newMass = newMassArr.reduce((result, item) => {
            return (result += +item);
          }, 0);

          let newLengthArr = [...lengthArr];
          newArr.forEach((item) => {
            if (!newLengthArr.includes(lengthObj[item])) {
              newLengthArr.push(lengthObj[item]);
              if (newLengthArr.length > 1) {
                newLengthArr = newLengthArr.slice(1);
              }
            }
          });
          let newLength = length;
          newLength = newLengthArr.reduce((result, item) => {
            return (result += +item);
          }, 0);

          return {
            shipsList: newArr,
            scoreShips: newScore,
            massArr: newMassArr,
            mass: newMass,
            length: newLength,
          };
        }
      }
    );
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    const {
      attack,
      health,
      soldiersList,
      hasError,
      score,
      selectedPerson,
      shipsList,
      mass,
      length,
      scoreShips,
      selectedStarship,
    } = this.state;

    if (hasError) {
      return <ErrorIndicator />;
    }

    const BattleFrontItem = (
      <BattlePage
        attack={attack + length}
        health={health + mass}
        shipId={shipsList}
        teamList={soldiersList}
        names={this.state.names}
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

    const PeoplePageItem = (
      <PeoplePage
        onPersonSelected={this.onPersonSelected}
        onSelect={this.onSelect}
        soldiersList={soldiersList}
        itemId={selectedPerson}
        score={score}
      />
    );
    const btnStatus =
      soldiersList.length >= 3 && shipsList.length >= 1 ? false : true;
    const titleStatus = btnStatus ? "Choose team and ship!" : null;
    const ChoosePage = (
      <Fragment>
        <div className="row mb2">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            <div className="Header">
              <div className="BarsHeader">
                <MyProgressBar
                  value={health + mass}
                  logo={"Health"}
                  dimension={"hp"}
                  variant={"success"}
                  max={600}
                />
                <MyProgressBar
                  value={attack + length}
                  logo={"Attack"}
                  dimension={"damage"}
                  variant={"danger"}
                  max={300}
                />
              </div>

              <div className="goBtn2">
                <div title={titleStatus}>
                  <Link to="/battle" className="link">
                    <Button
                      className="fightBtn"
                      variant="warning"
                      size="lg"
                      disabled={btnStatus}
                    >
                      Fight!
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="row mb2">{PeoplePageItem}</div>
        </div>
        <div className="row mb2">{StarshipsPageItem}</div>
      </Fragment>
    );

    return (
      <SwapiServiceProvider value={this.swapiService}>
        <Router>
          <Switch>
            <Route path="/" component={WelcomePage} exact />
            <Route
              path="/Chose_a_team"
              render={() => <div>{ChoosePage}</div>}
              exact
            />
            <Route
              path="/battle"
              render={() => <div>{BattleFrontItem}</div>}
              exact
            />
            <Redirect to="/" />
          </Switch>
        </Router>
      </SwapiServiceProvider>
    );
  }
}
