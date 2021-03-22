import styled from "styled-components";
import { dark } from "../../../constants/themes.js";
import media from "../../../constants/media.js";

export const Grid = styled.div`
  display: grid;
  grid-gap: 20px;
  width: auto;
  display: none;

  ${media.mobile`
    display: inline;
    grid-template-columns: 50% 50%;
    grid-template-rows: 50% 50%;
  `};
`;

export const Statistic = styled.div`
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;

  background: ${dark.body.foreground};
  border: 1px solid ${dark.body.border};
`;

export const Data = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.div`
  font-size: 13px;
  line-height: 1.5em;
  color: ${dark.type.secondary};
  font-family: "Inter", sans-serif;
`;

export const Value = styled.div`
  font-size: 24px;
  line-height: 1.5em;
  font-weight: 600;
  color: ${dark.type.primary};
  font-family: "Inter", sans-serif;
`;
