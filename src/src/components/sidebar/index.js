// Library Imports
import React, { Component } from "react";

// Relative Imports
import { Container, Icon } from "./styles";

class SideBar extends Component {
  render() {
    return (
      <Container>
        <Icon to="/">Overview</Icon>
        <Icon to="/assets">Asset</Icon>
        <Icon to="/">History</Icon>
        <Icon to="/">Protocol</Icon>
      </Container>
    );
  }
}

export default SideBar;
