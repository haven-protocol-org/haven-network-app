import styled from "styled-components";
import media from "../../constants/media.js";
import { dark } from "../../constants/themes.js";
import { NavLink } from "react-router-dom";

const activeClassName = "selected";

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
  margin-top: calc(100vh / 3);
  position: fixed;
  width: 80px;

  ${media.tablet`
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-top: 0px;

  `}
`;

export const Icon = styled.img`
  height: 28px;
  width: 28px;
  margin-bottom: 6px;
`;

export const Item = styled(NavLink).attrs({
  activeClassName,
})`
  height: 80px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${dark.body.border};
  font-size: 12px;
  font-family: "Inter";
  color: ${dark.type.secondary};
  text-decoration: none;
  border-left: none;

  &:nth-child(1) {
    border-top: 1px solid ${dark.body.border};
  }

  &:hover {
    cursor: pointer;
  }

  ${media.tablet`
    width: 25%;
    height: 64px;
    border-top: 1px solid ${dark.body.border};

    ${media.tablet`
      color: ${dark.type.secondary};
    `}

  `};

  &.${activeClassName} {
    color: ${dark.type.primary};
    border-left: 4px solid ${dark.button.primary};

    ${media.tablet`
      border-top: 2px solid ${dark.button.primary};
      border-left: none;

    `}

    &:hover {
      cursor: pointer;
      transition: 250ms;
      color: ${dark.type.primary};
    }
  }
`;
