// Library Imports
import React, { Component } from "react";

// Relative Imports
import { Container } from "./styles";
import Header from "../../components/header/index.js";

class Assets extends Component {
  render() {
    return (
      <Container>
        <Header title="Assets" description="Assets" />
      </Container>
    );
  }
}

export default Assets;
