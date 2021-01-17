import React from "react";

import ItemDetails from "../item-details";
import { Record } from "../item-details/item-details";
import { withSwapiService } from "../hoc-helpers";

const PersonDetails = ({ itemId, swapiService }) => {
  const { getPersonImage, getPerson } = swapiService;
  return (
    <ItemDetails
      itemId={itemId}
      getImageUrl={getPersonImage}
      getDataItem={getPerson}
    >
      <Record field="birth" label="Birth" />
      <Record field="length" label="Height" />
    </ItemDetails>
  );
};

export default withSwapiService(PersonDetails);
