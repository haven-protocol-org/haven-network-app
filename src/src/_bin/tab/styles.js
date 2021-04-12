import styled from "styled-components";
import { dark } from "../../constants/themes.js";

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 42px;
  grid-column: 1;
  width: auto;
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid ${(props) => dark.body.border};
  background: ${(props) => dark.body.foreground};
`;

export const Item = styled.div`
  height: 100%;
  width: 50%;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${(props) =>
    props.active ? `${dark.type.primary}` : `${dark.type.secondary}`};
  background: ${(props) =>
    props.active ? `${dark.button.primary}` : `${dark.body.foreground}`};
  transition: 500ms;

  &:hover {
    background: ${(props) =>
      props.active
        ? `${dark.button.primary_hover}`
        : `${dark.body.foreground}`};
  }
  transition: 500ms;
`;
