// Library Imports
import React from "react";

// Relative Imports
import { Container, Row, Title, Description } from "./styles";

const ConversionsCell = ({
  conversion_date,
  conversion_fee,
  conversion_asset,
  conversion_price,
  minted_amount,
  minted_asset,
  burned_amount,
  burned_asset,
  unlock_date,
}) => {
  return (
    <Container>
      <Row>
        <Title>{minted_amount}</Title>
        <Title>{conversion_date}</Title>
      </Row>
      <Row>
        <Description>Conversion Fee</Description>
        <Description>{`${conversion_fee} ${conversion_asset}`}</Description>
      </Row>
      <Row>
        <Description>Conversion Cost</Description>
        <Description>${conversion_fee * conversion_price}</Description>
      </Row>
      <Row>
        <Description>Burned Asset</Description>
        <Description>{`${burned_amount} ${burned_asset}`}</Description>
      </Row>
      <Row>
        <Description>Unlock Time</Description>
        <Description>{unlock_date}</Description>
      </Row>
    </Container>
  );
};

export default ConversionsCell;
