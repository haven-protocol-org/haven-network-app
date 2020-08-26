import styled from "styled-components";
import { dark } from "../../constants/themes.js";
import media from "../../constants/media.js";

export const Container = styled.div`
  height: auto;
  width: 100vw;
  padding-top: 60px;
  background: ${dark.body.background};
  font-family: "Inter", sans-serif;
  display: flex;
  justify-content: center;
  overflow: scroll;
  padding-bottom: 40px;
`;

export const Page = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1140px;
  padding: 20px;
  display: grid;
  grid-gap: 20px;
  padding-bottom: 20px;
`;

export const Grid = styled.div`
  display: grid;
  grid-gap: 20px;
  height: auto;
  width: 100%;
  grid-template-columns: repeat(4, 1fr);

  ${media.tablet`
    grid-template-columns: 1fr 1fr;
  `};
`;

export const ChartContainer = styled.div`
  display: grid;
  grid-gap: 20px;
  height: auto;
  width: 100%;
  background: pink;
  grid-template-columns: 1fr;

  ${media.tablet`
    grid-template-columns:  1fr;
  `};
`;

export const Statistic = styled.div`
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
  border-radius: 4px;
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
