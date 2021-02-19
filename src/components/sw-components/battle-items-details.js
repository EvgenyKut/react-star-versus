import React from "react";
import { withSwapiService } from "../HOC-helpers";
import PhotoBox from "../BattlePageComponents/battle_photo_box";

const BattleItemsDetails = ({ itemId, swapiService, item }) => {
  const {
    getPerson,
    getStarship,
    getPersonImage,
    getStarshipImage,
  } = swapiService;
  const url = item === "person" ? getPersonImage : getStarshipImage;
  const data = item === "person" ? getPerson : getStarship;

  return (
    <PhotoBox itemId={itemId} getImageUrl={url} getDataItem={data}></PhotoBox>
  );
};

export default withSwapiService(BattleItemsDetails);
