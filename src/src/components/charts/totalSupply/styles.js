import styled from "styled-components";
import { dark } from "../../../constants/themes.js";

export const Container = styled.div`
  height: auto;
  width: 100%;
  background: ${dark.body.foreground};
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 4px;
  border: 1px solid ${dark.body.border};
  padding-bottom: 20px;
`;

export const Header = styled.div`
  height: auto;
  padding: 20px;
  border-bottom: 1px solid ${dark.body.border};
  font-family: "Inter", san-serif;
  color: ${dark.type.primary};
  font-weight: 600;
`;
