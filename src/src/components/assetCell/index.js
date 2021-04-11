// Library Imports
import React from "react";

// Relative Imports
import { Container, Row, Title, Description } from "./styles";

const AssetCell = ({ name, value }) => {
  return (
    <Container>
      <Row>
        <Title>{name}</Title>
        <Description>{value}</Description>
      </Row>
    </Container>
  );
};

export default AssetCell;
