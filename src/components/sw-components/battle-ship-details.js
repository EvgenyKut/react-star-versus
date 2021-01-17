import React from "react";

import { withSwapiService } from "../hoc-helpers";
import PhotoBox from "../BattlePageComponents/battle_photo_box";

const BattleShipDetails = ({ shipId, swapiService }) => {
  const { getStarshipImage, getStarship } = swapiService;
  return (
    <PhotoBox
      shipId={shipId}
      getImageUrl={getStarshipImage}
      getDataItem={getStarship}
    ></PhotoBox>
  );
};

export default withSwapiService(BattleShipDetails);
