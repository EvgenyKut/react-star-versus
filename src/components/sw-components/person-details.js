import React from "react";

import ItemDetails from "../Item-details";
import { withSwapiService } from "../HOC-helpers";
import { Record } from "../Item-details/item-details";

const PersonDetails = ({ itemId, swapiService }) => {
  const { getPersonImage, getPerson } = swapiService;
  return (
    <ItemDetails
      itemId={itemId}
      getDataItem={getPerson}
      getImageUrl={getPersonImage}
    >
      <Record field="birth" label="Birth: " />
      <Record field="length" label="Height:" />
    </ItemDetails>
  );
};

export default withSwapiService(PersonDetails);
