import React, { Fragment } from "react";
import MyProgressBar from "../Bars/myProgressBar";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const MainPage = ({
  health,
  attack,
  btnStatus,
  titleStatus,
  PeoplePageItem,
  StarshipsPageItem,
}) => {
  return (
    <Fragment>
      <div className="row mb2">
        <div className="col-md-1"></div>
        <div className="col-md-10">
          <div className="Header">
            <div className="BarsHeader">
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
};

export default MainPage;
