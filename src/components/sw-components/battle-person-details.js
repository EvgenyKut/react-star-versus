import React from "react";

import { withSwapiService } from "../hoc-helpers";
import PhotoBox from "../BattlePageComponents/battle_photo_box";

const BattlePersonDetails = ({ personId, swapiService }) => {
  const { getPersonImage, getPerson } = swapiService;

  return (
    <PhotoBox
      shipId={personId}
      getImageUrl={getPersonImage}
      getDataItem={getPerson}
    ></PhotoBox>
  );
};

export default withSwapiService(BattlePersonDetails);
