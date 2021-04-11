import styled from "styled-components";
import media from "../constants/media.js";
import { dark } from "../constants/themes.js";

export const Container = styled.div`
  display: grid;
  background: ${dark.body.background};
  grid-template-columns: 80px 1fr;
  position: fixed;
  width: 100%;

  ${media.tablet`
    height: 100vh;
    display: flex;
    flex-direction: column-reverse;

 `};
`;
