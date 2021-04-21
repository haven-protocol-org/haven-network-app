// Library Imports
import React, { useEffect, useState } from "react";

// Relative Imports
import { Container, List, Item, Icon } from "./styles";
import activity_inactive from "../../assets/menu/activity_inactive.svg";
import assets_inactive from "../../assets/menu/assets_inactive.svg";
import history_inactive from "../../assets/menu/history_inactive.svg";
import insights_inactive from "../../assets/menu/insights_inactive.svg";
import protocol_inactive from "../../assets/menu/protocol_inactive.svg";

import activity_active from "../../assets/menu/activity_active.svg";
import assets_active from "../../assets/menu/assets_active.svg";
import history_active from "../../assets/menu/history_active.svg";
import insights_active from "../../assets/menu/insights_active.svg";
import protocol_active from "../../assets/menu/protocol_active.svg";

const Menu = () => {
  const [index, setIndex] = useState(1);
  useEffect(() => {
    console.log("index", index);
  }, [index]);
  return (
    <Container>
      <List>
        <Item to="/insights" onClick={() => setIndex(1)}>
          <Icon src={index === 1 ? insights_active : insights_inactive} />
          Insights
        </Item>
        <Item to="/assets" onClick={() => setIndex(2)}>
          <Icon src={index === 2 ? assets_active : assets_inactive} />
          Assets
        </Item>
        <Item to="/activity" onClick={() => setIndex(3)}>
          <Icon src={index === 3 ? activity_active : activity_inactive} />
          Activity
        </Item>
        <Item to="/protocol" onClick={() => setIndex(4)}>
          <Icon src={index === 4 ? protocol_active : protocol_inactive} />
          Protocol
        </Item>
        <Item to="/history" onClick={() => setIndex(5)}>
          <Icon src={index === 5 ? history_active : history_inactive} />
          History
        </Item>
      </List>
    </Container>
  );
};

export default Menu;
