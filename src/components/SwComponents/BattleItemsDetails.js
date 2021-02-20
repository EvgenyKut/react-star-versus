import React from "react";
import { WithSwapiService } from "../../HocHelpers";
import PhotoBox from "../BattlePhotoBox";

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

export default WithSwapiService(BattleItemsDetails);
