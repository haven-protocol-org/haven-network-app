// Library Imports
import React from "react";

// Relative Imports
import { Container, Haven, Logo, Brand } from "./styles.js";
import Icon from "../../assets/logo/haven.svg";

const Navigation = () => {
  return (
    <Container>
      <Brand href="https://havenprotocol.org/">
        <Logo src={Icon} />
        <Haven>HAVEN</Haven>
      </Brand>
    </Container>
  );
};

export default Navigation;
