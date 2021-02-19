import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./welcomePage.css";

const WelcomePage = () => {
  return (
    <div className="welcomeArea">
      <span className="welcomeText">
        {" "}
        It is a period of civil war. Rebel spaceships, striking from a hidden
        base, have won their first victory against the evil Galactic Empire.
        During the battle, Rebel spies managed to steal secret plans to the
        Empire's ultimate weapon, the DEATH STAR, an armored space station with
        enough power to destroy an entire planet. Pursued by the Empire's
        sinister agents, Princess Leia races home aboard her starship. Choose
        the strongest team, start battle and win!
      </span>
      <div className="goBtn">
        <Link to="/chose_a_team" className="link">
          <div className="StartBtn">
            <Button className="StartBtn" variant="warning" size="lg">
              Let's go!
            </Button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default WelcomePage;
