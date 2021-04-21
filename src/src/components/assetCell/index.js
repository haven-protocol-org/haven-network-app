// Library Imports
import React from "react";

// Relative Imports
import { Container, Row, Title, Description } from "./styles";

const AssetCell = ({ name, ma, supply, ticker, marketcap }) => {
  return (
    <Container to={`/assets/${ticker}`}>
      <Row>
        <Title>{name}</Title>
        <Title>${ma.toFixed(2)}</Title>
      </Row>
      <Row>
        <Description>{supply.toFixed(2)}</Description>
        <Description>{marketcap.toFixed(2)}</Description>
      </Row>
    </Container>
  );
};

export default AssetCell;
