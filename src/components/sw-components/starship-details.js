import React from "react";
import ItemDetails from "../Item-details";
import { withSwapiService } from "../HOC-helpers";
import { Record } from "../Item-details/item-details";

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

export default withSwapiService(StarshipDetails);
