import styled from "styled-components";
import media from "../../constants/media.js";
import { dark } from "../../constants/themes.js";

export const Container = styled.div`
  background: ${dark.body.background};
  display: grid;
  grid-template-columns: 80px 1fr;
  height: 100vh;

  ${media.tablet`
    display: flex;
    flex-direction: column;
    padding-bottom: 64px;
    justify-content: flex-start;
  `}
`;
