// Library Imports
import React, { Component } from "react";

// Relative Imports
import { Container } from "./styles";

// Relative Imports
import Header from "../../components/header/index.js";
import Blockchain from "../../components/tables/blockchain";

class Assets extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <Container>
        <Header title="Protocol" description="Basic protocol statistics" />
        <Blockchain />
      </Container>
    );
  }
}

export default Assets;
