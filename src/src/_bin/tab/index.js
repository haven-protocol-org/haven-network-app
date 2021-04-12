// Library Imports
import React from "react";

// Relative Imports
import { Container, Item } from "./styles";

const Tab = ({
  firstTabLabel,
  secondTabLabel,
  thirdTabLabel,
  firstTabState,
  secondTabState,
  thirdTabState,
  firstTabClickEvent,
  secondTabClickEvent,
  thirdTabClickEvent,
}) => {
  return (
    <Container>
      <Item onClick={firstTabClickEvent} active={firstTabState}>
        {firstTabLabel}
      </Item>
      <Item onClick={secondTabClickEvent} active={secondTabState}>
        {secondTabLabel}
      </Item>
      <Item onClick={thirdTabClickEvent} active={thirdTabState}>
        {thirdTabLabel}
      </Item>
    </Container>
  );
};

export default Tab;
