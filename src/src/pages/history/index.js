// Library Imports
import React from "react";

// Relative Imports
import { Container } from "./styles";
import Blocks from "../../_layout/_blocks/index.js";
import Header from "../../components/header/index.js";
import AllTimeHighs from "../../components/tables/allTimeHighs";
import AllTimeLows from "../../components/tables/allTimeLows";
import MarketData from "../../components/tables/marketData";

const History = () => {
  return (
    <Container>
      <Header title="History" description="..." />
      <MarketData />
      <AllTimeHighs />
      <AllTimeLows />
    </Container>
  );
};

export default History;
