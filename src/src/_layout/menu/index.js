// Library Imports
import React from "react";

// Relative Imports
import { Container, List, Item, Icon } from "./styles";
import compass from "../../assets/icons/compass.svg";
import home from "../../assets/icons/home.svg";
import protocol from "../../assets/icons/protocol.svg";
import assets from "../../assets/icons/assets.svg";

const Menu = () => {
  return (
    <Container>
      <List>
        <Item to="/overview">
          <Icon src={home} />
          Insights
        </Item>
        <Item to="/assets">
          <Icon src={assets} />
          Assets
        </Item>
        <Item to="/protocol">
          <Icon src={protocol} />
          Protocol
        </Item>
        <Item to="/history">
          <Icon src={compass} />
          History
        </Item>
      </List>
    </Container>
  );
};

export default Menu;
