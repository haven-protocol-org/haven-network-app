// Library Imports
import React from "react";

// Relative Imports
import { Container, Row, Title, Description } from "./styles";

const ConversionsCell = ({ amount, fee, date, unlocks }) => {
  return (
    <Container>
      <Row>
        <Title>{amount.toFixed(2)}</Title>
        <Title>${fee.toFixed(2)}</Title>
      </Row>
      <Row>
        <Description>{date}</Description>
        <Description>{unlocks}</Description>
      </Row>
    </Container>
  );
};

export default ConversionsCell;
