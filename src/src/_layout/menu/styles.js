import styled from "styled-components";
import media from "../../constants/media.js";
import { dark } from "../../constants/themes.js";
import { Link } from "react-router-dom";

export const Container = styled.div`
  height: 100%;
  background: ${dark.body.foreground};

  ${media.tablet`
    height: 64px;
    width: 100vw;
    bottom: 0;
    position: fixed;
    display: flex;

  `}
`;

export const List = styled.div`
  margin-top: 65px;
  position: fixed;
  width: 80px;

  ${media.tablet`
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-top: 0px;

  `}
`;

export const Item = styled(Link)`
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${dark.body.border};
  font-size: 12px;
  color: white;
  text-decoration: none;

  ${media.tablet`
    width: 25%;
    height: 64px;
  `};

  &:hover {
    background: red;
    cursor: pointer;
  }
`;
