import styled from "styled-components";
import { dark } from "../../constants/themes.js";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  background: palegreen;
  font-family: "Inter", sans-serif;
  display: flex;
  padding-bottom: 40px;
  postition: fixed;
`;

export const Page = styled.div`
  height: 100%;
  width: 100%;
  padding: 20px;
  display: grid;
  grid-gap: 20px;
  padding-bottom: 20px;
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
