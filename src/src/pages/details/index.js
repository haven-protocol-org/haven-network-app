// Library Imports
import React, { Component } from "react";
import Header from "../../components/header/index.js";

// Relative Imports
import { Container } from "./styles";

class Details extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <Container>
        <Header title="Details" description="..." back />
      </Container>
    );
  }
}

export default Details;
