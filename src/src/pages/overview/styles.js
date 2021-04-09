import styled from "styled-components";
import media from "../../constants/media.js";

export const Container = styled.div`
  margin-top: 64px;
`;

export const Wrapper = styled.div`
  background: palegreen;
  color: white;
  height: 100%;
  overflow: scroll;
  padding: 0px 20px 20px 20px;

  ${media.tablet`
    height: 100%;
    background: lavender;
  `}
`;
