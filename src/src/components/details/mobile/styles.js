import styled from "styled-components";
import { dark } from "../../../constants/themes.js";
import media from "../../../constants/media.js";

export const Grid = styled.div`
  display: grid;
  grid-gap: 20px;
  width: auto;
  display: none;
  overflow: hidden;

  ${media.mobile`
    display: inline;
  `};
`;

export const Statistic = styled.div`
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
  overflow: hidden;
  background: ${dark.body.foreground};
  border: 1px solid ${dark.body.border};

  &:nth-child(1) {
    border-bottom: none;
    border-radius: 4px 4px 0px 0px;
  }
  &:nth-child(2) {
    border-radius: 0px 0px 4px 4px;
  }
`;

export const Data = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;

  &:nth-child(1) {
    border-right: 1px solid ${dark.body.border};
  }
`;

export const Label = styled.div`
  font-size: 11px;
  line-height: 1.5em;
  color: ${dark.type.secondary};
  font-family: "Inter", sans-serif;
`;

export const Value = styled.div`
  font-size: 18px;
  line-height: 1.5em;
  font-weight: 600;
  color: ${dark.type.primary};
  font-family: "Inter", sans-serif;
`;
