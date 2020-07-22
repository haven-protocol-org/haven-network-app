// Library Imports
import React, { Component } from "react";

// Relative Imports
import { Container, Haven, Logo, Brand, Tag } from "./styles.js";
import Icon from "../../assets/logo/haven.svg";

class Navigation extends Component {
  render() {
    return (
      <Container>
        <Brand to={"/"}>
          <Logo src={Icon} />
          <Haven>HAVEN </Haven>
        </Brand>
      </Container>
    );
  }
}

export default Navigation;
