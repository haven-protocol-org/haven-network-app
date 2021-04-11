import styled from "styled-components";
import media from "../../constants/media.js";
import { dark } from "../../constants/themes.js";

export const Container = styled.div`
  background: ${dark.body.background};
  display: grid;
  grid-template-columns: 80px 1fr;

  ${media.tablet`
    display: flex;
    flex-direction: column-reverse;
    padding-bottom: 64px;
  `}
`;
