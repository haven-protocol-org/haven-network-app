// Library Imports
import React from "react";

// Relative Imports
import { Container } from "./styles";
import Blocks from "../../_layout/_blocks/index.js";
import Header from "../../components/header/index.js";
import CirculatingSupply from "../../components/charts/circulatingSupply";

const Assets = () => {
  return (
    <Container>
      <Header title="Overview" description="..." />
      <CirculatingSupply />
      <Blocks />
      <Blocks />
      <Blocks />
      <Blocks />
    </Container>
  );
};

export default Assets;
