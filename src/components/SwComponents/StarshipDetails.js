import React from "react";
import ItemDetails from "../ItemDetails";
import { WithSwapiService } from "../../HocHelpers";
import { Record } from "../ItemDetails/ItemDetails";

const StarshipDetails = ({ itemId, swapiService }) => {
  const { getStarshipImage, getStarship } = swapiService;
  return (
    <ItemDetails
      itemId={itemId}
      getDataItem={getStarship}
      getImageUrl={getStarshipImage}
    >
      <Record field="hyperdrive" label="Hyperdrive Rating: " />
      <Record field="class" label="Class: " />
    </ItemDetails>
  );
};

export default WithSwapiService(StarshipDetails);
