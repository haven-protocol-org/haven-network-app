// Library Imports
import React, { Component } from "react";

// Relative Imports
import { Container, Haven, Logo, Brand } from "./styles.js";
import Icon from "../../assets/logo/haven.svg";

class Navigation extends Component {
  render() {
    const auth = this.props.isLoggedIn;

    return (
      <Container>
        <Brand to={auth === true ? "/wallet/assets" : "/"}>
          <Logo src={Icon} />
          <Haven>HAVEN </Haven>
        </Brand>
      </Container>
    );
  }
}

export default Navigation;
