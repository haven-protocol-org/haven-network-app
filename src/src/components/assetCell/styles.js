import styled from "styled-components";
import { dark } from "../../constants/themes.js";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
  background: ${dark.body.foreground};
  padding: 20px;
  border-radius: 4px;
  text-decoration: none;
  border: 1px solid ${dark.body.border};
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
