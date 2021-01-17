import React from "react";

import ItemDetails from "../item-details";
import { Record } from "../item-details/item-details";
import { withSwapiService } from "../hoc-helpers";

const StarshipDetails = ({ itemId, swapiService }) => {
  const { getStarshipImage, getStarship } = swapiService;
  return (
    <ItemDetails
      itemId={itemId}
      getImageUrl={getStarshipImage}
      getDataItem={getStarship}
    >
      <Record field="hyperdrive" label="Hyperdrive Rating" />
      <Record field="class" label="Class" />
    </ItemDetails>
  );
};

export default withSwapiService(StarshipDetails);
