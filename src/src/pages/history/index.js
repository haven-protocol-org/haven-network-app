// Library Imports
import React, { Component } from "react";

// Relative Imports
import { Container } from "./styles";
import Header from "../../components/header/index.js";
import AllTimeHighs from "../../components/tables/allTimeHighs";
import AllTimeLows from "../../components/tables/allTimeLows";
import MarketData from "../../components/tables/marketData";

class History extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Container>
        <Header title="History" description="Historical pricing information" />
        <MarketData />
        <AllTimeHighs />
        <AllTimeLows />
      </Container>
    );
  }
}

export default History;
