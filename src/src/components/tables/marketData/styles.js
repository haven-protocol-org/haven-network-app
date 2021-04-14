import styled from "styled-components";
import { dark } from "../../../constants/themes.js";

export const Container = styled.div`
  background: ${dark.body.foreground};
  border: 1px solid ${dark.body.border};
  border-radius: 4px;
  grid-template-columns: repeat(1fr);
`;

export const Header = styled.div`
  padding: 20px;
  border-bottom: 1px solid ${dark.body.border};
  font-family: "Inter", san-serif;
  color: ${dark.type.primary};
  font-weight: 600;
`;

export const Cell = styled.div`
  height: auto;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${dark.body.border};

  &:last-child {
    border-bottom: none;
  }
`;

export const Key = styled.div`
  font-size: 14px;
  color: ${dark.type.secondary};
`;

export const Value = styled.div`
  font-size: 14px;
  color: ${dark.type.primary};
`;
