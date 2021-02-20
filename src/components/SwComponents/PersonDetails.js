import React from "react";

import ItemDetails from "../ItemDetails";
import { WithSwapiService } from "../../HocHelpers";
import { Record } from "../ItemDetails/ItemDetails";

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

export default WithSwapiService(PersonDetails);
