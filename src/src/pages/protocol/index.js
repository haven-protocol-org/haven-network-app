// Library Imports
import React from "react";

// Relative Imports
import { Container } from "./styles";
import Header from "../../components/header/index.js";
import Blockchain from "../../components/tables/blockchain";

const Assets = () => {
  return (
    <Container>
      <Header title="Protocol" description="Basic protocol statistics" />
      <Blockchain />
    </Container>
  );
};

export default Assets;
