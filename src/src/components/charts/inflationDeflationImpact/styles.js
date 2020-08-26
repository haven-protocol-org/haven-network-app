import styled from "styled-components";
import { dark } from "../../../constants/themes.js";

export const Container = styled.div`
  height: 500px;
  width: 100%;
  background: ${dark.body.foreground};
  border-radius: 4px;
  border: 1px solid ${dark.body.border};
`;

export const Header = styled.div`
  height: auto;
  padding: 20px;
  border-bottom: 1px solid ${dark.body.border};
  font-family: "Inter", san-serif;
  color: ${dark.type.primary};
  font-weight: 600;
`;

export const Placeholder = styled.div`
  display: flex;
  height: auto;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: #9a9a9a;
  padding-top: 200px;
`;
