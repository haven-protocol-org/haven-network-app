import styled from "styled-components";
import { dark } from "../../constants/themes.js";

export const Container = styled.div`
  background: ${dark.body.foreground};
  padding: 20px;
  border-radius: 4px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.div`
  font-size: 16px;
  color: white;
`;

export const Description = styled.div`
  font-size: 16px;
  color: white;
`;
