// Library Imports
import React from "react";

// Relative Imports
import { Container } from "./styles";
import Blocks from "../../_layout/_blocks/index.js";
import Header from "../../components/header/index.js";

// Charts
import CirculatingSupply from "../../components/charts/circulatingSupply";
import InflationDeflationImpact from "../../components/charts/inflationDeflationImpact/index.js";

const Assets = () => {
  return (
    <Container>
      <Header title="Overview" description="..." />
      <CirculatingSupply />
      <InflationDeflationImpact />
      <Blocks />
      <Blocks />
      <Blocks />
    </Container>
  );
};

export default Assets;
