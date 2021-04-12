// Library Imports
import React from "react";

// Relative Imports
import { Container, Back, Row, Title, Description } from "./styles";

const Header = ({ title, description, back = false }) => {
  return (
    <Container>
      <Row>
        {back && <Back to="/assets">« Back</Back>}
        <Title>{title}</Title>
      </Row>
      <Description>{description}</Description>
    </Container>
  );
};

export default Header;
