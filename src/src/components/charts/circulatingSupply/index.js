// Library Imports
import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { Line } from "react-chartjs-2";

// Relative Imports
import { Container, Header } from "./styles";

class CirculatingSupply extends Component {
  render() {
    console.log("CS DATA", this.props.data);
    return (
      <Container>
        <Header>Circulating Supply</Header>
        <Line />
      </Container>
    );
  }
}

CirculatingSupply.propTypes = {};

export default CirculatingSupply;
