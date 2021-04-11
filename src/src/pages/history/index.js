// Library Imports
import React from "react";

// Relative Imports
import { Container } from "./styles";
import Blocks from "../../_layout/_blocks/index.js";
import Header from "../../components/header/index.js";

const Assets = () => {
  return (
    <Container>
      <Header title="History" description="..." />
      <Blocks />
      <Blocks />
      <Blocks />
      <Blocks />
    </Container>
  );
};

export default Assets;
