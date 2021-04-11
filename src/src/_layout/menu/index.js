// Library Imports
import React from "react";

// Relative Imports
import { Container, List, Item } from "./styles";

const Menu = () => {
  return (
    <Container>
      <List>
        <Item to="/overview">Insights</Item>
        <Item to="/assets">Assets</Item>
        <Item to="/protocol">Protocol</Item>
        <Item to="/history">History</Item>
      </List>
    </Container>
  );
};

export default Menu;
