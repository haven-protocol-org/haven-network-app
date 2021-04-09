import styled from "styled-components";
import { dark } from "../../constants/themes.js";
import { Link } from "react-router-dom";
import media from "../../constants/media.js";

export const Container = styled.div`
  background: ${dark.body.foreground};
  margin-top: 64px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${media.tablet`
    height: 60px;
    display: flex;
    flex-direction: row;
  `};
`;

export const Icon = styled(Link)`
  width: 100%;
  height: 150px;
  background: ${dark.body.foreground};
  border-top: 1px solid ${dark.body.border};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${dark.type.primary};
  text-decoration: none;

  &:hover {
    background: ${dark.body.background};
    cursor: pointer;
  }

  ${media.tablet`
    height: 60px;
  `};
`;
